// mysql
var mysqlConfig = require('../config/mysql');
require('../dao/mysql/mysql').init(mysqlConfig);

// redis
var redis = require('redis');
var redisConfig = require('../config/redis');
require('../dao/redis/redisClient').init(redis, redisConfig);


var recommendDao = require("../dao/recommendDao");




recommendDao.clearAll(function (err, rs) {
    if (err) {
        console.log(err);
        return;
    }
    recommendDao.size(function (err, size) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(size);
    })
})