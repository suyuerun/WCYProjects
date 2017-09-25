var redisClient = require('./redis/redisClient');
var dbClient = require('./mysql/mysql');
var moment = require('moment');
var shareDao = require('./shareDao');
var async = require('async');
var utils = require('../util/utils');
var logger = require('../util/log').logger;
var setting = require('../config/setting');

var RecommendDao = module.exports;

RecommendDao.beginClear = false;

/**
 * 添加推荐
 * @param {type} TDate
 * @param {type} shareID
 * @returns {undefined}
 */
RecommendDao.add = function (gameId, uid,AllPlay) {

    var recommendMixScore = setting['recommendMixScore'];

    redisClient.getConnection(function (err, client) {
        var cacheKey = setting['recommendRedisCacheKey'];
        var value = gameId + "_" + uid;
        var remParam = [cacheKey, value];

        // 删除原来缓存
        client.zrem(remParam, function (err, reply) {
            if (err) {
                logger.error('recommendCacheAdd-rem', err);
            }
        });

        // 加入缓存
        var addParam = [cacheKey, value];
        client.zadd(addParam, function (err, reply) {
            if (err) {
                console.log('err:======='+err);
                logger.error('recommendCacheAdd-add', err);
            }
        });
        return true;
    });
    if (this.beginClear === false) {
        this.beginClear = true;
        this.clearOverLimit();
    }
};
/**
 * 清除超出限制缓存
 * @returns {undefined}
 */
RecommendDao.clearOverLimit = function () {
    redisClient.getConnection(function (err, client) {
        if (err) {
            console.log(err);
            return false;
        }
        // redis cache 长度 
        var cacheKey = setting['recommendRedisCacheKey'];
        client.zcard(cacheKey, function (err, cahceCount) {
            if (err) {
                return false;
            }
            var cacheLimit = setting['recommendRedisCacheLimit'];
            // 超出配置长度删除
            if (cahceCount > cacheLimit) {
                var overflowCount = cahceCount - cacheLimit;
                client.zremrangebyrank([cacheKey, 0, overflowCount]);
            }
        });
    });

    // 定时器
    var time = setting['recommendRedisCacheClearTime'];
    setTimeout(
            (function (self) {
                return function () {
                    self.clearOverLimit();
                };
            })(this), time);
};

// 清空推荐缓存
RecommendDao.clearAll = function (cb) {
    redisClient.getConnection(function (err, client) {
        if (err) {
            cb(err);
            return fasle;
        }
        // redis cache 长度 
        var cacheKey = setting['recommendRedisCacheKey'];
        client.del(cacheKey, function (err, rs) {
            cb(err, rs)
        });
    });
}
/**
 * 推荐缓存长度
 * @param {type} cb
 * @returns {undefined}
 */
RecommendDao.size = function (cb) {
    redisClient.getConnection(function (err, client) {
        if (err) {
            cb(err);
            return fasle;
        }
        // redis cache 长度 
        var cacheKey = setting['recommendRedisCacheKey'];
        client.zcard(cacheKey, function (err, cahceCount) {
            if (err) {
                cb(err);
                return fasle;
            }
            cb(null, cahceCount);
        });
    });
};

/**
 * 获取推荐
 * @param {type} limit
 * @param {type} cb
 * @returns {undefined}
 */
RecommendDao.fetchAll = function (limit, cb) {
    console.log('==================开始执行获取推荐fetchAll');
    redisClient.getConnection(function (err, client) {
        console.log('==================获取redis');
        var cacheKey = setting['recommendRedisCacheKey'];
        client.zcard(cacheKey, function (err, cahceCount) {
            if (err) {
                cb(null, null);
                return false;
            }
            console.log('cahceCount = '+cahceCount);

            // 推荐为空
            if (cahceCount == 0) {
                console.log('==================redis里推荐为空');
                cb(null, null);
                return false;
            }

            // redis range start end
            var start = 0;
            if (cahceCount >= limit) {
                start = Math.ceil(Math.random() * (cahceCount - limit));
            }
            var end = start + limit - 1;

            // redis range
            client.zrange([cacheKey, start, end], function (err, rows) {
                if (err) {
                    cb(null, null);
                }
                var paras = [];
                for (var i in rows) {
                    var key = rows[i];
                    var keyArr = key.split('_');
                    var gameId = keyArr[0];
                    var uid = keyArr[1];
                    paras.push((function (cb) {
                        var curGameId = gameId;
                        var myUID = uid;
                        return function (cb) {
                            shareDao.fetchCacheRowById(curGameId, myUID, cb);
                        };
                    })(function (err, dbRow) {
                        if (!dbRow || err) {
                            return null;
                        }
                        return dbRow;
                    }));
                }
                async.parallel(paras, function (err, result) {
                    cb(err, result);
                });
            });
        });
    });
};







