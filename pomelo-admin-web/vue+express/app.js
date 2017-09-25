var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicons = require('connect-favicons');
var server = require('http').createServer(app);
var io = require('socket.io')(server);


var index = require('./routes/index');
var user = require('./routes/users');
var item = require('./routes/item');
var agent = require('./app/agent');
agent.init(io);

var app = express();
var pub = __dirname + '/public';
var view = __dirname + '/views';
//---session---
var session = require('express-session');
app.use(session({secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60*60 * 1000 }, //cookie生存周期60秒
    resave: true,  //cookie之间的请求规则,假设每次登陆，就算会话存在也重新保存一次
    saveUninitialized: true //强制保存未初始化的会话到存储器
}));  //这些是写在app.js里面的
// view engine setup
app.use(favicons(__dirname + '/public/img/icons'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('basepath', __dirname);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(pub));

var oneYear = 31557600000;
app.use(express.static(pub, {
    maxAge: oneYear
}));
//-------------拦截器-------------
// var openPage = ['/','/user/login','/user/loginVue','api/user/getLoginBean','user/loginout','user/getGMList','user/addGM','user/delGM','user/updGM','item/getReceiveItemList','/item'];
// app.use(function(req, res,next) {
//     var url = req.originalUrl;
//     url = (url.split('?'))[0];
//     console.log(url);
//     if(openPage.indexOf(url)>-1){
//         next();
//     }else{
//         if(req.session.loginbean){
//             next();
//         }else{
//             console.log('登录已失效');
//             res.send('1');
//         }
//     }
// });

app.use('/', index);
app.use('/user', user);
app.use('/item', item);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.on('error', function(err) {
	console.error('app on error:' + err.stack);
});



module.exports = app;
