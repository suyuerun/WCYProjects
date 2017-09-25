window.onload=function(){
    var msg = {};
    var loginedCount=0;
    var nowTime = [];
    var datasetsArr = [];
    var serverDataArr = {};
    function makeChart(nowTime,datasetsArr) {


        Vue.component('line-chart', {
            extends: VueChartJs.Line,
            mounted () {
                this.renderChart({
                    labels:nowTime,
                    datasets: datasetsArr
                }, {responsive: true, maintainAspectRatio: false})
            }

        });

        //     if(datasetsArr.length!==0&&nowTime.length!==0){
        //     datasetsArr.reverse();
        //     datasetsArr.length=15;
        //     datasetsArr.reverse();
        //
        //     nowTime.reverse();
        //     nowTime.length=15;
        //     nowTime.reverse();
        // }

    }


    var vm=new Vue({
        el:".content",
        data:{
            msg:msg,
            loginedCount:loginedCount,
        }
    });
    function contentUpdate(msg,loginedCount){
        vm.$data.msg = msg;
        //随机生成颜色
        function bgMaker() {
            return '#' +
                (function (color) {
                    return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                    && (color.length == 6) ? color : arguments.callee(color);
                })('');
        }
        for(var sid in msg) {
            let nowDataObj = {};

            loginedCount += msg[sid].loginedCount;
            if(!serverDataArr[sid]){
                serverDataArr[sid] = [];
                let bgcolor = bgMaker()+'';
                nowDataObj={
                    label: sid+' loginedCount',
                    borderColor:  bgcolor,
                    pointBackgroundColor: 'white',
                    borderWidth: 2,
                    pointBorderColor: bgcolor,
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    data: serverDataArr[sid]
                };
                datasetsArr.push(nowDataObj);
            }else {
                serverDataArr[sid].push(msg[sid].loginedCount);
            }


        }
        vm.$data.loginedCount = loginedCount;
        var myDate = new Date();
        nowTime.push(myDate.toLocaleString().toString());
        makeChart(nowTime,datasetsArr);
    }

    var STATUS_INTERVAL =  0.5*1000; // 60 seconds
    setTimeout(function req() {
        window.parent.client.request('onlineUser', null, function(err, msg) {
            if(err) {
                console.error('fail to request online user:');
                console.error(err);
                return;
            }

            contentUpdate(msg,loginedCount);
            setTimeout(req,2*1000);
        });
    }, STATUS_INTERVAL);


};
