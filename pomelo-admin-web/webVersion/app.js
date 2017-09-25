var express = require('express');
var config = require('./config/admin');
var cookieParser = require('cookie-parser');
var app = express();
var router = require('./routes');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var session = require('express-session');
var agent = require('./app/agent');
agent.init(io);
var index = require('./routes/index');
var users = require('./routes/user');
var config = require('./config/admin');
var favicons = require('connect-favicons');
//--------------------configure app----------------------
var pub = __dirname + '/public';
var view = __dirname + '/views';
app.use(favicons(__dirname + '/public/img/icons'));
app.use(cookieParser());         //必须在此行下面添加
app.use(session({secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60 * 60 * 1000 }, //cookie生存周期60*60秒
    resave: true,  //cookie之间的请求规则,假设每次登陆，就算会话存在也重新保存一次
    saveUninitialized: true //强制保存未初始化的会话到存储器
}));  //这些是写在app.js里面的
app.configure(function() {
	app.set('view engine', 'ejs');
	app.set('views', view);
	app.engine('.html', require('ejs').__express);

	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.set('basepath', __dirname);
});

app.configure('development', function() {
	app.use(express.static(pub));
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.configure('production', function() {
	var oneYear = 31557600000;
	app.use(express.static(pub, {
		maxAge: oneYear
	}));
	app.use(express.errorHandler());
});

app.on('error', function(err) {
	console.error('app on error:' + err.stack);
});
//-------------拦截器-------------
var openPage = ['/aa','/user/login','/user/checkLogin'];
app.use(function(req, res,next) {
    var url = req.originalUrl;
    url = (url.split('?'))[0];
    console.log(url);
    if(openPage.indexOf(url)>-1){
        next();
    }else{
        if(req.session.loginbean){
            next();
        }else{
        	console.log('请登录');
            res.redirect('/user/login');
        }
    }
});
//---------路由注册-------------

app.get('/', router.index);
app.get('/user/login', users.login);
app.get('/user/loginout', users.loginout);
app.get('/user/delAdmin', users.delAdmin);
app.post('/user/checkLogin', users.checkLogin);
app.post('/user/uptPwd', users.uptPwd);
app.post('/user/addAdmin', users.addAdmin);
app.get('/user/adminManage', users.adminManage);
app.get('/user/getUnameInfo', users.getUnameInfo);
app.post('/user/uptInfo', users.uptInfo);
app.get('/onlineUser', index.onlineUser);
app.get('/systemInfo', index.systemInfo);
app.get('/nodeInfo', index.nodeInfo);
app.get('/scripts', index.scripts);
app.get('/addMoney', index.addMoney);
app.get('/addItems', index.addItems);
app.get('/sendEmail', index.sendEmail);

app.get('/module/:mname', function(req, resp) {
    console.log('get /module/:mname');
	resp.redirect(req.params.mname,config);
});

server.listen(7001);
console.log('[AdminConsoleStart] visit http://0.0.0.0:7001');