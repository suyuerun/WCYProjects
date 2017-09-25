// 应用设置
var setting = {
    recommendRedisCacheKey:'share:recommend', // 推荐redis key
    recommendRedisCacheLimit:1000, // 推荐缓存数量
    recommendRedisCacheClearTime:20000,
    recommendShowNum:8, // 前端推荐显示数量
    recommendMixScore:1, // 符合推荐的最低牌型分
    
    shareDateCacheLimit:1000,// 分享表缓存数量
    shareStatisticsCacheLimit:1000, // 分享统计缓存(浏览、点赞次数) 
    shareStatisticsCacheStoreTime:30000,// 分享统计缓存,间隔多少毫秒后存入数据库
    
    shareApiForamt:'http://192.168.1.185:3000/getShare?gameId=%s&uid=%s',
    sharePlaypanelUrlFormat:"/playpanel/web-mobile/index.html?url=%s",
    
    sysCardUrlFormat:"http://192.168.1.185:3000/img/cards/card%d.png",
    uploadAvatarUrlFormat:"http://share.wcygame.com:8082/download_avatar?accid=%d&svrid=%d"
};
module.exports = setting;
