var express = require('express');
var router = express.Router();
var config = require('../config/admin');
var Sequelize = require('sequelize');
var sequelize = require('../models/ModelHeader')();
var utils = require('./utils/jsUtils');
/* GET home page. */
router.get('/', function (req, res, next) {
    utils.csvParse();
    res.send('hello items');
});
router.get('/getUidList', function (req, res, next) {
    var cpage = 1;
    if (req.query.pageNum) {
        cpage = req.query.pageNum;
    }
    pageItem = 12;   //每页显示条目数
    startPoint = (cpage - 1) * pageItem;    //查询起点位置
    rowCount = 0;    //总记录数
    sumPage = 0;

    var uid = parseInt(req.query.uid) || null;
    var dateStr = req.query.dateObj || null;
    console.log(typeof dateStr);
    var dateObj = dateStr.split(",");
    var dateStamp = [];
    for (var key in dateObj) {
        var stringTime = dateObj[key];
        var timestamp2 = Date.parse(new Date(stringTime));
        timestamp2 = timestamp2 / 1000;
        dateStamp.push(timestamp2);
    }
    console.log('dateStamp:::' + dateStamp[0]);
    if (dateStr == "[Object object]" && uid != null) {
        var sql = 'SELECT * FROM receiveItem WHERE  createAt >=  ? AND createAt <= ? AND uid = ? ORDER BY id DESC limit ?,?';
        var condition = [dateStamp[0], dateStamp[1] + 86400, uid, startPoint, pageItem];
    } else if (dateStr == "[Object object]") {
        var sql = 'SELECT * FROM receiveItem WHERE  createAt >=  ? AND createAt <= ? ORDER BY id DESC limit ?,?';
        var condition = [dateStamp[0], dateStamp[1] + 86400, startPoint, pageItem];
    } else if (uid != null) {
        var sql = 'SELECT * FROM receiveItem WHERE  uid = ? ORDER BY id DESC limit ?,?';
        var condition = [uid, startPoint, pageItem];
    } else {
        var sql = 'SELECT * FROM receiveItem ORDER BY id DESC limit ?,?';
        var condition = [startPoint, pageItem];
    }

    var sqlCount = 'SELECT COUNT(*) as count  FROM receiveItem ';
    sequelize.query(sqlCount).then(function (countRs) {
        rsjson = JSON.parse(JSON.stringify(countRs[0]));
        rowCount = rsjson[0].count;

        sequelize.query(sql, {replacements: condition, type: sequelize.QueryTypes.QUERY}).then(function (Rs) {
            if (Rs != null) {
                res.send(Rs[0])
            }
        })
    })
});
router.get('/getReceiveItemList', function (req, res, next) {
    var cpage = 1;
    if (req.query.pageNum) {
        cpage = req.query.pageNum;
    }
    pageItem = 12;   //每页显示条目数
    startPoint = (cpage - 1) * pageItem;    //查询起点位置
    rowCount = 0;    //总记录数
    sumPage = 0;

    //-----------------查询消息列表-------------------
    var sqlCount = 'SELECT COUNT(*) as count  FROM receiveItem ';
    sequelize.query(sqlCount).then(function (countRs) {
        rsjson = JSON.parse(JSON.stringify(countRs[0]));
        rowCount = rsjson[0].count;
        sumPage = Math.ceil(rowCount / pageItem);//Math.floor,Math.round
        var sql = 'SELECT * FROM receiveItem ORDER BY id DESC LIMIT ?,? ';
        sequelize.query(sql, {replacements: [startPoint, pageItem], type: sequelize.QueryTypes.QUERY}).then(function (rs) {
            if (rs != null) {
                rs[0][0].count = rowCount;
                res.send(rs[0]);
            }
        })
    });
});
module.exports = router;