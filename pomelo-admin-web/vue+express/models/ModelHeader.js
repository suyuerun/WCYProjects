var Sequelize = require('sequelize');
var config = require('../config/admin');
var seqConn = null;
var sequelize = function(){
		if(seqConn==null){
			console.log('创建连接');
			seqConn=new Sequelize(config.mysqlDbName, config.mysqlUser, config.myPassword, {
			    host: config.mysqlHost,
			    dialect: 'mysql'
			});
		}
		return seqConn;
	};

module.exports = sequelize;