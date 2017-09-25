var Sequelize = require('sequelize'); 
var sequelize =require('./ModelHeader')();

var UserModel = sequelize.define('adminusers', {
	id: {type:Sequelize.BIGINT,primaryKey: true},
    uname: Sequelize.STRING,
    password: Sequelize.STRING,
    role:Sequelize.INTEGER

},{
		timestamps: false
		//paranoid: true  //获取不到id的返回值
	});

module.exports = UserModel;