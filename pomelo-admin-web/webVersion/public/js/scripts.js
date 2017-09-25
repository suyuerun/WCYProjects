window.onload = function () {
var servers = {};
var selected ='';
var scriptsText ='';
var scriptsResult ='';
    var scripts = new Vue({
        el: "#serverList",
        data: {
            selected:selected,
            options:servers,
            scriptsText:scriptsText,
            scriptsResult:scriptsResult
        },
        methods:{
            //run the script
            run:function (evnet) {


                window.parent.client.request('scripts', {
                    command: 'run',
                    serverId: this.selected,
                    script: this.scriptsText
                }, function (err, msg) {
                    if (err) {
                        scripts.$data.scriptsResult = err;
                        return;
                    }else{
                        // alert('msg'+msg);
                        scripts.$data.scriptsResult = msg;
                    }


                });
            }
            }

        });




    var list = function () {
        window.parent.client.request('scripts', {
            command: 'list'
        }, function (err, msg) {

            if (err) {
                alert(err);
                return;
            }else{
                var obj = msg.servers;
                scripts.$data.options = obj;


            }
        })
    };
    setInterval(list.bind(this),2000);

};


