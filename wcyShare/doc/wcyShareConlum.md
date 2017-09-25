#牌局分享字段文档
	"id":1					//被分享的牌局id
	"GameData": {			//用protobuf加密的二进制字段(内容为牌局信息)
	"rounds": [1],			//局数
	"actions": [			//该局的动作记录
	  {
	    "seat": 0,			//座位号
	    "action": 1			//动作代码
	  }
	],
	"gamers": [				//参与的玩家
	  {
	    "uid": 10131,		//玩家的id
	    "seat": 0,			//玩家座号
	    "startChip": 20000, //该局开始所持筹码
	    "endChip": 19580,	//该局结束所持筹码
	    "nick": "%E5%B0%B1%E4%B8%8D%E5%91%8A%E8%AF%89%E4%BD%A0",	//被decodeURI后的玩家昵称
	    "avatar": "1011",	//该玩家头像代码
	    "ante": 70,			//ante
	    "selfCard": [42,28],//该局所持手牌代码
	    
	    "showCard": [0,0]	//该局所展示的手牌代码	      
	  }
	],
	"pid": 1000,			//牌桌pid
	"dealerSeat": 0,		//庄位
	"bigBlindSeat": 8,		//该局大盲座号
	"smallBlindSeat": 0,	//该局小盲座号
	"bigBlind": 700,		//大盲下注额
	"smallBlind": 350,		//小盲下注额
	"ante": 70,				//ante下注额
	"seatMax": 9,			//牌桌最大人数
	"matchPid": 1029,		//比赛pid
	"createAt": 1504843678380,//创建该牌局的时间戳
	"ShareUid": "10975"		  //分享者id
	}
	"AllLike":0				  //牌局点赞量
	"AllPlay":0				  //牌局播放数量
