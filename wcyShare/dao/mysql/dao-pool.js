var mysql  = require('mysql');
var _poolModule = require('generic-pool');
var mysqlConf = require('../../config/mysql.json');
/*
 * Create mysql connection pool.
 */
var createMysqlPool = function(mysqlConfig) {
	return _poolModule.Pool({
		name: 'mysql',
		create: function(callback) {
			var mysql = require('mysql');
			var client = mysql.createConnection({
				host: mysqlConf.host,
				user: mysqlConf.user,
				password: mysqlConf.password,
				database: mysqlConf.database
			});
			callback(null, client);
		},
		destroy: function(client) {
			client.end();
		},
		max: 10,
		idleTimeoutMillis : 30000,
		log : false
	});
};

exports.createMysqlPool = createMysqlPool;