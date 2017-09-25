var log4js = require('log4js');  
var path = require('path');
log4js.configure({  
    appenders:[  
        {  
            type : "console",  
            category:"console"  //设置后控制台不输出信息，可删除这句  
        },{  
            type:"dateFile",  
            filename:path.dirname(__dirname)+"/logs/log",  
            pattern: "_yyyy-MM-dd.log",  
            alwaysIncludePattern: true,     //文件名是否始终包含占位符  
            absolute: true,                //filename是否绝对路径  
            category: "dateFileLog"  
        }  
    ],  
    replaceConsole: true,  
    levels:{  
        dateFileLog:"INFO",     //设置记录器的默认显示级别，低于这个级别的日志，不会输出。其他级别(trace、debug、warn、error、fatal)  
    }  
});  
  
  
var dateFileLog = log4js.getLogger('dateFileLog');  
module.exports.logger = dateFileLog;  
  
module.exports.use = function(app){   
    //app.use(log4js.connectLogger(dateFileLog, {level:'INFO', format:':method :url'}));  
    app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));   
}  