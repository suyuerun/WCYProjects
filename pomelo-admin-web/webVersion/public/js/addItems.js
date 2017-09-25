window.onload = function () {
    var usernamed = '';
    var serverId = '';
    var balance = '';
    var uid = '';
    var item = '';
    var users = [
        {username: 'Bruce', serverId: 'player-1', balance: 56000000},
        {username: 'Chuck', serverId: 'player-1', balance: 56000000},
        {username: 'Jackie', serverId: 'player-1', balance: 56000000},
        {username: '赵', serverId: 'player-1', balance: 56000000}
    ];
    var scripts = new Vue({
        el: ".serverList",
        data: {
            username: '',
            usernamed: usernamed,
            serverId: serverId,
            balance: balance,
            uid:uid,
            num: 0,
            users: users,
            item:item,
        },
        methods: {
            //run the script
            addItems:function (uid,item,num) {
                if(uid===''||item===''){
                    alert('请输入uid/物品编号')
                }else{
                    window.parent.client.request('interface',{
                        action:'addItem',
                        uid:uid,
                        itemId:item,
                        num:num
                    },function (err,msg) {
                        if(err){
                            alert(err);
                            return;
                        }else{
                            console.log(msg);
                            alert('用户id：'+uid+',增加物品编号：'+item+',成功');
                        }

                    })
                }
                // alert(uid+','+gold);
            }
        },
        computed: {
            newUsers: function () {
                var that = this;
                return that.users.filter(function (user) {
                    if (user.username.toLowerCase().indexOf(that.username.toLowerCase()) !== -1) {
                        return true;
                    }
                })

            }

        },


    });


    var list = function () {
        window.parent.client.request('players', {
            command: 'list'
        }, function (err, msg) {
            if (err) {
                alert(err);
                return;
            } else {
                var obj = msg.servers;
                scripts.$data.options = obj;


            }
        })
    };

    // setInterval(list.bind(this),2000);

};


