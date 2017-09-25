let STATUS_INTERVAL = 1* 5 * 1000;
function changeTime (time) {
    // let time = $('#selectTime').val();
    //alert(time);
    STATUS_INTERVAL =time *60*1000;
    //alert(STATUS_INTERVAL);
    changeInverval();
}
window.onload = function () {
    var selectedTime = 0.083;

    var msg = {};


    var selectedItem = 'm_1';


    var node = new Vue({
        el: "#content",
        data: {
            msg: msg,
            selectedItem: selectedItem,
            selectedTime: selectedTime,
            options: ['m_1', 'm_5', 'm_15', 'totalmem', 'freemem', 'cpu_user', 'cpu_nice','cpu_system','cpu_iowait','cpu_steal','cpu_idle','tps','kb_read','kb_wrtn','kb_read_per','kb_wrtn_per'],
            optionsTime: [1,5,10],
        },

    });



    let id;
    changeInverval = function(){

        if (id)
            clearInterval(id);


        id= setInterval(function () {
            //alert(STATUS_INTERVAL);
            window.parent.client.request('systemInfo', null, function (err, msg) {
                if (err) {
                    console.error('fail to request system info:');
                    console.error(err);
                    return;
                }
                node.$data.msg = msg;
                selectedItem = $('#selectInput').val();
                contentUpdate(msg, selectedItem);
            });
        }, STATUS_INTERVAL);

    };
    changeInverval();
};

var nowTime = [];
var datasetsArr = [];
var serverDataArr = {};
var colorId = 0;
var selectedItem = 0;
let oldSelected = '';
// function reload(msg) {
//
// }
function contentUpdate(msg, selectedItem) {

    if (oldSelected === '' || oldSelected === selectedItem) {
        //随机生成颜色
        function bgMaker(colorId) {
            return '#' +
                (function (color) {
                    return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                    && (color.length == 6) ? color : arguments.callee(color);
                })('');
        }

        for (var sid in msg) {
            let nowDataObj = {};
            colorId += 0.1;
            let bgcolor = bgMaker()+'';
            if (!serverDataArr[sid])
                serverDataArr[sid] = {};
            if (!serverDataArr[sid][selectedItem]) {
                serverDataArr[sid] = {};
                serverDataArr[sid][selectedItem] = [];
                nowDataObj = {
                    label: sid + '\n',
                    borderColor: bgcolor,
                    pointBackgroundColor: 'white',
                    borderWidth: 2,
                    pointBorderColor:bgcolor,
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    data: serverDataArr[sid][selectedItem]
                };
                datasetsArr.push(nowDataObj);
            } else {
                // alert(selectedItem);
                serverDataArr[sid][selectedItem].push(msg[sid][selectedItem]);
            }


        }

        var myDate = new Date();
        nowTime.push(myDate.toLocaleString().toString());
        makeChart(nowTime, datasetsArr);
        oldSelected = selectedItem;
    }else{
        oldSelected = selectedItem;
        nowTime = [];
        datasetsArr = [];
        return;

    }
}

function makeChart(nowTime, datasetsArr) {
    Vue.component('line-chart', {
        extends: VueChartJs.Line,
        mounted() {
            this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(255, 0, 0, 1);


            this.gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
            this.renderChart({
                labels: nowTime,
                datasets: datasetsArr
            }, {responsive: true, maintainAspectRatio: false})
        }

    });
}
