var validator = require('express-validator').validator;

// 日期格式必须是 (2|1)YYY-(0?d|11|12)-(0?d|1d|2d|30|31)
validator.extend('isDateYmd', function (str) {
    return /^[12]\d{3}-(0?[1-9]|1[12])-(0?[1-9]|[12]\d|3[01])$/.test(str);
});

// 正整数
validator.extend('isPlusInt', function (str) {
    return validator.isInt(str,{min:0});
});

//只能是英文
validator.extend('isEn', function (str) {
    return /^\S+[a-z A-Z]$/.test(str);
});

module.exports = validator;