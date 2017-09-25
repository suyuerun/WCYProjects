
/*
 * GET users listing.
 */
// var router = express.Router();
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize =require('../models/ModelHeader')();
var Users = require('../models/UserModel');
exports.list = function(req, res){
  resp.send("respond with a resource");
};

exports.addAdmin = function(req,res){
    Users.create(req.body).then(function(rs){
        res.send('<script>alert("添加管理员成功");location.href="/user/adminManage";</script>');
    }).catch(function(err){
        // console.log('失败');
        // console.log(err);
        if(err.errors[0].path=='unameuniq')
        {
            res.send('<script>alert("账户重复");location.href="/user/adminManage";</script>');
        }else{
            res.send('数据库错误,稍后再试');
        }

    })
};

exports.uptPwd = function(req, res) {
    loginbean= req.session.loginbean;
    newPwd = req.body.newPwd;
  sql = 'update adminusers set password = ? where id = ?';
  sequelize.query(sql,{replacements:[newPwd,loginbean.id]}).then(function (rs) {
      res.send('<script>alert("密码修改成功");location.href="/user/adminManage";</script>');
  })
};
exports.delAdmin = function(req,res){
    Users.destroy({where:{id:req.query.id}}).then(function(rs) {
        res.redirect('/user/adminManage');
    }).catch(function(err){

        console.log('错误log：'+err);

    })
};
exports.adminManage = function (req,res) {
    loginbean = req.session.loginbean;
    res.locals.loginbean = loginbean;
    if(loginbean&&loginbean.role>=0){
      sql = 'select * from adminusers where role > 0;';
      sequelize.query(sql).then(function(rs){
        console.log(rs);
          res.render('adminManage',{rs:rs[0]});
      });

    }else {
        res.send('<script>alert("你无权访问此页面");location.href="/";</script>');
    }

};
exports.login = function (req,res) {
    res.render('login');

};

exports.loginout = function (req,res) {
    delete req.session.loginbean;
    res.redirect('/');
};

exports.checkLogin = function (req,res) {
    Users.findOne({where:{uname:req.body.username,password:req.body.pwd}}).then(function(rs){
        if(rs!=null){
            loginbean=new Object();
            loginbean.id = rs.id;
            loginbean.uname = rs.uname;
            loginbean.role = rs.role;
            loginbean.pwd = rs.password;
            req.session.loginbean=loginbean;
            console.log(loginbean);
            res.redirect('/');
        }else{
            res.send("<script>alert('email/密码错误');location.href='/';</script>");
        }
    });
};
exports.getUnameInfo = function (req,res) {
    uid = req.query.id;
    Users.findOne({where:{id:uid}}).then(function(uInfo){
        res.send(uInfo);
    });
};

exports.uptInfo = function(req,res){
    var uid = req.query.id;
    console.log(req.body);
    Users.update(req.body,{where:{'id':uid}}).then(function(rs){
        res.send('<script>alert("修改管理员成功");location.href="/user/adminManage";</script>');
    }).catch(function(err){
        // console.log('失败');
        // console.log(err);
        if(err.errors[0].path=='')
        {
            res.send('<script>alert("修改成功！");location.href="/user/adminManage";</script>');
        }else{
            res.send('数据库错误,稍后再试');
        }

    })
};