var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize =require('../models/ModelHeader')();
var Users = require('../models/UserModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
    if(!req.session.loginbean){
        res.redirect('./login');
    }
});
//删除GM的路由
router.get('/delGM', function(req, res, next) {
    var id = req.query.id;
    Users.destroy({where:{id:id}}).then(function (rs) {
        if(rs){
            res.send('0');
        }
    })
});
//添加GM的路由
router.post('/addGM', function(req, res, next) {
    Users.create(req.body).then(function (rs) {
        console.log('rs:'+rs);
        res.send('0');
    }).catch(function (err) {
        if(err=='SequelizeUniqueConstraintError: Validation error')
        {
            res.send('1');
        }else{
            res.send('2');
        }
    });
});
//修改GM信息的路由
router.post('/updGM', function(req, res, next) {
    Users.update(req.body,{where:{id:req.body.id}}).then(function (rs) {
        console.log('rs:'+rs);
        res.send('0');
    }).catch(function (err) {
        console.log('err======='+err);
        if(err=='SequelizeUniqueConstraintError: Validation error')
        {
            res.send('1');
        }else{
            res.send('2');
        }
    });
});
//获取GMList的路由
router.get('/getGMList', function(req, res, next) {
    var sql = 'SELECT * FROM adminusers WHERE role >0';
    sequelize.query(sql).then(function(rs) {
        res.send(rs[0]);
    })
});

//登陆路由
router.get('/getLoginBean', function(req, res, next) {
    console.log('获取loginbean');
    var loginbeanNew = req.session.loginbean;
    res.send(loginbeanNew);
});
//注销路由
router.get('/loginout', function(req, res, next) {
    delete req.session.loginbean;
    res.send('0');
});
router.get('/updpwd', function(req, res, next) {
    var password = req.query.pwd;
    var id = req.query.id;
    delete req.session.loginbean;
    var sql = 'UPDATE adminusers SET password = ? WHERE id = ?';
    sequelize.query(sql,{replacements:[password,id]}).then(function(rs){
        res.send('0');
    });
});
router.post('/loginVue', function(req, res, next) {
    Users.findOne({where:{uname:req.body.user,password:req.body.password}}).then(function(rs){
        if(rs!=null){
            loginbean=new Object();
            loginbean.id = rs.id;
            loginbean.uname = rs.uname;
            loginbean.role = rs.role;
            loginbean.pwd = rs.password;
            req.session.loginbean=loginbean;
            res.send(loginbean);
        }else{
            res.send("1");
        }
    });
});

module.exports = router;
