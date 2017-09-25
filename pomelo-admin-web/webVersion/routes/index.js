
/*
 * GET home page.
 */
var config = require('../config/admin');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var Users = require('../models/UserModel');
exports.index = function(req, res) {
        res.render('index', config);
};
exports.onlineUser = function(req, res) {
        res.render('onlineUser', config);
};
exports.systemInfo = function(req, res) {
        res.render('systemInfo', config);
};
exports.nodeInfo = function(req, res) {
        res.render('nodeInfo', config);
};
exports.scripts = function(req, res) {
        res.render('scripts', config);
};
exports.addMoney = function(req, res) {
    res.render('addMoney', config);
};
exports.addItems = function(req, res) {
    res.render('addItems', config);
};
exports.sendEmail = function(req, res) {
    res.render('sendEmail', config);
};
