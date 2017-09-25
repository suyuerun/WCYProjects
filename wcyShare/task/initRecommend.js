// mysql
var mysqlConfig = require('../config/mysql');
require('../dao/mysql/mysql').init(mysqlConfig);

// redis
var redis = require('redis');
var redisConfig = require('../config/redis');
require('../dao/redis/redisClient').init(redis, redisConfig);

var setting = require("../config/setting");
var recommendDao = require("../dao/recommendDao");
var shareDao = require("../dao/shareDao");
var moment = require("moment");



var ERROR_COMMAND_FORMAT_MSG = "error:unsupported option \n\nUsage:node initRecommend.js  YYYY-MM-DD  YYYY-MM-DD  limit";
var ERROR_COMMAND_OPTINS_MSG = "commend options error";
var RECOMMEND_LIMIT = setting.recommendRedisCacheLimit;



var arguments = process.argv.splice(2);
if (arguments.length > 2) {
    throw new Error(ERROR_COMMAND_FORMAT_MSG);
}
var today = startDate = endDate = moment(new Date()).format("YYYY-MM-DD");

startDate = arguments[0] || startDate;
endDate = arguments[1] || endDate;

if (startDate > today || startDate > endDate) {
    throw new Error(ERROR_COMMAND_OPTINS_MSG);
}

var stepCount = 1000;
recommendByDate(startDate, endDate, 0, stepCount);



function recommendByDate(startDate, endDate, offset, count) {
    recommendDao.size(function (err, cacheLen) {
        console.log("---------------------------------------------");
        console.log("当前表："+startDate);
        console.log("当前表下标："+offset+":"+count);
        console.log("当前推荐总数："+cacheLen);
        if (err || cacheLen > RECOMMEND_LIMIT) {
            return false;
        }
        if(startDate>endDate){
            console.log("完成");
            return false;
        }
        shareDao.fetchAll(startDate, offset, count, function (err, rows) {
            if (err || !rows || rows.length==0) {
                startDate = getNextDay(startDate);
                setImmediate(function(){recommendByDate(startDate,endDate, 0, count);});
                return false;
            }
             
            if (rows) {
                for (var i in rows) {
                        recommendDao.add(startDate,rows[i]['MyShareID'],rows[i]['SvrID'], rows[i]['ShareDT']);
                }
                setImmediate(function(){recommendByDate(startDate,endDate, offset + count, count);});
            }
        });
    });
}
function getNextDay(d) {
    d = new Date(d);
    d = +d + 1000 * 60 * 60 * 25;
    return moment(d).format("YYYY-MM-DD");
}









