var apiResCode = require('../config/apiResCode');
var moment = require('moment');
Utils = module.exports;

Utils.responseJson = function (res, code, msg, data) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    return res.json({
        code: code,
        msg: msg,
        data: data
    });
};

Utils.responseError = function (res, code, data) {
    var msg = apiResCode[code] || '系统错误！';
    return this.responseJson(res, code, msg, data);
};

Utils.responseSuccess = function (res, data) {
    return this.responseJson(res, 200, 'OK', data);
};

Utils.dateFormat = function (date, format) {
    try {
        return moment(date).format(format);
    } catch (e) {
        return false;
    }
};


