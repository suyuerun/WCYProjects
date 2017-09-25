var dbclient = require('./mysql/mysql');
var utils = require('../util/utils');
var limitMap = require('../util/limitMap');
var setting = require('../config/setting');
var logger = require('../util/log').logger;
var moment = require('moment');
let protobuf = require('pomelo-protobuf');
let gameProto = require('../config/gameProto');
let util = require('util');

var shareDao = module.exports;
//-----测试mongoose




// 分享表名
shareDao.tableName = 'gameHistory';

// 分享数据库前端缓存
shareDao.shareDateCache = new limitMap(setting.shareDateCacheLimit);
//浏览、点赞次数缓存,后期可能有别的操作的数据统计 { {20160902_1:{playTimes:1,likeTimes:1} , {20160902_2:{playTimes:1,likeTimes:1} }
shareDao.shareStatisticsCache = new limitMap(setting.shareStatisticsCacheLimit, setting.shareStatisticsCacheStoreTime, function (err, key, value) {
    if (err) {
        logger.error('shareOptStatistics-limitMap', err);
        return false;
    }
    var keyArr = key.split('_');
    var gameId = keyArr[0];
    var uid = keyArr[1];

    var tableName = shareDao.tableName ;
    var playTimes = value['playTimes'] ? value['playTimes'] : 0;
    var likeTimes = value['likeTimes'] ? value['likeTimes'] : 0;
    var sql = "UPDATE " + tableName + " SET AllPlay=AllPlay+" + playTimes + " , AllLike=AllLike+" + likeTimes + " WHERE gameId=?";

    // 更新数据库
    dbclient.update(sql, [gameId], function (err, res) {
        if (err) {
            logger.error('shareOptTimes-Store', err);
            return false;
        }
    });
    // 更新缓存
    var cacheKey = gameId ;
    var cacheRow = shareDao.shareDateCache.get(cacheKey);
    if (cacheRow) {
        cacheRow['AllPlay'] += playTimes;
        cacheRow['AllLike'] += likeTimes;
        shareDao.shareDateCache.set(cacheKey, cacheRow);
    }
});

shareDao.fetchCacheRowById = function (gameId,uid, cb) {
    // 日期错误时，返回NULL
    // TDate = utils.dateFormat(TDate, "YYYYMMDD");
    // if (!TDate) {
    //     cb(null, null);
    // }

    // 读取缓存
    var cacheKey = gameId ;
    row = shareDao.shareDateCache.get(cacheKey);
    if (row) {
        cb(null, row);
        // console.log('cache cb');
        return true;
    }

    // 缓存中没有，从数据库中读取
    this.fetchRowById(gameId,uid, function (err, row) {
        if (err || !row) {
            cb(null, null);
            return true;
        }
        // 缓存
        shareDao.shareDateCache.set(cacheKey, row);
         // console.log('finally cb');
        cb(null, row);
    });
};

/**
 * 获取单条分享
 * @param {type} id
 * @param {type} TDate
 * @param {type} cb
 * @returns {Boolean}
 */
shareDao.fetchRowById = function (gameId,uid,cb) {
    // 日期错误时，返回NULL
    // TDate = utils.dateFormat(TDate, "YYYYMMDD");
    // if (!TDate) {
    //     cb(null, null);
    // }

    // db 读取
     
    var tableName = this.tableName;
    var sql = "SELECT * FROM " + tableName + " WHERE id=?";
    // 日期记录表可能不存在，mysql查询会报错（err.code:ER_NO_SUCH_TABLE ），这里当作分享不存在处理，返回null，不做特殊错误处理
    dbclient.query(sql,[gameId],function (err, data) {
        if (err || !data || !data[0]) {
            cb(null, null);
        } else {
            var rowb = data[0];
             //     for (key in rowb){
             //         console.log(key+':'+rowb[key]);
             // }
                try {
                        let protos = protobuf.parse(gameProto);
                        protobuf.init({encoderProtos: protos, decoderProtos: protos});
                        rowb.gameData =  protobuf.decode('gameData', new Buffer(rowb.gameData));
                        // console.log(util.inspect(rowb,true,true));
                    cb(null, rowb);
                    } catch (e) {
                        // logger.error('decode gameData err:%j', gameData);
                        console.log(e);
                        return false;
                    }

         }
    });
};

/**
 * 获取分享列表
 * @param {type} TDate
 * @param {type} offset
 * @param {type} count
 * @param {type} cb
 * @returns {undefined}
 */
shareDao.fetchAll = function (count, cb) {
    // 日期错误时，返回NULL
    var tableName = this.tableName ;
    var sqlcount = 'SELECT COUNT(*) FROM '+tableName;
    dbclient.query(sqlcount, function (err, res) {
        if (err) {
            console.log('err'+err);
        } else {
            var off = 0;
            var sql = "SELECT * FROM " + tableName+" WHERE id >= (SELECT floor( RAND() * ((SELECT MAX(id) FROM " + tableName+" )- (SELECT MIN(id) FROM " + tableName+" )) + (SELECT MIN(id) FROM " + tableName+" )))ORDER BY id";
            var offset =parseInt( ((Math.random()*off)/2)+((Math.random()*off)/2)-count);
            count = parseInt(count);
            if (count > 0) {
                offset = offset > 0 ? offset : 0;
                sql += " LIMIT " + offset + "," + count;
            }
            // 日期记录表可能不存在，mysql查询会报错（err.code:ER_NO_SUCH_TABLE ），这里当作分享不存在处理，返回null，不做特殊错误处理
            dbclient.query(sql, function (err, res) {
                if (err) {
                    cb(null, null);
                } else {
                    // console.log('res::::::::::'+res);
                    var resRow = [];
                    for (i in res){
                        try {
                            let uidArr = [];
                            let protos = protobuf.parse(gameProto);
                            protobuf.init({encoderProtos: protos, decoderProtos: protos});
                            row =  protobuf.decode('gameData', new Buffer(res[i].gameData));
                            row.gameId =res[i].id;
                            row.AllLike=res[i].AllLike;
                            row.AllPlay=res[i].AllPlay;
                            row.createAt=res[i].createAt;
                            // console.log('单条数据的值：'+util.inspect(row,true,true));

                                for(j in row.gamers){
                                    // let gamer = (row.gamers)[j];
                                    // gamer.avatar = 1001;
                                    // gamer.nick = "gamer"+j;
                                    // console.log('添加昵称和头像：'+gamer.nick+','+gamer.avatar);
                                }
                            resRow.push(row);
                        } catch (e) {
                            // logger.error('decode gameData err:%j', gameData);
                            console.log(e);
                            return false;
                        }
                    }
                    // console.log('resRow:::::'+resRow);
                    cb(null, resRow);
                    // cb(null, res);
                }
            });
        }
    });

};

/**
 * 获取缓存中的点赞和浏览量
 * @param {type} id
 * @param {type} shareDate
 * @returns {unresolved}
 */
shareDao.fetchStatisticsCacheItem = function (gameId,uid) {

    var shareStatisticsCacheKey = gameId + '_' + uid;
    return shareDao.shareStatisticsCache.get(shareStatisticsCacheKey);
};

/**
 * 点赞数量自增
 * @param {type} id
 * @param {type} shareDate
 * @returns {Boolean}
 */
shareDao.incrLikeStatistics = function (gameId,cb) {
    var tableName = this.tableName ;
    sql = 'UPDATE '+tableName+' SET AllLike = AllLike+1 where id = ?';
    dbclient.query(sql,[gameId],function (err) {
        if(err){
            cb(err);
        }else{
            cb(code='200');
        }
    });

};
shareDao.decrLikeStatistics = function (gameId,AllLike,cb) {
    var tableName = this.tableName ;
    if(AllLike > 0){
        sql = 'UPDATE '+tableName+' SET AllLike = AllLike-1 where id = ?';
        dbclient.query(sql,[gameId],function (err) {
            if(err){
                cb(err);
            }else{
                cb(code='200');
            }
        });
    }else{
        cb(code='200');
    }


};

/**
 * 播放次数自增
 * @param {type} id
 * @param {type} TDate
 * @returns {Boolean}
 */
shareDao.incrPlayStatistics = function (gameId,uid,cb) {

    var key =  gameId + '_' + uid+ '.playTimes';
    var tableName = this.tableName ;
    sql = 'UPDATE '+tableName+' SET AllPlay = AllPlay+1 where id = ?';
    dbclient.query(sql,[gameId],function (err) {
        if(err){
            cb(err);
        }else{
            cb(code='200');
        }
    });

    shareDao.shareStatisticsCache.incr(key, 1, true);
};

/**
 * 解释shareDT字段
 * @param {type} shareDT
 * @returns {Array|shareDao.parseShareDT.rs|module.exports.parseShareDT.rs|Boolean}
 */
shareDao.parseShareDT = function (shareDT) {
    return new Date(parseInt(shareDT) * 1000).toLocaleString().substr(0,17);
};

/**
 * 获取牌局牌型分
 * @param {type} shareDT
 * @returns {module.exports.getMaxScoreFromShareDT.scroe|Boolean}
 */
shareDao.getMaxScoreFromShareDT = function (shareDT) {
    var stepArr = this.parseShareDT(shareDT);
    if (!stepArr) {
        return false;
    }

    var scroe = 0;
    for (var i in stepArr) {
        if (stepArr[i][0] == 2 && stepArr[i][0] > 0) {
            scroe = stepArr[i][0];
        }
    }
    return scroe;
};

