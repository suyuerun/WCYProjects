var LimitQueue = function (limit) {
    this._limit = limit || 1000;
    this._array = [];
};

var pro = LimitQueue.prototype;

// push
pro.push = function (e) {
    var length = this._array.length;
    if (length == this._limit) {
        this._array.shift();
    }
    this._array.push(e);
    return true;
};

// pop
pro.pop = function () {
    return  this._array.pop();
};

// size
pro.size = function () {
    return this._array.length;
}

module.exports = LimitQueue;



/*function _main(){
    var lq = new LimitQueue(4);
    lq.push(123);
    lq.push('abc');
    lq.push({a:1,b:2,c:3});
    console.log('lq=',lq);
    console.log('lq.pop():',lq.pop());
    console.log('lq=',lq);
    console.log('lq.size():',lq.size);
}
_main();*/