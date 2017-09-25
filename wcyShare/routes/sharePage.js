var express = require('express');
var router = express.Router();
var shareDao = require('../dao/shareDao');
var recommendDao = require('../dao/recommendDao');
var util = require('util');
var setting = require('../config/setting');


// 分享页面
// playCnt
// favCnt
router.get('/share/:gameId/:uid/', function (req, res, next) {
    var gameId = req.params.gameId;
    var uid = req.params.uid;
    // 非空


    // 获取分享
    shareDao.fetchCacheRowById(gameId,uid, (function (err, row) {
        // console.log('2');
        var data = {};
        if (!row || err) {
            // console.log('3');
            return res.render('error', {message: '牌谱不存在'});
        }
        // 将缓存中的值进行拷贝，防止直接修改
        for (var field in row) {
            data[field] = row[field];
        }
        var flag = false;
        // 判断玩家是否参与牌局，玩家只能分享自己参与的牌局
        for(key in data.gameData.gamers){
            if(data.gameData.gamers[key].uid==uid && !flag){
                flag = true;
                break;
            }
            continue;
        }

        // console.log(flag);

        if(!flag){
            // console.log('sharePage错误界面');
            return res.render('error', {message: '您不能查看您没有参与的牌局'});
        }
      
       

        // 增加播放次数
        shareDao.incrPlayStatistics(gameId,uid,function (code) {

                // 播放，点赞数量 = 数据库数量+缓存数量
                var statisticsCache = shareDao.fetchStatisticsCacheItem(gameId,uid);
                if (statisticsCache) {
                    var likeStatisticsCache = statisticsCache['likeTimes'] ? statisticsCache['likeTimes'] : 0;
                    var playStatisticsCache = statisticsCache['playTimes'] ? statisticsCache['playTimes'] : 0;
                    data.AllPlay += playStatisticsCache;
                    // console.log('我要增加播放量了！！！！！！！');
                    data.AllLike += likeStatisticsCache;
                    recommendDao.add(gameId,uid, data['Allplay']);

                    var shareApiForamt = setting.shareApiForamt;
                    var shareApiUrl = util.format(shareApiForamt, gameId,uid);
                    var sharePlaypanelUrlFormat = setting.sharePlaypanelUrlFormat;
                    var sharePlaypanelUrl = util.format(sharePlaypanelUrlFormat, shareApiUrl);
                    // console.log('sharePlaypanelUrl:::::::::'+sharePlaypanelUrl);
                    return res.render('share/index', {gameId:gameId,uid:uid,sharePlaypanelUrl:sharePlaypanelUrl,AllPlay:data.AllPlay,AllLike:data.AllLike});




            }
        });
        // 加入推荐

    }))
});

module.exports = router;
