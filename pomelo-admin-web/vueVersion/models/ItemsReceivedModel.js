// var Sequelize = require('sequelize');
// var sequelize =require('./ModelHeader')();
//
// var ItemsReceivedModel = sequelize.define('receiveItem', {
// 	id: {type:Sequelize.BIGINT,primaryKey: true},
//     uid:Sequelize.INTEGER,
//     itemId:Sequelize.INTEGER,
//     num:Sequelize.INTEGER,
//     name: Sequelize.STRING,
//     mobile: Sequelize.STRING,
//     wx:Sequelize.STRING,
//     address:Sequelize.STRING,
//     zipCode:Sequelize.STRING,
//     operators:Sequelize.TINYINT,
//     createAt:Sequelize.INTEGER,
//     status:Sequelize.TINYINT
//
// },{
// 		timestamps: false
// 		//paranoid: true  //获取不到id的返回值
// 	});
//
// module.exports = ItemsReceivedModel;