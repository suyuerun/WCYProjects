# 发送邮件
##接口：interface
###参数
    action:addItem								//传调函数名
    uid:84										//用户的id
    title:title									//发送给用户的邮件标题
    content:content 							//发送给用户的邮件内容
    gold:gold									//添加梦幻币的数量
    bean:bean									//添加梦幻豆的数量
    items:[{id:1001;num:10},{id:1002,num:10}]	//items:添加物品的数组，id为物品id，num为添加物品的数量
<br/>
# 添加道具
##接口：interface
###参数
    action:addItem	//传调函数名
    uid:84			//用户的id
    itemId:1001		//单独添加物品的id
    num:10			//单独添加物品的数量
<br/>
# 添加游戏币
##接口：interface
###参数
    action:addGold	//传调函数名
    uid:84			//用户的id
    gold			//添加游戏币(ACE币/梦幻豆)的数量
<br/>
# 监测在线用户人数
##接口：onlineUser
###参数
	无
<br/>
# 监测服务器系统信息
##接口：systemInfo
###参数
    无
<br/>
# 监测服务器进程信息
##接口：nodeInfo
###参数
    无
<br/>

