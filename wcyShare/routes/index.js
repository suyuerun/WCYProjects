var express = require('express');
var router = express.Router();
var shareDao = require('../dao/shareDao');
var recommendDao = require('../dao/recommendDao');
var utils = require('../util/utils');
var validator = require('../util/validator');
var moment = require('moment');
var setting = require('../config/setting');
var dbclient = require('../dao/mysql/mysql');
let protobuf = require('pomelo-protobuf');
let gameProto = require('../config/gameProto');
/*测试根目录*/
router.get('/', function (req, res, next) {
    res.render('index');
})


/* 播放接口 */
router.get('/getShare', function (req, res, next) {
     let gameDataArr = [] ;
     var sql = "SELECT * FROM gameHistory WHERE id=1076";
    // 日期记录表可能不存在，mysql查询会报错（err.code:ER_NO_SUCH_TABLE ），这里当作分享不存在处理，返回null，不做特殊错误处理
    dbclient.query(sql, function (err, data) {
        if (err) {
            console.log(err);
            res.send('数据为空');
        } else {
                var row = data[0];
                console.log(row);
                // for (key in row.gameData){
                try {
                        let protos = protobuf.parse(gameProto);
                        protobuf.init({encoderProtos: protos, decoderProtos: protos});
                        rowrs =  protobuf.decode('gameData', new Buffer(row.gameData));
                        for(key in rowrs){
                            gameDataArr.push(rowrs[key]);
                        }
                        gameDataArr.push({AllLike:row.AllLike});
                        gameDataArr.push({AllPlay:row.AllPlay});
                        console.log(gameDataArr);
                    } catch (e) {
                        // logger.error('decode gameData err:%j', gameData);
                        console.log(e);
                        return false;
                    }

                    
                // }
                res.send(gameDataArr);
            }
        
    });
});




/* 点赞 */
router.get('/doLike', function (req, res, next) {
    var TDate = req.query.TDate;
    var shareID = req.query.shareID;

    // 必要参数验证
    if (!TDate || !shareID) {
        return utils.responseError(res, '100001');
    }

    // 日期格式验证
    if (!validator.isDateYmd(TDate)) {
        return utils.responseError(res, '101001');
    }

    // ID格式验证
    if (!validator.isInt(shareID, {min: 1})) {
        return utils.responseError(res, '101002');
    }

    // 分享存在增加点赞次数，否则放回错误
    shareDao.fetchCacheRowById(shareID, TDate, function (err, row) {
        if (!row || err) {
            return utils.responseError(res, '101003');
        }
        var likeRs = shareDao.incrLikeStatistics(shareID, TDate);
        if (likeRs === false) {
            return utils.responseSuccess(res);
        }
        var shareDT = row['ShareDT'];
        recommendDao.add(shareID, TDate, shareDT);
        return utils.responseSuccess(res);
    });
});


/*
 * 获取推荐
 */
router.get('/getRecommend', function (req, res, next) {
    var recommendShowNum = setting['recommendShowNum'] || 8;
    recommendDao.fetchAll(recommendShowNum, function (err, rows) {
        var recommends = [];
        for (var i in rows) {
            if (rows[i]) {
                // 解析牌局数据
                var ShareDT = shareDao.parseShareDT(rows[i]['ShareDT']);
                
                // 参与玩家
                var playerMap = {};
                playerMap[rows[i]['AcID0']] = {nick:rows[i]['Nick0'],avatar:rows[i]['AcDT0'].split(',')[0]};
                playerMap[rows[i]['AcID1']] = {nick:rows[i]['Nick1'],avatar:rows[i]['AcDT1'].split(',')[0]};
                playerMap[rows[i]['AcID2']] = {nick:rows[i]['Nick2'],avatar:rows[i]['AcDT2'].split(',')[0]};
                
                // 获胜玩家
                var winNick, winUserID, winScore = 0,avatarUrl='';
                for (var j in ShareDT) {
                    if (ShareDT[j][0] == 2 && ShareDT[j][2] >= winScore) {
                        winScore = ShareDT[j][2];
                        winUserID = ShareDT[j][1];
                        winNick = playerMap[winUserID]['nick'];
                        avatarUrl =  playerMap[winUserID]['avatar']>0?'系统头像':'自定义';
                    }
                }
                
                // 推荐数据
                var recommendRow = {
                    MyShareID: rows[i]['MyShareID'],
                    TDate: moment(rows[i]['TMDec']).format("YYYY-MM-DD"),
                    WinNick: winNick,
                    WinScore:winScore,
                    AllLike: rows[i]['AllLike'],
                    AllPlay: rows[i]['AllPlay'],
                    AvatarUrl:avatarUrl
                };
                recommends.push(recommendRow);
            }

        }
        return utils.responseSuccess(res, recommends);
    });
});


/*
 * 获取推荐
 */
router.get('/sharePlayer', function (req, res, next) {
    return res.render('sharePlayer')
});


router.get('/s1', function (req, res, next) {
    var shareCache = shareDao.shareCache;
    var timesCache = shareDao.shareStatisticsCache;
    console.log(timesCache);
    
    return res.json(timesCache);
    //res.render('index', {title: 'Express'});
});


router.get('/share/:TDate/:ShareID', function (req, res, next) {
    var TDate = req.params.TDate;
    var ShareID = req.params.ShareID;
    res.redirect('/#!/share/'+TDate+'/'+ShareID+'/');
});

module.exports = router;
