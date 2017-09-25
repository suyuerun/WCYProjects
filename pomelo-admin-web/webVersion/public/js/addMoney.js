window.onload = function () {
    var usernamed = '';
    var serverId = '';
    var balance = '';
    var uid = '';
    var gold = '';
    var users = [
        {username: 'Bruce', serverId: 'player-1', balance: 56000000},
        {username: 'Chuck', serverId: 'player-1', balance: 56000000},
        {username: 'Jackie', serverId: 'player-1', balance: 56000000},
        {username: '赵', serverId: 'player-1', balance: 56000000}
    ];
    var assetType = "gold";
    var scripts = new Vue({
        el: ".serverList",
        data: {
            username: '',
            usernamed: usernamed,
            serverId: serverId,
            balance: balance,
            uid:uid,
            gold:gold,
            addMoney: 0,
            users: users,
            assetType:assetType
        },
        methods: {
            //run the script
            motai: function (usernamed, serverId,balance) {
                this.$data.usernamed = usernamed;
                this.$data.serverId = serverId;
                this.$data.serverId = serverId;
                this.$data.balance = balance;
            },
            add: function (usernamed, serverId, addMoney) {
                // alert('用户：' + usernamed + '    所在服务器：' + serverId + '增加余额：' + addMoney + '    成功！！');
                // window.parent.client.request('command', {
                //     action:'addGold',
                //     username: usernamed,
                //     serverId: serverId,
                //     addMoney: gold
                // }, function (err, msg) {
                //     if (err) {
                //         alert(err);
                //         return;
                //     }else{
                //        alert('用户：'+usernamed+'\t所在服务器：'+serverId+'\t增加余额'+gold +'\t成功');
                //     }
                // })
            },
            addAssets:function (uid,gold,type) {
                if(uid===''||gold===''){
                    alert('请输入uid/gold')
                }else{
                    window.parent.client.request('interface',{
                        action:'addAsset',
                        uid:uid,
                        amount:gold,
                        type:type
                    },function (err,msg) {
                        if(err){
                            alert(err);
                            return;
                        }else{
                            console.log(msg);
                            alert('用户id：'+uid+',增加金额：'+gold+',成功');
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


