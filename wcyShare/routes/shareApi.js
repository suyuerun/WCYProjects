var express = require('express');
var router = express.Router();
var shareDao = require('../dao/shareDao');
var recommendDao = require('../dao/recommendDao');
var utils = require('../util/utils');
var util = require('util');
var setting = require('../config/setting');


/* 播放接口 */
router.get('/getShare', function (req, res, next) {
    var uid = req.query.uid;
    var gameId = req.query.gameId;

    // 必要参数验证
    if (!uid || !gameId) {
        return utils.responseError(res, '100001');
    }

    // 获取分享
    shareDao.fetchCacheRowById(gameId,uid, function (err, row) {
        var data = {};
        if (!row || err) {
            return utils.responseError(res, '101003');
        }
        // 将缓存中的值进行拷贝，防止直接修改
        for (var field in row.gameData) {
            data[field] = row.gameData[field];
        }


        var flag = false;
        // 判断玩家是否参与牌局，玩家只能分享自己参与的牌局
        for(key in data.gamers){
            if(data.gamers[key].uid==uid && !flag){
                flag = true;
                break;
            }
            continue;
        }

        console.log(flag);
        if(!flag){
            console.log('api错误界面');
            return res.render('error', {message: '您不能查看您没有参与的牌局'});
        }
        var statisticsCache = shareDao.fetchStatisticsCacheItem(gameId,uid);
            if (statisticsCache) {
                // var likeStatisticsCache = statisticsCache['likeTimes'] ? statisticsCache['likeTimes'] : 0;
                // var playStatisticsCache = statisticsCache['playTimes'] ? statisticsCache['playTimes'] : 0;
                // data['AllPlay'] += playStatisticsCache;
                // data['AllLike'] += likeStatisticsCache;
            }
        data.ShareUid = uid;
        recommendDao.add(gameId,uid, data.ShareUid);
         utils.responseSuccess(res, data);

        // 增加播放次数
        // shareDao.incrPlayStatistics(gameId,uid,function (code) {
        //     // 播放，点赞数量 = 数据库数量+缓存数量
        //
        //
        // });


    });
});

/* 点赞 */
router.get('/doLike', function (req, res, next) {
   var uid = req.query.uid;
   var gameId = req.query.gameId;
    // 必要参数验证
    if (!uid || !gameId) {
        return utils.responseError(res, '100001');
    }
    // 分享存在增加点赞次数，否则放回错误
    shareDao.fetchCacheRowById(gameId,uid, function (err, row) {
        if (!row || err) {
            return utils.responseError(res, '101003');
        }
            shareDao.incrLikeStatistics(gameId,function (code) {
                if (code === '200') {
                    return  utils.responseSuccess(res);
                }
        });
        // recommendDao.add(gameId,uid, uid);
    });
});
/*取消赞*/
router.get('/unDoLike', function (req, res, next) {
    var AllLike = req.query.AllLike;
    var gameId = req.query.gameId;
    // 必要参数验证
    if (!AllLike || !gameId) {
        return utils.responseError(res, '100001');
    }
    // 分享存在增加点赞次数，否则放回错误
    shareDao.fetchCacheRowById(gameId,AllLike, function (err, row) {
        if (!row || err) {
            return utils.responseError(res, '101003');
        }
        shareDao.decrLikeStatistics(gameId,AllLike,function (code) {
            if (code === '200') {
                return  utils.responseSuccess(res);
            }
        });
        // recommendDao.add(gameId,uid, uid);
    });
});



/*
 * 获取推荐
 */
router.get('/getRecommend', function (req, res, next) {
    var recommendShowNum =  8;
    shareDao.fetchAll(recommendShowNum, function (err, rows) {
        // rows.splice(0, 5);
        // for(key in rows[0]){
        //     console.log('rows[0]='+key+':'+rows[0][key]);
        // }
        var recommends = [];
        for (var i in rows) {
            if (rows[i]) {
                // 解析牌局数据
                var createAt = shareDao.parseShareDT(rows[i].createAt);
                // console.log(createAt);
                // 参与玩家
                var sysCardUrlFormat = setting['sysCardUrlFormat'];
                // var uploadAvatarUrlFormat = setting['uploadAvatarUrlFormat'];

                // 获胜玩家
                var winNick, winUserID, winScore = 0,winSlefCard;
                var gamers = rows[i].gamers;
                for (var j in gamers) {
                    let score = gamers[j].endChip-gamers[j].startChip;
                    if (gamers[j].endChip>gamers[j].startChip&& score > winScore) {
                        winScore = score;
                        winUserID = gamers[j].uid;
                        winNick = decodeURIComponent(gamers[j].nick);
                        winSlefCard = gamers[j].selfCard;
                        // console.log('winSelfCard======================'+winSlefCard);
                        winSlefCardUrl = [];
                        for(let i=0;i<winSlefCard.length;i++){
                            if (winSlefCard[i] > 0)
                            winSlefCardUrl.push(util.format(sysCardUrlFormat, winSlefCard[i]));
                            // console.log('=-=-=-=-==-=-=-=-=-=-=-=-=-=-='+winSlefCardUrl);

                        }

                        // winSlefCardUrl = playerMap[winUserID]['avatar'] > 0
                        //         ? util.format(sysCardUrlFormat, playerMap[winUserID]['avatar'])
                        //         : util.format(uploadAvatarUrlFormat, playerMap[winUserID]['avatar']);
                    }
                }

                // 推荐数据
                var recommendRow = {
                    // MyShareID: rows[i]['ShareUid'],
                    WinNick: winNick,
                    WinScore: winScore,
                    gameId:rows[i].gameId,
                    winUserID:winUserID,
                    winSlefCardUrl:winSlefCardUrl,
                    AllLike: rows[i]['AllLike'],
                    AllPlay: rows[i]['AllPlay'],
                };
                recommends.push(recommendRow);
            }

        }
        return utils.responseSuccess(res, recommends);
    });
});


/*
 * 运行状态
 */
router.get('/state', function (req, res, next) {
    var shareDateCacheSize = shareDao.shareDateCache.size();
    var shareStatisticsCacheSize = shareDao.shareStatisticsCache.size();
    recommendDao.size(function (err, recommendSize) {
        var stateData = {
            recommendSize: recommendSize,
            shareDateCacheSize: shareDateCacheSize,
            shareStatisticsCacheSize: shareStatisticsCacheSize
        };
        return utils.responseSuccess(res, stateData);
    });
});
module.exports = router;
