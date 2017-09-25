var _redis,
        _redisConfig,
        _connection;


function handleDisconnect() {
    var host = _redisConfig.host;
    var port = _redisConfig.port;
    var options = _redisConfig.options;
    _connection = _redis.createClient(port, host, options);

    _connection.on('connect', function (err) {
        if (err) {
            console.log('连接redis错误:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    _connection.on('error', function (err) {
        console.log('redis error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

var RedisClient = module.exports;

RedisClient.init = function (redis, redisConfig) {
    if (null == redis)
        throw new Error('redis模块错误!');
    if (null == redisConfig)
        throw new Error('redis配置错误!');


    _redis = redis;
    _redisConfig = redisConfig;
    handleDisconnect();
}

var pro = RedisClient.prototype;

RedisClient.getConnection = function (callback) {
    if(!_connection){
        callback(new Error('redis连接错误'), _connection);
    }
    callback(null, _connection);
};




function _main() {
    var redis = require('redis');
    var rc = require('../../config/redis');
    //rc.port = 6378;
    RedisClient.init(redis, rc);
    RedisClient.getConnection(function (err, client) {
        client.get('user-SJWE7Jsq-sid', function (err, reply) {
            if(err){
                console.log('redisErr:======'+err)
            }
            console.log('Will print `OK`:==='+reply); // Will print `OK`
        })
    });

    RedisClient.getConnection(function (err, client) {
        client.zadd(['myzset',1], function (err, reply) {
            console.log(reply); // Will print `OK`
        })
    });

    RedisClient.getConnection(function(err,client){
        client.zrank(['myzset','asdfasfd'],function(err,reply){
            console.log('!!!!!!!',reply);
        })
    });


    RedisClient.getConnection(function(err,client){
        client.zcard('myzsetf',function(err,reply){
            console.log('********',reply);
        })
    })

}
_main();
















//var redis = require('redis');
//var RedisClient = module.exports;
//var redisConfig = require('../../config/redis');
//
//_
//
//RedisClient.create = function () {
//    var host = config.host;
//    var port = config.port;
//    var options = config.options;
//    redis.createClient(port, host, options);
//};



