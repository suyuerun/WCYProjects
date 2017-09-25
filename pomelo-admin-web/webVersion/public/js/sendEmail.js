window.onload = function () {
    var uid = '';
    var item = '';
    var title = '';
    var content = '';
    var gold = '';
    var bean = '';
    var itemList = [];
    var itemSingle = {};
    var scripts = new Vue({
        el: ".serverList",
        data: {
            uid: uid,
            title: title,
            content: content,
            gold: gold,
            bean: bean,
            item: item,
            num: '',
            itemList:itemList,
        },
        methods: {
            //run the script
            submited: function (uid,title,content,gold,bean) {
                if (uid === '' || title === ''||content==='') {
                    alert('请输入uid/物品编号')
                }else{
                    window.parent.client.request('interface', {
                        action: 'addMail',
                        uid: uid,
                        title:title,
                        content:content,
                        gold:gold,
                        bean:bean,
                        items: itemList,
                    }, function (err, msg) {
                        if (err) {
                            alert(err);
                            return;
                        } else {
                            console.log(msg);
                            alert('用户id：' + uid + ',发送邮件：' + ',成功');
                        }
                     })
                }
            },
            addItemss:function (id,num) {
                if(id===''||num===''){
                    alert('请输入物品id或物品数量');
                }else{
                    itemSingle={
                        id:id,
                        number:num
                    };
                    itemList.push(itemSingle);
                }
            },
            dele:function (index) {
                // alert(index);
                itemList.splice(index, 1);


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


