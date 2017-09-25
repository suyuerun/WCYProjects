/**
 * map,超出设置长度，或者到间隔时间，会调用storeCallBack进行存储
 * 注:非单例运行 
 * 
 * @param {Integer} limit
 * @param {Integer} storeTime
 * @param {Function} storeCallback
 * @returns null
 */
var LimitMap = function (limit, storeTime, storeCallback) {
    this.limit = limit || 1000;
    this._keys = [];
    this._map = {};
    if (typeof storeTime !== 'undefined' && (typeof storeTime !== 'number' || isNaN(storeTime) || storeTime <= 0)) {
        throw new Error('storeTime必须是一个正整数');
    } else if (typeof timeoutCallback !== 'undefined' && typeof timeoutCallback !== 'function') {
        throw new Error('storeCallback必须是一个函数');
    }
    this._storeTime = storeTime;
    this._stroeCallback = storeCallback;
    this._stroeTimeId = null;
    // [ P | F ]，P：Process 正在处理, F free 空闲中,防止长度限制存储和定时器存储同时执行
    this._storeState = 'F';
    this._initTimer();
};
var pro = LimitMap.prototype;

/**
 * 添加 | 设置 键值
 * @param {String} key
 * @param {Mix} value
 * @returns {Boolean}
 */
pro.set = function (key, value) {
    var map = this._map;
    var keys = this._keys;

    // 键不存在放入keys中
    if (!map.hasOwnProperty(key)) {
        keys.push(key);
    }

    // 存储键值
    map[key] = value;

    // map超过设置长度限制进行处理
    var length = keys.length;
    if (length >= this.limit) {
        // 如果设置了stroeCallback则调用stroeCallback进行存储,否则删除map首个元素
        if (this._stroeCallback) {
            this._store();
        } else {
            this.pop();
        }
    }
    return true;
};

/**
 * 弹出map第一个元素
 * @returns {mix}
 */
pro.pop = function () {
    var keys = this._keys;
    var map = this._map;
    if (keys.length === 0) {
        return false;
    }
    var headKey = keys.shift();
    var value = map[headKey];
    delete map[headKey];
    return {key: headKey, value: value};
};

/**
 * 获取健值
 * @param {String} key
 * @param {Mix} defaultValue
 * @returns {Mix}
 */
pro.get = function (key, defaultValue) {
    var map = this._map;
    defaultValue = defaultValue || null;
    if (map.hasOwnProperty(key)) {
        return map[key];
    }
    return defaultValue;
};

/**
 * 自增
 * @param {String} key
 * @param {Integer} step
 * @param {Boolean} flag 如果key不存在是否创建，默认false
 * @returns {Boolean}
 */
pro.incr = function (key, step, flag) {
    var deepKeys = key.split('.');
    var isDeepKey = deepKeys.length > 1 ? true : false;
    var lastKey = key;
    var ref = this._map;
    var create = flag === true ? true : false;



    if (isDeepKey === true) {
        lastKey = deepKeys.pop();
        var isFirst = true;
        while (deepKeys.length) {
            var ckey = deepKeys.shift();
            if (!ref.hasOwnProperty(ckey)) {
                if (create === false) {
                    return false;
                } else {
                    ref[ckey] = {};
                    if (isFirst === true) {
                        this._keys.push(ckey);
                    }
                }
            }
            isFirst = false;
            ref = ref[ckey];
        }
    }

    if (!ref.hasOwnProperty(lastKey)) {
        if (create === false) {
            return false;
        } else {
            if (isDeepKey === false) {
                this._keys.push(lastKey);
            }
            ref[lastKey] = 0;
        }
    } else if (ref[lastKey] != +ref[lastKey]) {
        return false;
    }

    step = step > 1 ? step : 1;
    ref[lastKey] = ref[lastKey] + step;
    return true;
};

/**
 * map 长度
 * @returns {pro._keys.length}
 */
pro.size = function () {
    return this._keys.length;
};

/**
 * 定时器
 * @returns {Boolean}
 */
pro._initTimer = function () {

    if (!this._stroeCallback) {
        return false;
    }
    this._storeTimeId = setInterval(
            (function (self) {
                return function () {
                    self._store();
                };
            })(this),
            this._storeTime);
};

/**
 * 存储
 * @returns {undefined}
 */
pro._store = function () {
    if (!this._stroeCallback || this._storeState !== 'F') {
        return false;
    }
    this._storeState === 'P';
    while (this._keys.length > 0) {
        var item = this.pop();
        var key = item.key;
        var value = item.value;
        this._stroeCallback(null, key, value);
    }
    this._storeState === 'F';
    return true;
};

module.exports = LimitMap;

/*
 var _main = function () {
 var test = new LimitMap(10, 3000, function (err, key, value) {
 if (err) {
 return false;
 }
 console.log(key, value);
 });
 test.set('a', {a1: 1});
 test.set('a2', {a1: 1});
 }
 _main();
 */

