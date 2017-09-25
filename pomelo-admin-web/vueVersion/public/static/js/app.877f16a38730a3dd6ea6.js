var host='192.168.1.185'; //修改服务器地址
var port='7001';          //修改服务器端口
var vuePort='8080';
var max1 = 1e8;           //修改普通管理员最大加钱数
var max0 = 1e12;          //修改超级管理员最大加钱数


webpackJsonp([1], {
    10: function (e, t, n) {
        "use strict";
        (function (e) {
            function r(t, r) {
                n.i(l.a)("/user/loginVue", e(t).serialize(), function (e) {
                    if (1 != e.data) return u.a.commit("login", e.data), void r.$router.push("/indexPage");
                    alert("账号/密码错误")
                }, function (e) {
                    alert(e)
                })
            }

            t.b = r, n.d(t, "a", function () {
                return c
            }), n.d(t, "c", function () {
                return d
            }), n.d(t, "h", function () {
                return f
            }), n.d(t, "g", function () {
                return p
            }), n.d(t, "f", function () {
                return h
            }), n.d(t, "d", function () {
                return m
            }), n.d(t, "e", function () {
                return v
            });
            var i = n(12), o = n.n(i), s = n(11), a = n.n(s), l = n(20), u = n(9), c = function () {
                var e = a()(o.a.mark(function e() {
                    var t;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/user/getLoginBean");
                            case 2:
                                return t = e.sent, "1" == t.data ? u.a.commit("login", null) : u.a.commit("login", t.data), e.abrupt("return", t.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), d = function () {
                var e = a()(o.a.mark(function e() {
                    var t;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/user/loginout");
                            case 2:
                                return t = e.sent, u.a.commit("login", null), e.abrupt("return", t.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), f = function () {
                var e = a()(o.a.mark(function e(t, r) {
                    var i;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/user/updpwd?id=" + t + "&pwd=" + r);
                            case 2:
                                return i = e.sent, e.abrupt("return", i.data);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }(), p = function () {
                var e = a()(o.a.mark(function e() {
                    var t;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/user/getGMList");
                            case 2:
                                return t = e.sent, e.abrupt("return", t.data);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), h = function () {
                var e = a()(o.a.mark(function e(t) {
                    var r;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/user/delGM?id=" + t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r.data);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), m = function () {
                var e = a()(o.a.mark(function e(t) {
                    var r;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/item/getReceiveItemList?pageNum=" + t);
                            case 2:
                                return r = e.sent, e.abrupt("return", r.data);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), v = function () {
                var e = a()(o.a.mark(function e(t, r, i) {
                    var s;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n.i(l.b)("/item/getUidList?uid=" + r + "&dateObj=" + i + "&pageNum=" + t);
                            case 2:
                                return s = e.sent, e.abrupt("return", s.data);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function (t, n, r) {
                    return e.apply(this, arguments)
                }
            }()
        }).call(t, n(315))
    }, 176: function (e, t, n) {
        function r(e) {
            n(308)
        }

        var i = n(3)(n(210), n(344), r, "data-v-08fa2eba", null);
        e.exports = i.exports
    }, 179: function (e, t, n) {
        "use strict";
        var r = n(1), i = n(177), o = n(337), s = n.n(o), a = n(339), l = n.n(a), u = n(176), c = n.n(u);
        r.default.use(i.a), t.a = new i.a({
            routes: [{path: "/indexPage", name: "indexPage", meta: {requireAuth: !0}, component: s.a}, {
                path: "/onlineUsers",
                name: "onlineUsers",
                meta: {requireAuth: !0},
                component: c.a
            }, {path: "/", name: "login", component: l.a}]
        })
    }, 180: function (e, t) {
    }, 182: function (e, t, n) {
        var r = n(3)(n(202), n(347), null, null, null);
        e.exports = r.exports
    }, 20: function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function (e) {
            };
            u.a.post(e, t).then(function (e) {
                n(e)
            }).catch(function (e) {
                r(e)
            })
        }

        t.a = r, n.d(t, "b", function () {
            return c
        });
        var i = n(12), o = n.n(i), s = n(11), a = n.n(s), l = n(184), u = n.n(l), c = function () {
            var e = a()(o.a.mark(function e(t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return o.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, u.a.get(t, r);
                        case 2:
                            return n = e.sent, e.abrupt("return", n);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function (t) {
                return e.apply(this, arguments)
            }
        }()
    }, 202: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            data: function () {
                return {}
            }, mounted: function () {
            }, beforeDestroy: function () {
            }, methods: {}
        }
    }, 203: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, i = n(218), o = n.n(i), s = n(12), a = n.n(s), l = n(11), u = n.n(l), c = (n(9), n(20)), d = n(10);
        t.default = {
            data: function () {
                var e = this;
                return {
                    delId: "",
                    delIndex: "",
                    delModal: !1,
                    formName: "",
                    addform: {uname: "", password: "", roleList: [{value: "1", label: "程序"}, {value: "2", label: "测试"}, {value: "3", label: "运维"}], selectRole: ""},
                    updform: {id: "", uname: "", password: "", dept: "", roleList: [{value: "1", label: "程序"}, {value: "2", label: "测试"}, {value: "3", label: "运维"}], selectRole: ""},
                    GMColumn: [{title: "编号", key: "id"}, {
                        title: "账户名", key: "account", render: function (e, t) {
                            return e("div", [e("Icon", {props: {type: "person"}}), e("strong", t.row.account)])
                        }
                    }, {title: "部门", key: "dept"}, {
                        title: "操作", key: "action", width: 150, align: "center", render: function (t, n) {
                            return t("div", [t("i-button", {
                                props: {type: "primary", size: "small"}, style: {marginRight: "5px"}, on: {
                                    click: function () {
                                        e.upd(n.index)
                                    }
                                }
                            }, "编辑"), t("i-button", {
                                props: {type: "error", size: "small"}, on: {
                                    click: function () {
                                        e.affirmRemove(n.index)
                                    }
                                }
                            }, "删除")])
                        }
                    }],
                    GMList: []
                }
            }, methods: (r = {
                cancel: function () {
                    this.formName = ""
                }, addSubmit: function () {
                    var e = this, t = {uname: this.addform.uname, password: this.addform.password, role: this.addform.selectRole};
                    n.i(c.a)("/user/addGM", t, function (t) {
                        1 == t.data ? e.$Message.error("账户已存在，请更换！") : 2 == t.data ? e.$Message.error("未知的数据库错误！") : e.$Message.success("添加GM账户成功！")
                    }, function (t) {
                        e.$Message.error("请求发送错误！" + t)
                    }), this.getGMList()
                }, upd: function (e) {
                    var t = (this.GMList[e].dept, this);
                    t.formName = "updi-form", t.updform.id = this.GMList[e].id, t.updform.uname = this.GMList[e].account, t.updform.dept = this.GMList[e].dept
                }, affirmRemove: function (e) {
                    var t = this;
                    t.delId = this.GMList[e].id, t.delIndex = e, t.delModal = !0
                }, ok: function () {
                    var e = this;
                    return u()(a.a.mark(function t() {
                        var r, i;
                        return a.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return e.GMList.splice(e.delIndex, 1), r = e.delId, t.next = 4, n.i(d.f)(r);
                                case 4:
                                    i = t.sent, 0 == i && e.$Message.success("删除成功");
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            }, o()(r, "cancel", function () {
                this.$Message.info("已取消")
            }), o()(r, "add", function () {
                this.formName = "addi-form"
            }), o()(r, "updSubmit", function () {
                var e = this, t = {id: this.updform.id, uname: this.updform.uname, role: this.updform.selectRole};
                n.i(c.a)("/user/updGM", t, function (t) {
                    1 == t.data ? e.$Message.error("账户已存在，请更换！") : 2 == t.data ? e.$Message.error("未知的数据库错误！") : e.$Message.success("更改GM账户成功！")
                }, function (t) {
                    e.$Message.error("请求发送错误！" + t)
                }), this.getGMList()
            }), o()(r, "handleReset", function (e) {
                this.$refs[e].resetFields()
            }), o()(r, "getGMList", function () {
                var e = this;
                return u()(a.a.mark(function t() {
                    var r, i, o, s, l, u, c, f;
                    return a.a.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return r = [], i = e, t.next = 4, n.i(d.g)();
                            case 4:
                                o = t.sent;
                                for (s in o) l = function (e) {
                                    switch (e) {
                                        case 1:
                                            return "程序";
                                        case 2:
                                            return "测试";
                                        case 3:
                                            return "运营"
                                    }
                                }, u = o[s].role, c = l(u), f = {id: o[s].id, account: o[s].uname, dept: c}, r.push(f);
                                i.GMList = r;
                            case 7:
                            case"end":
                                return t.stop()
                        }
                    }, t, e)
                }))()
            }), o()(r, "oldPwdCheck", function () {
                var e = this;
                e.addform.oldpassword != e.addform.oldpwdinput ? (this.$Message.error("旧密码不正确"), this.submitFlag = !1) : this.submitFlag = !0
            }), o()(r, "oldNewCheck", function () {
                var e = this;
                e.addform.passwdCheck != e.addform.passwd ? (this.$Message.error("两次密码不一致"), this.submitFlag = !1) : this.submitFlag = !0
            }), r), mounted: function () {
                this.getGMList()
            }
        }
    }, 204: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            created: function () {
            }, mounted: function () {
            }, data: function () {
                return {}
            }, methods: {}, computed: {}
        }
    }, 205: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9), i = n(26);
        t.default = {
            data: function () {
                return {
                    formInline: {uidValue: "", moneyValue: 1, assetType: ""},
                    ruleInline: {uidValue: [{required: !0, message: "请填写用户uid", trigger: "blur"}], moneyValue: [{required: !0, message: "请填写添加金额", trigger: "blur"}]},
                    disabled: !0,
                    addMoneyModal: !1,
                    role: "",
                    max1: i.max1,
                    max0: i.max0
                }
            }, mounted: function () {
                this.getRole()
            }, beforeDestroy: function () {
            }, methods: {
                getRole: function () {
                    var e = this;
                    if (r.a.state.loginbean) {
                        var t = r.a.state.loginbean;
                        e.role = t.role
                    } else window.location.href = "/"
                }, addMoneyModalShow: function () {
                    if ("" === this.formInline.uidValue || "" === this.formInline.moneyValue) return void this.$Message.info("请输入收件人的uid/添加金币额");
                    this.addMoneyModal = !0
                }, ok: function () {
                    var e = this;
                    if ("1" == this.role && this.formInline.moneyValue > i.max1) return void e.$Message.error("您的权限每次只能添加1亿");
                    window.parent.client.request("interface", {
                        action: "addAsset",
                        uid: this.formInline.uidValue,
                        amount: this.formInline.moneyValue,
                        type: this.formInline.assetType
                    }, function (t, n) {
                        if ("101" == t) return void e.$Message.error("抱歉，该用户不在线");
                        "0" == n && (console.log(n), e.$Message.succes("用户id：" + this.formInline.uidValue + ",增加金额：" + this.formInline.moneyValue + ",成功"))
                    })
                }, cancel: function () {
                    this.$Message.info("点击了取消")
                }
            }
        }
    }, 206: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(12), i = n.n(r), o = n(11), s = n.n(o), a = (n(20), n(9)), l = n(10), u = n(176), c = n.n(u), d = n(340), f = n.n(d), p = n(343), h = n.n(p), m = n(336), v = n.n(m), g = n(342),
            y = n.n(g), b = n(341), w = n.n(b), x = n(334), k = n.n(x), _ = n(338), C = n.n(_), T = n(335), I = n.n(T);
        n(364), n(361), n(362), n(363);
        var j = n(26);
        t.default = {
            data: function () {
                return {uname: "未登录", role: "", myComponent: "hello2"}
            }, methods: {
                clickCompon: function (e) {
                    this.myComponent = e
                }, getLoginerInfo: function () {
                    var e = this;
                    return s()(i.a.mark(function t() {
                        var r, o, s;
                        return i.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return r = e, t.next = 3, n.i(l.a)();
                                case 3:
                                    o = t.sent, a.a.state.loginbean ? (s = a.a.state.loginbean, r.uname = s.uname, r.role = s.role, e.connectAnget()) : window.location.href = "/";
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }, connectAnget: function () {
                    var e = new Date, t = j.host, n = j.port;
                    (window.client = new ConsoleClient({
                        username: "",
                        password: "",
                        md5: !0
                    })).connect("bowser-" + e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds(), t, n, function (e) {
                        e ? (console.error("fail to connect to admin console server:"), console.error(e), alert(e)) : console.info("admin console connected.")
                    })
                }, getLoginbeanFun: function () {
                    n.i(l.a)(), this.getLoginerInfo()
                }, loginout: function () {
                    var e = this;
                    return s()(i.a.mark(function t() {
                        var r;
                        return i.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, n.i(l.c)();
                                case 2:
                                    r = t.sent, "0" == r && (e.$Message.info("用户已注销"), setTimeout(function () {
                                        location.reload()
                                    }, 1e3));
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            }, beforeMount: function () {
                this.getLoginbeanFun()
            }, mounted: function () {
            }, beforeDestroy: function () {
            }, components: {onlineUsers: c.a, nodeInfo: f.a, systemInfo: h.a, addMoney: v.a, sendEmail: y.a, pwdUpdate: w.a, GMManager: k.a, itemReceivedList: C.a, hello2: I.a}
        }
    }, 207: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(12), i = n.n(r), o = n(11), s = n.n(o), a = n(10), l = n(38);
        t.default = {
            data: function () {
                return {
                    changePageType: "allPage",
                    pageNum: 1,
                    count: 0,
                    uid: null,
                    columns6: [{title: "编号", key: "id", width: "85"}, {title: "玩家编号", key: "uid", width: "85"}, {title: "物品名称", key: "itemId", width: "115"}, {
                        title: "物品数量",
                        key: "num",
                        width: "85"
                    }, {title: "真实姓名", key: "name", width: "85"}, {title: "手机号", key: "mobile", width: "150"}, {title: "微信号", key: "wx", width: "150"}, {
                        title: "玩家地址",
                        key: "address",
                        width: "300"
                    }, {title: "邮编", key: "zipCode", width: "85"}, {title: "运营商", key: "operators", width: "85"}, {title: "记录日期", key: "createAt"}, {title: "发放状态", key: "status", width: "85"}],
                    options2: {
                        shortcuts: [{
                            text: "最近一周", value: function () {
                                var e = new Date, t = new Date;
                                return t.setTime(t.getTime() - 6048e5), [t, e]
                            }
                        }, {
                            text: "最近一个月", value: function () {
                                var e = new Date, t = new Date;
                                return t.setTime(t.getTime() - 2592e6), [t, e]
                            }
                        }, {
                            text: "最近三个月", value: function () {
                                var e = new Date, t = new Date;
                                return t.setTime(t.getTime() - 7776e6), [t, e]
                            }
                        }]
                    },
                    data5: [],
                    dateObj: {},
                    switch1: !1
                }
            }, methods: {
                onoffSearch: function (e) {
                    e ? this.$Message.info("检索已开启") : this.$Message.info("检索已关闭")
                }, showAll: function () {
                    var e = this;
                    e.dateObj = {}, e.uid = null, e.changePageType = "allPage", this.getReceivedList(1)
                }, daterange: function (e) {
                    this.dateObj = e
                }, changePage: function (e) {
                    this.getReceivedList(e)
                }, changeSearchPage: function (e) {
                    var t = this.uid, n = this.dateObj;
                    this.getUidList(e, t, n)
                }, getReceivedList: function (e) {
                    var t = this;
                    return s()(i.a.mark(function r() {
                        var o, s, u, c, d, f, p, h, m;
                        return i.a.wrap(function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return p = function (e) {
                                        var t = e + "";
                                        for (var n in l) if (n == t) return l[n]
                                    }, f = function (e) {
                                        switch (e) {
                                            case 0:
                                                return "未处理";
                                            case 1:
                                                return "已发放";
                                            default:
                                                return "未知"
                                        }
                                    }, d = function (e) {
                                        switch (e) {
                                            case 1:
                                                return "移动";
                                            case 2:
                                                return "联通";
                                            case 3:
                                                return "电信";
                                            default:
                                                return "未录入"
                                        }
                                    }, c = function (e) {
                                        return new Date(1e3 * parseInt(e)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
                                    }, o = t, s = [], r.next = 8, n.i(a.d)(e);
                                case 8:
                                    u = r.sent, o.count = u[0].count;
                                    for (h in u) m = {
                                        id: u[h].id,
                                        uid: u[h].uid,
                                        itemId: p(u[h].itemId),
                                        num: u[h].num,
                                        name: u[h].name,
                                        mobile: u[h].mobile,
                                        wx: u[h].wx,
                                        address: u[h].address,
                                        zipCode: u[h].zipCode,
                                        operators: d(u[h].operators),
                                        createAt: c(u[h].createAt),
                                        status: f(u[h].status)
                                    }, s.push(m);
                                    o.data5 = s;
                                case 12:
                                case"end":
                                    return r.stop()
                            }
                        }, r, t)
                    }))()
                }, getUidList: function (e, t, r) {
                    var o = this;
                    return s()(i.a.mark(function r() {
                        var s, u, c, d, f, p, h, m, v, g;
                        return i.a.wrap(function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return m = function (e) {
                                        var t = e + "";
                                        for (var n in l) if (n == t) return l[n]
                                    }, h = function (e) {
                                        switch (e) {
                                            case 0:
                                                return "未处理";
                                            case 1:
                                                return "已发放";
                                            default:
                                                return "未知"
                                        }
                                    }, p = function (e) {
                                        switch (e) {
                                            case 1:
                                                return "移动";
                                            case 2:
                                                return "联通";
                                            case 3:
                                                return "电信";
                                            default:
                                                return "未录入"
                                        }
                                    }, f = function (e) {
                                        return new Date(1e3 * parseInt(e)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
                                    }, s = o, s.changePageType = "searchPage", s.uid = t, u = [], c = o.dateObj, r.next = 11, n.i(a.e)(e, t, c);
                                case 11:
                                    d = r.sent;
                                    for (v in d) g = {
                                        id: d[v].id,
                                        uid: d[v].uid,
                                        itemId: m(d[v].itemId),
                                        num: d[v].num,
                                        name: d[v].name,
                                        mobile: d[v].mobile,
                                        wx: d[v].wx,
                                        address: d[v].address,
                                        zipCode: d[v].zipCode,
                                        operators: p(d[v].operators),
                                        createAt: f(d[v].createAt),
                                        status: h(d[v].status)
                                    }, u.push(g);
                                    s.data5 = u, s.dateObj = c;
                                case 15:
                                case"end":
                                    return r.stop()
                            }
                        }, r, o)
                    }))()
                }
            }, mounted: function () {
                this.getReceivedList(1)
            }
        }
    }, 208: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(10);
        t.default = {
            data: function () {
                return {
                    formInline: {user: "", password: ""},
                    ruleInline: {
                        user: [{required: !0, message: "请填写用户名", trigger: "blur"}],
                        password: [{required: !0, message: "请填写密码", trigger: "blur"}, {type: "string", min: 6, message: "密码长度不能小于6位", trigger: "blur"}]
                    }
                }
            }, methods: {
                handleSubmit: function (e) {
                    var t = this;
                    this.$refs[e].validate(function (e) {
                        e ? t.$Message.success("提交成功!") : t.$Message.error("表单验证失败!")
                    })
                }, login: function (e) {
                    n.i(r.b)(loginform, this)
                }
            }
        }
    }, 209: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(28), i = null;
        t.default = {
            created: function () {
            }, data: function () {
                return {
                    selectedItem: "cpuAvg",
                    selectedTime: .083,
                    options: ["cpuAvg", "memAvg", "vsz", "rss", "usr", "sys", "gue"],
                    optionsTime: [1, 5, 10],
                    columns: [{title: "Time", key: "time", sortable: !0}, {title: "serverId", key: "serverId", sortable: !0}, {title: "serverType", key: "serverType", sortable: !0}, {
                        title: "pid",
                        key: "pid",
                        sortable: !0
                    }, {title: "cpuAvg", key: "cpuAvg", sortable: !0}, {title: "memAvg", key: "memAvg", sortable: !0}, {title: "vsz", key: "vsz", sortable: !0}, {
                        title: "rss",
                        key: "rss",
                        sortable: !0
                    }, {title: "usr(CPU I/O)", key: "usr", sortable: !0}, {title: "sys(CPU I/O)", key: "sys", sortable: !0}, {title: "gue(CPU I/O)", key: "gue", sortable: !0}],
                    msg: "aaaaaa",
                    datacollection: null,
                    data: []
                }
            }, methods: {
                fillData: function (e, t) {
                    this.datacollection = {labels: e, datasets: t}
                }, contentUpdate: function (e) {
                    var t = this.selectedItem, n = this.serverDataArr, r = [];
                    this.serverDataArr.length > 0 && (this.serverDataArr = []);
                    var i = this;
                    i.msg = e;
                    for (var o in e) {
                        var s = {}, a = {};
                        a = {
                            id: o.index + 1,
                            time: e[o].time,
                            serverId: o,
                            serverType: e[o].serverType,
                            pid: e[o].pid,
                            cpuAvg: e[o].cpuAvg,
                            memAvg: e[o].memAvg,
                            vsz: e[o].vsz,
                            rss: e[o].rss,
                            usr: e[o].usr,
                            sys: e[o].sys,
                            gue: e[o].gue
                        }, r.push(a);
                        var l = function () {
                            return "#" + Math.floor(16777215 * Math.random()).toString(16)
                        }() + "";
                        n[o] || (n[o] = {}), n[o][t] ? this.serverDataArr[o][t].push(e[o][t]) : (n[o] = {}, n[o][t] = [], s = {
                            label: o + "\n",
                            borderColor: l,
                            pointBackgroundColor: "white",
                            borderWidth: 2,
                            pointBorderColor: l,
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            data: n[o][t]
                        }, this.datasetsArr.push(s))
                    }
                    i.data = r;
                    var u = new Date;
                    this.nowTime.push(u.toLocaleString().toString() + ""), i.fillData(this.nowTime, this.datasetsArr)
                }, req: function () {
                    var e = this;
                    window.parent.client.request("nodeInfo", null, function (t, n) {
                        if (t) return console.error("fail to request online user:"), void console.error(t);
                        e.contentUpdate(n)
                    })
                }, clearValues: function () {
                    this.nowTime = [], this.serverDataArr = {}, this.datasetsArr = [], this.fillData(this.nowTime, this.datasetsArr)
                }, changeTime: function (e) {
                    var t = this;
                    this.clearValues(), window.clearInterval(i), this.interval = 1e3 * e, i = setInterval(function () {
                        t.req()
                    }, this.interval)
                }
            }, mounted: function () {
                var e = this;
                i && (window.clearInterval(i), this.clearValues(), i = null), this.interval = 5e3, this.nowTime = [], this.serverDataArr = {}, this.datasetsArr = [], i = setInterval(function () {
                    e.req()
                }, this.interval)
            }, computed: {}, distroyed: function () {
                window.clearTimeInterval(this.req)
            }, components: {LineChart: r.a}
        }
    }, 210: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(28), i = null;
        t.default = {
            created: function () {
            }, data: function () {
                return {columns: [{title: "服务器名称", key: "serverId", sortable: !0}, {title: "在线人数", key: "loginedCount", sortable: !0}], msg: "aaaaaa", datacollection: null, data: []}
            }, methods: {
                fillData: function (e, t) {
                    this.datacollection = {labels: e, datasets: t}
                }, contentUpdate: function (e) {
                    var t = this.serverDataArr, n = [], r = this;
                    r.msg = e;
                    for (var i in e) {
                        var o = 0, s = {}, a = {};
                        if (o += e[i].loginedCount, a = {
                                serverId: i,
                                loginedCount: o
                            }, n.push(a), t[i]) this.serverDataArr[i].length > 15 && this.serverDataArr[i].splice(0, 1), this.serverDataArr[i].push(e[i].loginedCount); else {
                            t[i] = [];
                            var l = function () {
                                return "#" + Math.floor(16777215 * Math.random()).toString(16)
                            }() + "";
                            s = {
                                label: i + " loginedCount",
                                borderColor: l,
                                pointBackgroundColor: "white",
                                borderWidth: 2,
                                pointBorderColor: l,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                data: t[i]
                            }, this.datasetsArr.push(s)
                        }
                    }
                    r.data = n;
                    var u = new Date;
                    this.nowTime.length > 15 && this.nowTime.splice(0, 1), this.nowTime.push(u.toLocaleString().toString() + ""), r.fillData(this.nowTime, this.datasetsArr)
                }, req: function () {
                    var e = this;
                    window.parent.client.request("onlineUser", null, function (t, n) {
                        if (t) return console.error("fail to request online user:"), void console.error(t);
                        e.contentUpdate(n)
                    })
                }, clearValues: function () {
                    this.nowTime = [], this.serverDataArr = {}, this.datasetsArr = [], this.fillData(this.nowTime, this.datasetsArr)
                }
            }, mounted: function () {
                var e = this;
                i && (window.clearInterval(i), this.clearValues(), i = null), this.interval = 5e3, this.nowTime = [], this.serverDataArr = {}, this.datasetsArr = [], i = setInterval(function () {
                    e.req()
                }, 5e3)
            }, computed: {}, distroyed: function () {
                window.clearTimeInterval(this.req)
            }, components: {LineChart: r.a}
        }
    }, 211: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(12), i = n.n(r), o = n(11), s = n.n(o), a = n(9), l = (n(20), n(10));
        t.default = {
            data: function () {
                return {formCustom: {id: "", passwd: "", passwdCheck: "", oldpassword: "aaaaaa", oldpwdinput: ""}}
            }, methods: {
                updSubmit: function () {
                    var e = this;
                    return s()(i.a.mark(function t() {
                        var r, o;
                        return i.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = e, !1 !== e.submitFlag) {
                                        t.next = 5;
                                        break
                                    }
                                    e.$Message.error("更改密码失败!请检验"), t.next = 9;
                                    break;
                                case 5:
                                    return t.next = 7, n.i(l.h)(r.i - formCustom.id, r.i - formCustom.passwd);
                                case 7:
                                    o = t.sent, "0" == o && (e.$Message.success("密码更改成功!"), setTimeout(function () {
                                        location.reload()
                                    }, 1e3));
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }, handleReset: function (e) {
                    this.$refs[e].resetFields()
                }, getOldPwd: function () {
                    var e = this;
                    if (a.a.state.loginbean) {
                        var t = a.a.state.loginbean;
                        e.formCustom.oldpassword = t.pwd, e.formCustom.id = t.id
                    } else this.$Message.error("登录已失效，请重新登录"), setTimeout(function () {
                        location.reload()
                    }, 1e3)
                }, oldPwdCheck: function () {
                    var e = this;
                    e.formCustom.oldpassword != e.formCustom.oldpwdinput ? (this.$Message.error("旧密码不正确"), this.submitFlag = !1) : this.submitFlag = !0
                }, oldNewCheck: function () {
                    var e = this;
                    e.formCustom.passwdCheck != e.formCustom.passwd ? (this.$Message.error("两次密码不一致"), this.submitFlag = !1) : this.submitFlag = !0
                }
            }, mounted: function () {
                this.getOldPwd()
            }
        }
    }, 212: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9), i = n(26), o = n(38);
        t.default = {
            data: function () {
                return {
                    formInline: {uidValue: "", goldValue: null, beanValue: null, itemValue: "", itemCount: null, content: "", tittle: "", itemName: "", itemList: []},
                    itemList: [],
                    itemSingle: {},
                    addMoneyModal: !1,
                    role: "",
                    max1: i.max1,
                    max0: i.max0
                }
            }, mounted: function () {
                this.getRole(), this.itemCode()
            }, beforeDestroy: function () {
            }, methods: {
                itemCode: function () {
                    var e = this, t = [];
                    for (var n in o) {
                        var r = {value: n, label: o[n]};
                        t.push(r)
                    }
                    e.formInline.itemList = t
                }, getRole: function () {
                    var e = this;
                    if (r.a.state.loginbean) {
                        var t = r.a.state.loginbean;
                        e.role = t.role
                    } else window.location.href = "/"
                }, ok: function () {
                    if ("" === this.formInline.uidValue) return void this.$Message.info("请输入收件人的uid");
                    var e = this;
                    if ("1" == this.role && this.formInline.goldValue > i.max1 || this.formInline.beanValue > i.max1) return void e.$Message.error("您的权限每次只能添加1亿");
                    window.parent.client.request("interface", {
                        action: "addMail",
                        uid: this.formInline.uidValue,
                        title: this.formInline.tittle,
                        content: this.formInline.content,
                        gold: this.formInline.goldValue,
                        bean: this.formInline.beanValue,
                        items: this.itemList
                    }, function (t, n) {
                        if ("101" == t) return void e.$Message.error("用户id：" + e.formInline.uidValue + ",不在服务器");
                        "0" == n && e.$Message.info("用户id：" + e.formInline.uidValue + ",发送邮件成功")
                    })
                }, cancel: function () {
                    this.$Message.info("已取消")
                }, addItems: function () {
                    this.formInline.itemValue;
                    if ("" === this.formInline.itemValue || "" === this.formInline.itemCount) return void this.$Message.info("请输入 物品编号/物品数量");
                    for (var e in this.itemList) if (this.itemList[e].id == this.formInline.itemValue) return this.itemList[e].number >= 10 ? void this.$Message.error("每次添加数量不能超过10个") : void(this.itemList[e].number = parseInt(this.itemList[e].number) + parseInt(this.formInline.itemCount));
                    if (this.formInline.itemCount > 10) return void this.$Message.error("每次添加数量不能超过10个");
                    this.itemSingle = {id: this.formInline.itemValue, number: this.formInline.itemCount}, this.itemList.push(this.itemSingle)
                }, dele: function (e) {
                    this.itemList.splice(e, 1), this.$Message.info("已删除")
                }
            }
        }
    }, 213: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(28), i = null;
        t.default = {
            data: function () {
                return {
                    selectedItem: "m_1",
                    selectedTime: .083,
                    options: ["m_1", "m_5", "m_15", "totalmem", "freemem", "cpu_user", "cpu_nice", "cpu_system", "cpu_iowait", "cpu_steal", "cpu_idle", "tps", "kb_read", "kb_wrtn", "kb_read_per", "kb_wrtn_per"],
                    optionsTime: [1, 5, 10],
                    columns: [{title: "Time", key: "time", sortable: !0, width: 100, fixed: "left"}, {title: "serverId", key: "serverId", width: 120, sortable: !0}, {
                        title: "hostname",
                        key: "hostname",
                        width: 120,
                        sortable: !0
                    }, {title: "1m     (loadavg)", key: "m_1", width: 120, sortable: !0}, {title: "5m     (loadavg)", key: "m_5", width: 120, sortable: !0}, {
                        title: "15m     (loadavg)",
                        key: "m_15",
                        width: 120,
                        sortable: !0
                    }, {title: "totalmem(mem)", key: "totalmen", width: 100, sortable: !0}, {title: "freemem(mem)", key: "freemem", width: 100, sortable: !0}, {
                        title: "free/total(mem)",
                        key: "free_total",
                        width: 100,
                        sortable: !0
                    }, {title: "user(CPU I/O)", key: "cpu_user", width: 75, sortable: !0}, {title: "nice(CPU I/O)", key: "cpu_nice", width: 75, sortable: !0}, {
                        title: "system(CPU I/O)",
                        key: "cpu_system",
                        width: 75,
                        sortable: !0
                    }, {title: "iowait(CPU I/O)", key: "cpu_iowait", width: 75, sortable: !0}, {title: "steal(CPU I/O)", key: "cpu_steal", width: 75, sortable: !0}, {
                        title: "idle(CPU I/O)",
                        key: "cpu_idle",
                        width: 75,
                        sortable: !0
                    }, {title: "tps(CPU I/O)", key: "tps", width: 75, sortable: !0}, {title: "read(CPU I/O)", key: "kb_read", width: 75, sortable: !0}, {
                        title: "wrtn(CPU I/O)",
                        key: "kb_wrtn",
                        width: 75,
                        sortable: !0
                    }, {title: "kb_read/s(CPU I/O)", key: "kb_read_per", width: 75, sortable: !0}, {
                        title: "kb_wrtn/s(CPU I/O)      ",
                        key: "kb_wrtn_per",
                        sortable: !0,
                        width: 150,
                        height: 250,
                        fixed: "right"
                    }],
                    msg: "aaaaaa",
                    datacollection: null,
                    data: []
                }
            }, methods: {
                fillData: function (e, t) {
                    for (var n in t) for (var r in t[n]) ;
                    this.datacollection = {labels: e, datasets: t}
                }, contentUpdate: function (e) {
                    var t = this.selectedItem, n = this.serverDataArr, r = [];
                    this.serverDataArr.length > 0 && (this.serverDataArr = []);
                    var i = this;
                    i.msg = e;
                    for (var o in e) {
                        var s = {}, a = {};
                        a = {
                            time: e[o].Time,
                            serverId: o,
                            hostname: e[o].hostname,
                            cpu_user: e[o].cpu_user,
                            cpu_nice: e[o].cpu_nice,
                            cpu_system: e[o].cpu_system,
                            cpu_iowait: e[o].cpu_iowait,
                            cpu_steal: e[o].cpu_steal,
                            cpu_idle: e[o].cpu_idle,
                            tps: e[o].tps,
                            kb_read: e[o].kb_read,
                            kb_wrtn: e[o].kb_wrtn,
                            kb_read_per: e[o].kb_read_per,
                            kb_wrtn_per: e[o].kb_wrtn_per,
                            totalmem: e[o].totalmem,
                            freemem: e[o].freemem,
                            free_total: e[o].freemem / e[o].totalmem,
                            m_1: e[o].m_1,
                            m_5: e[o].m_5,
                            m_15: e[o].m_15
                        }, r.push(a);
                        var l = function () {
                            return "#" + Math.floor(16777215 * Math.random()).toString(16)
                        }() + "";
                        n[o] || (n[o] = {}), n[o][t] ? this.serverDataArr[o][t].push(e[o][t]) : (n[o] = {}, n[o][t] = [], s = {
                            label: o + "\n",
                            borderColor: l,
                            pointBackgroundColor: "white",
                            borderWidth: 2,
                            pointBorderColor: l,
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            data: n[o][t]
                        }, this.datasetsArr.push(s))
                    }
                    i.data = r;
                    var u = new Date;
                    this.nowTime.push(u.toLocaleString().toString() + ""), i.fillData(this.nowTime, this.datasetsArr)
                }, req: function () {
                    var e = this;
                    window.parent.client.request("systemInfo", null, function (t, n) {
                        if (t) return console.error("fail to request online user:"), void console.error(t);
                        e.contentUpdate(n)
                    })
                }, clearValues: function () {
                    this.nowTime = [], this.serverDataArr = {}, this.datasetsArr = [], this.fillData(this.nowTime, this.datasetsArr)
                }, changeTime: function (e) {
                    var t = this;
                    this.clearValues(), window.clearInterval(i), this.interval = 1e3 * e, i = setInterval(function () {
                        t.req()
                    }, this.interval)
                }
            }, mounted: function () {
                var e = this;
                i && (window.clearInterval(i), this.clearValues(), i = null), this.interval = 5e3, this.nowTime = [], this.serverDataArr = {}, this.datasetsArr = [], i = setInterval(function () {
                    e.req()
                }, this.interval)
            }, computed: {}, distroyed: function () {
                window.clearTimeInterval(this.req)
            }, components: {LineChart: r.a}
        }
    }, 214: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), i = n(182), o = n.n(i), s = n(179), a = n(181), l = n.n(a), u = n(180), c = (n.n(u), n(9));
        r.default.use(l.a), r.default.use(n(183)), r.default.config.productionTip = !0, new r.default({
            el: "#app",
            router: s.a,
            template: "<App/>",
            components: {App: o.a}
        }), s.a.beforeEach(function (e, t, n) {
            e.meta.requireAuth ? null != c.a.state.loginbean ? setTimeout(function () {
                n()
            }, 1e3) : setTimeout(function () {
                n({path: "/", query: {redirect: e.fullPath}})
            }, 500) : n()
        })
    }, 26: function (e, t) {
        e.exports = {host: host, port: port, vuePort: vuePort, max1: max1, max0: max0}
    }, 28: function (e, t, n) {
        "use strict";
        var r = n(329), i = (n.n(r), r.mixins.reactiveProp);
        t.a = r.Line.extend({
            mixins: [i], props: ["options"], mounted: function () {
                this.renderChart(this.chartData, this.options)
            }
        })
    }, 308: function (e, t) {
    }, 309: function (e, t) {
    }, 310: function (e, t) {
    }, 311: function (e, t) {
    }, 312: function (e, t) {
    }, 313: function (e, t) {
    }, 316: function (e, t, n) {
        function r(e) {
            return n(i(e))
        }

        function i(e) {
            var t = o[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }

        var o = {
            "./af": 61,
            "./af.js": 61,
            "./ar": 68,
            "./ar-dz": 62,
            "./ar-dz.js": 62,
            "./ar-kw": 63,
            "./ar-kw.js": 63,
            "./ar-ly": 64,
            "./ar-ly.js": 64,
            "./ar-ma": 65,
            "./ar-ma.js": 65,
            "./ar-sa": 66,
            "./ar-sa.js": 66,
            "./ar-tn": 67,
            "./ar-tn.js": 67,
            "./ar.js": 68,
            "./az": 69,
            "./az.js": 69,
            "./be": 70,
            "./be.js": 70,
            "./bg": 71,
            "./bg.js": 71,
            "./bn": 72,
            "./bn.js": 72,
            "./bo": 73,
            "./bo.js": 73,
            "./br": 74,
            "./br.js": 74,
            "./bs": 75,
            "./bs.js": 75,
            "./ca": 76,
            "./ca.js": 76,
            "./cs": 77,
            "./cs.js": 77,
            "./cv": 78,
            "./cv.js": 78,
            "./cy": 79,
            "./cy.js": 79,
            "./da": 80,
            "./da.js": 80,
            "./de": 83,
            "./de-at": 81,
            "./de-at.js": 81,
            "./de-ch": 82,
            "./de-ch.js": 82,
            "./de.js": 83,
            "./dv": 84,
            "./dv.js": 84,
            "./el": 85,
            "./el.js": 85,
            "./en-au": 86,
            "./en-au.js": 86,
            "./en-ca": 87,
            "./en-ca.js": 87,
            "./en-gb": 88,
            "./en-gb.js": 88,
            "./en-ie": 89,
            "./en-ie.js": 89,
            "./en-nz": 90,
            "./en-nz.js": 90,
            "./eo": 91,
            "./eo.js": 91,
            "./es": 93,
            "./es-do": 92,
            "./es-do.js": 92,
            "./es.js": 93,
            "./et": 94,
            "./et.js": 94,
            "./eu": 95,
            "./eu.js": 95,
            "./fa": 96,
            "./fa.js": 96,
            "./fi": 97,
            "./fi.js": 97,
            "./fo": 98,
            "./fo.js": 98,
            "./fr": 101,
            "./fr-ca": 99,
            "./fr-ca.js": 99,
            "./fr-ch": 100,
            "./fr-ch.js": 100,
            "./fr.js": 101,
            "./fy": 102,
            "./fy.js": 102,
            "./gd": 103,
            "./gd.js": 103,
            "./gl": 104,
            "./gl.js": 104,
            "./gom-latn": 105,
            "./gom-latn.js": 105,
            "./he": 106,
            "./he.js": 106,
            "./hi": 107,
            "./hi.js": 107,
            "./hr": 108,
            "./hr.js": 108,
            "./hu": 109,
            "./hu.js": 109,
            "./hy-am": 110,
            "./hy-am.js": 110,
            "./id": 111,
            "./id.js": 111,
            "./is": 112,
            "./is.js": 112,
            "./it": 113,
            "./it.js": 113,
            "./ja": 114,
            "./ja.js": 114,
            "./jv": 115,
            "./jv.js": 115,
            "./ka": 116,
            "./ka.js": 116,
            "./kk": 117,
            "./kk.js": 117,
            "./km": 118,
            "./km.js": 118,
            "./kn": 119,
            "./kn.js": 119,
            "./ko": 120,
            "./ko.js": 120,
            "./ky": 121,
            "./ky.js": 121,
            "./lb": 122,
            "./lb.js": 122,
            "./lo": 123,
            "./lo.js": 123,
            "./lt": 124,
            "./lt.js": 124,
            "./lv": 125,
            "./lv.js": 125,
            "./me": 126,
            "./me.js": 126,
            "./mi": 127,
            "./mi.js": 127,
            "./mk": 128,
            "./mk.js": 128,
            "./ml": 129,
            "./ml.js": 129,
            "./mr": 130,
            "./mr.js": 130,
            "./ms": 132,
            "./ms-my": 131,
            "./ms-my.js": 131,
            "./ms.js": 132,
            "./my": 133,
            "./my.js": 133,
            "./nb": 134,
            "./nb.js": 134,
            "./ne": 135,
            "./ne.js": 135,
            "./nl": 137,
            "./nl-be": 136,
            "./nl-be.js": 136,
            "./nl.js": 137,
            "./nn": 138,
            "./nn.js": 138,
            "./pa-in": 139,
            "./pa-in.js": 139,
            "./pl": 140,
            "./pl.js": 140,
            "./pt": 142,
            "./pt-br": 141,
            "./pt-br.js": 141,
            "./pt.js": 142,
            "./ro": 143,
            "./ro.js": 143,
            "./ru": 144,
            "./ru.js": 144,
            "./sd": 145,
            "./sd.js": 145,
            "./se": 146,
            "./se.js": 146,
            "./si": 147,
            "./si.js": 147,
            "./sk": 148,
            "./sk.js": 148,
            "./sl": 149,
            "./sl.js": 149,
            "./sq": 150,
            "./sq.js": 150,
            "./sr": 152,
            "./sr-cyrl": 151,
            "./sr-cyrl.js": 151,
            "./sr.js": 152,
            "./ss": 153,
            "./ss.js": 153,
            "./sv": 154,
            "./sv.js": 154,
            "./sw": 155,
            "./sw.js": 155,
            "./ta": 156,
            "./ta.js": 156,
            "./te": 157,
            "./te.js": 157,
            "./tet": 158,
            "./tet.js": 158,
            "./th": 159,
            "./th.js": 159,
            "./tl-ph": 160,
            "./tl-ph.js": 160,
            "./tlh": 161,
            "./tlh.js": 161,
            "./tr": 162,
            "./tr.js": 162,
            "./tzl": 163,
            "./tzl.js": 163,
            "./tzm": 165,
            "./tzm-latn": 164,
            "./tzm-latn.js": 164,
            "./tzm.js": 165,
            "./uk": 166,
            "./uk.js": 166,
            "./ur": 167,
            "./ur.js": 167,
            "./uz": 169,
            "./uz-latn": 168,
            "./uz-latn.js": 168,
            "./uz.js": 169,
            "./vi": 170,
            "./vi.js": 170,
            "./x-pseudo": 171,
            "./x-pseudo.js": 171,
            "./yo": 172,
            "./yo.js": 172,
            "./zh-cn": 173,
            "./zh-cn.js": 173,
            "./zh-hk": 174,
            "./zh-hk.js": 174,
            "./zh-tw": 175,
            "./zh-tw.js": 175
        };
        r.keys = function () {
            return Object.keys(o)
        }, r.resolve = i, e.exports = r, r.id = 316
    }, 333: function (e, t) {
        e.exports = {
            name: "vue-chartjs",
            version: "2.8.3",
            description: "vue.js wrapper for chart.js",
            author: "Jakub Juszczak <jakub@posteo.de>",
            homepage: "http://vue-chartjs.org",
            license: "MIT",
            contributors: [{name: "Thorsten Lünborg", web: "https://github.com/LinusBorg"}, {name: "Juan Carlos Alonso", web: "https://github.com/jcalonso"}],
            maintainers: [{name: "Jakub Juszczak", email: "jakub@posteo.de", web: "http://www.jakubjuszczak.de"}],
            repository: {type: "git", url: "git+ssh://git@github.com:apertureless/vue-chartjs.git"},
            bugs: {url: "https://github.com/apertureless/vue-chartjs/issues"},
            keywords: ["ChartJs", "Vue", "Visualisation", "Wrapper", "Charts"],
            main: "dist/vue-chartjs.js",
            unpkg: "dist/vue-chartjs.full.min.js",
            module: "es/index.js",
            "jsnext:main": "es/index.js",
            files: ["src", "dist", "es"],
            scripts: {
                dev: "node build/dev-server.js",
                build: "yarn run release && yarn run build:es",
                "build:es": "cross-env BABEL_ENV=es babel src --out-dir es",
                unit: "karma start test/unit/karma.conf.js --single-run",
                e2e: "node test/e2e/runner.js",
                test: "npm run unit",
                lint: "eslint --ext .js,.vue src test/unit/specs test/e2e/specs",
                release: "webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",
                prepublish: "yarn run lint && yarn run test && yarn run build"
            },
            dependencies: {},
            peerDependencies: {"chart.js": "^2.6.0", vue: "^2.4.2"},
            devDependencies: {
                "babel-cli": "^6.24.1",
                "babel-core": "^6.25.0",
                "babel-loader": "^7.0.0",
                "babel-plugin-transform-object-assign": "^6.22.0",
                "babel-plugin-transform-runtime": "^6.23.0",
                "babel-preset-es2015": "^6.24.1",
                "babel-preset-stage-2": "^6.24.1",
                "babel-runtime": "^6.23.0",
                chai: "^3.5.0",
                "chart.js": "^2.6.0",
                chromedriver: "^2.28.0",
                "connect-history-api-fallback": "^1.1.0",
                "cross-env": "^3.2.4",
                "cross-spawn": "^5.1.0",
                "css-loader": "^0.28.0",
                eslint: "^3.19.0",
                "eslint-config-standard": "^10.2.1",
                "eslint-friendly-formatter": "^2.0.7",
                "eslint-loader": "^1.7.1",
                "eslint-plugin-html": "^2.0.1",
                "eslint-plugin-import": "^2.2.0",
                "eslint-plugin-node": "^4.2.2",
                "eslint-plugin-promise": "^3.5.0",
                "eslint-plugin-standard": "^3.0.1",
                "eventsource-polyfill": "^0.9.6",
                express: "^4.15.2",
                "extract-text-webpack-plugin": "^1.0.1",
                "file-loader": "^0.10.1",
                "function-bind": "^1.0.2",
                "html-webpack-plugin": "^2.28.0",
                "http-proxy-middleware": "^0.17.4",
                "inject-loader": "^3.0.0",
                "isparta-loader": "^2.0.0",
                "jasmine-core": "^2.5.2",
                "json-loader": "^0.5.4",
                karma: "^1.5.0",
                "karma-coverage": "^1.1.1",
                "karma-jasmine": "^1.0.2",
                "karma-mocha": "^1.2.0",
                "karma-phantomjs-launcher": "^1.0.4",
                "karma-sinon-chai": "^1.2.0",
                "karma-sourcemap-loader": "^0.3.7",
                "karma-spec-reporter": "0.0.30",
                "karma-webpack": "1.8.1",
                lolex: "^1.6.0",
                mocha: "^3.1.0",
                nightwatch: "^0.9.14",
                ora: "^1.2.0",
                "phantomjs-prebuilt": "^2.1.13",
                "selenium-server": "^3.3.1",
                shelljs: "^0.7.7",
                sinon: "^2.1.0",
                "sinon-chai": "^2.9.0",
                "url-loader": "^0.5.8",
                vue: "^2.4.2",
                "vue-hot-reload-api": "^2.1.0",
                "vue-html-loader": "^1.2.4",
                "vue-loader": "^12.2.2",
                "vue-style-loader": "^3.0.1",
                "vue-template-compiler": "^2.4.2",
                webpack: "^1.13.2",
                "webpack-dev-middleware": "^1.10.1",
                "webpack-hot-middleware": "^2.17.1",
                "webpack-merge": "1.1.1"
            },
            engines: {node: ">=6.9.0"},
            babel: {presets: ["es2015"]},
            browserify: {transform: ["babelify"]},
            greenkeeper: {ignore: ["extract-text-webpack-plugin", "karma-webpack", "webpack", "webpack-merge"]},
            _from: "vue-chartjs@2.8.3",
            _resolved: "http://registry.npm.taobao.org/vue-chartjs/download/vue-chartjs-2.8.3.tgz"
        }
    }, 334: function (e, t, n) {
        var r = n(3)(n(203), n(346), null, null, null);
        e.exports = r.exports
    }, 335: function (e, t, n) {
        function r(e) {
            n(311)
        }

        var i = n(3)(n(204), n(349), r, "data-v-287d54fc", null);
        e.exports = i.exports
    }, 336: function (e, t, n) {
        var r = n(3)(n(205), n(350), null, null, null);
        e.exports = r.exports
    }, 337: function (e, t, n) {
        function r(e) {
            n(313)
        }

        var i = n(3)(n(206), n(355), r, "data-v-cedf99a2", null);
        e.exports = i.exports
    }, 338: function (e, t, n) {
        var r = n(3)(n(207), n(352), null, null, null);
        e.exports = r.exports
    }, 339: function (e, t, n) {
        function r(e) {
            n(309)
        }

        var i = n(3)(n(208), n(345), r, "data-v-09c039d2", null);
        e.exports = i.exports
    }, 340: function (e, t, n) {
        function r(e) {
            n(312)
        }

        var i = n(3)(n(209), n(354), r, "data-v-c10a19dc", null);
        e.exports = i.exports
    }, 341: function (e, t, n) {
        var r = n(3)(n(211), n(353), null, null, null);
        e.exports = r.exports
    }, 342: function (e, t, n) {
        var r = n(3)(n(212), n(351), null, null, null);
        e.exports = r.exports
    }, 343: function (e, t, n) {
        function r(e) {
            n(310)
        }

        var i = n(3)(n(213), n(348), r, "data-v-1d3537bf", null);
        e.exports = i.exports
    }, 344: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "hello"}, [n("div", [n("Table", {
                    staticClass: "table-area",
                    attrs: {border: "", columns: e.columns, data: e.data}
                }), e._v(" "), "aaaaaa" === e.msg ? n("div", [n("Spin", {attrs: {fix: ""}}, [n("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: {type: "load-c", size: "18"}
                }), e._v(" "), n("div", [e._v("Loading")])], 1)], 1) : e._e()], 1), e._v(" "), n("div", {staticClass: "chart"}, [n("line-chart", {
                    attrs: {
                        "chart-data": e.datacollection,
                        options: {responsive: !1, maintainAspectRatio: !1},
                        width: 1024,
                        height: 300
                    }
                }), e._v(" "), n("i-button", {on: {click: e.clearValues}}, [e._v("清除数据")])], 1)])
            }, staticRenderFns: []
        }
    }, 345: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("Row", {staticClass: "RowStyle"}, [n("Col", {attrs: {span: "8"}}, [e._v(" ")]), e._v(" "), n("Col", {attrs: {span: "8"}}, [n("div", {
                    staticClass: "RowStyle",
                    staticStyle: {"margin-top": "50%"}
                }, [n("span", {}, [e._v("请登录")]), e._v(" "), n("i-form", {
                    ref: "formInline",
                    attrs: {model: e.formInline, rules: e.ruleInline, name: "loginform"}
                }, [n("FormItem", {attrs: {prop: "user"}}, [n("Input", {
                    attrs: {type: "text", placeholder: "Username", name: "user"}, model: {
                        value: e.formInline.user, callback: function (t) {
                            e.formInline.user = t
                        }, expression: "formInline.user"
                    }
                }, [n("Icon", {attrs: {type: "ios-person-outline"}, slot: "prepend"})], 1)], 1), e._v(" "), n("FormItem", {attrs: {prop: "password"}}, [n("Input", {
                    attrs: {
                        type: "password",
                        placeholder: "Password",
                        name: "password"
                    }, model: {
                        value: e.formInline.password, callback: function (t) {
                            e.formInline.password = t
                        }, expression: "formInline.password"
                    }
                }, [n("Icon", {attrs: {type: "ios-locked-outline"}, slot: "prepend"})], 1)], 1), e._v(" "), n("FormItem", [n("i-button", {
                    attrs: {type: "primary"},
                    on: {click: e.login}
                }, [e._v("登录")])], 1)], 1)], 1)]), e._v(" "), n("Col", {attrs: {span: "8"}}, [e._v(" ")])], 1)
            }, staticRenderFns: []
        }
    }, 346: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("Row", [n("Col", {attrs: {span: "6"}}, [e._v(" \n\t            "), n("Modal", {
                    attrs: {title: "确认删除提示框"},
                    on: {"on-ok": e.ok, "on-cancel": e.cancel},
                    model: {
                        value: e.delModal, callback: function (t) {
                            e.delModal = t
                        }, expression: "delModal"
                    }
                }, [n("p", [e._v("确认删除？")])])], 1), e._v(" "), n("Col", {attrs: {span: "8"}}, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "addi-form" == e.formName,
                        expression: "formName=='addi-form'"
                    }]
                }, [e._v("\n\t            \t\t添加GM\n\t            \t"), n("i-form", {ref: "addform", attrs: {model: e.addform, "label-width": 80}}, [n("FormItem", {
                    attrs: {
                        label: "GM账户",
                        prop: "uname"
                    }
                }, [n("Input", {
                    attrs: {type: "text"}, on: {"on-blur": e.oldPwdCheck}, model: {
                        value: e.addform.uname, callback: function (t) {
                            e.addform.uname = t
                        }, expression: "addform.uname"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {label: "GM密码", prop: "password"}}, [n("Input", {
                    attrs: {type: "password"}, model: {
                        value: e.addform.password, callback: function (t) {
                            e.addform.password = t
                        }, expression: "addform.password"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {label: "GM部门", prop: "role"}}, [n("Select", {
                    staticStyle: {width: "200px"}, model: {
                        value: e.addform.selectRole, callback: function (t) {
                            e.addform.selectRole = t
                        }, expression: "addform.selectRole"
                    }
                }, e._l(e.addform.roleList, function (t) {
                    return n("Option", {key: t.value, attrs: {value: t.value}}, [e._v(e._s(t.label))])
                }))], 1), e._v(" "), n("FormItem", [n("i-button", {attrs: {type: "primary"}, on: {click: e.addSubmit}}, [e._v("提交")]), e._v(" "), n("i-button", {
                    staticStyle: {"margin-left": "10%"},
                    attrs: {type: "ghost"},
                    on: {
                        click: function (t) {
                            e.handleReset("addform")
                        }
                    }
                }, [e._v("重置")]), e._v(" "), n("i-button", {
                    staticStyle: {"margin-left": "10%"},
                    attrs: {type: "ghost"},
                    on: {click: e.cancel}
                }, [e._v("取消")])], 1)], 1)], 1), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "updi-form" == e.formName,
                        expression: "formName=='updi-form'"
                    }]
                }, [e._v("\n\t\t        \t\t修改GM\n\t\t            \t"), n("i-form", {ref: "updform", attrs: {model: e.updform, "label-width": 80}}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.updform.id,
                        expression: "updform.id"
                    }], attrs: {type: "hidden"}, domProps: {value: e.updform.id}, on: {
                        input: function (t) {
                            t.target.composing || (e.updform.id = t.target.value)
                        }
                    }
                }), e._v(" "), n("FormItem", {attrs: {label: "GM账户", prop: "uname"}}, [n("Input", {
                    attrs: {type: "text"},
                    on: {"on-blur": e.oldPwdCheck},
                    model: {
                        value: e.updform.uname, callback: function (t) {
                            e.updform.uname = t
                        }, expression: "updform.uname"
                    }
                })], 1), e._v(" "), n("FormItem", {
                    attrs: {
                        label: "原部门",
                        prop: "role"
                    }
                }, [e._v("\n\t\t\t\t\t        \t" + e._s(e.updi - e.form.dept) + "\n\t\t\t\t\t        ")]), e._v(" "), n("FormItem", {
                    attrs: {
                        label: "新部门",
                        prop: "role"
                    }
                }, [n("Select", {
                    staticStyle: {width: "200px"}, attrs: {placeholder: "请选择新部门"}, model: {
                        value: e.updform.selectRole, callback: function (t) {
                            e.updform.selectRole = t
                        }, expression: "updform.selectRole"
                    }
                }, e._l(e.updform.roleList, function (t) {
                    return n("Option", {key: t.value, attrs: {value: t.value}}, [e._v(e._s(t.label))])
                }))], 1), e._v(" "), n("FormItem", [n("i-button", {attrs: {type: "primary"}, on: {click: e.updSubmit}}, [e._v("提交")]), e._v(" "), n("i-button", {
                    staticStyle: {"margin-left": "10%"},
                    attrs: {type: "ghost"},
                    on: {
                        click: function (t) {
                            e.handleReset("addform")
                        }
                    }
                }, [e._v("重置")]), e._v(" "), n("i-button", {
                    staticStyle: {"margin-left": "10%"},
                    attrs: {type: "ghost"},
                    on: {click: e.cancel}
                }, [e._v("取消")])], 1)], 1)], 1), e._v(" "), n("Table", {
                    attrs: {
                        border: "",
                        columns: e.GMColumn,
                        data: e.GMList
                    }
                })], 1), e._v(" "), n("Col", {attrs: {span: "10"}}, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "updi-form" == e.formName || "" == e.formName,
                        expression: "formName=='updi-form'||formName==''"
                    }]
                }, [n("i-button", {attrs: {shape: "circle"}, on: {click: e.add}}, [n("Icon", {attrs: {type: "plus-round"}}, [e._v("添加GM")])], 1)], 1)])], 1)], 1)
            }, staticRenderFns: []
        }
    }, 347: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("router-view")], 1)
            }, staticRenderFns: []
        }
    }, 348: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "hello"}, [n("div", [n("Table", {
                    staticClass: "table-area",
                    attrs: {width: "1500", border: "", columns: e.columns, data: e.data, size: "small"}
                }), e._v(" "), "aaaaaa" === e.msg ? n("div", [n("Spin", {attrs: {fix: ""}}, [n("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: {type: "load-c", size: "18"}
                }), e._v(" "), n("div", [e._v("Loading")])], 1)], 1) : e._e()], 1), e._v(" "), n("div", {staticClass: "chart"}, [n("label", {staticClass: "name "}, [e._v("请选择所显示的项目")]), e._v(" "), n("Select", {
                    staticStyle: {width: "100px"},
                    attrs: {size: "small"},
                    on: {"on-change": e.clearValues},
                    model: {
                        value: e.selectedItem, callback: function (t) {
                            e.selectedItem = t
                        }, expression: "selectedItem"
                    }
                }, e._l(e.options, function (t) {
                    return n("Option", {key: t, attrs: {value: t}}, [e._v(e._s(t))])
                })), e._v(" "), n("label", {staticClass: "name "}, [e._v("请选择时间间隔(M)")]), e._v(" "), n("Select", {
                    staticStyle: {width: "100px"}, attrs: {size: "small"}, on: {
                        "on-change": function (t) {
                            e.changeTime(e.selectedTime)
                        }
                    }, model: {
                        value: e.selectedTime, callback: function (t) {
                            e.selectedTime = t
                        }, expression: "selectedTime"
                    }
                }, e._l(e.optionsTime, function (t) {
                    return n("Option", {key: t, attrs: {value: t}}, [e._v(e._s(t))])
                })), e._v(" "), n("line-chart", {
                    attrs: {
                        "chart-data": e.datacollection,
                        options: {responsive: !1, maintainAspectRatio: !1},
                        width: 1024,
                        height: 300
                    }
                }), e._v(" "), n("i-button", {on: {click: e.clearValues}}, [e._v("clearValues")])], 1)])
            }, staticRenderFns: []
        }
    }, 349: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement;
                e._self._c;
                return e._m(0)
            }, staticRenderFns: [function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "hello"}, [n("div", {staticClass: "layout-body"}, [e._v("欢迎来到ACE德州扑克的后台管理系统")])])
            }]
        }
    }, 350: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("Row", [n("Col", {attrs: {span: "6"}}, [e._v(" ")]), e._v(" "), n("Col", {attrs: {span: "8"}}, [n("i-form", {
                    ref: "formInline",
                    attrs: {model: e.formInline, rules: e.ruleInline}
                }, [n("FormItem", {attrs: {prop: "uidValue"}}, [n("Input", {
                    attrs: {placeholder: "请输入用户的uid"}, model: {
                        value: e.formInline.uidValue, callback: function (t) {
                            e.formInline.uidValue = t
                        }, expression: "formInline.uidValue"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {prop: "moneyValue"}}, [n("InputNumber", {
                    staticStyle: {width: "300px"},
                    attrs: {min: 1},
                    model: {
                        value: e.formInline.moneyValue, callback: function (t) {
                            e.formInline.moneyValue = t
                        }, expression: "formInline.moneyValue"
                    }
                }), e._v(" "), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 != e.role,
                        expression: "role!=0"
                    }]
                }, [e._v("*注：每次最多添加一亿")]), e._v(" "), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == e.role,
                        expression: "role==0"
                    }]
                }, [e._v("*注：每次最多添加一万亿")])], 1), e._v(" "), n("FormItem", {attrs: {prop: "assetType"}}, [n("Select", {
                    staticClass: "form-control",
                    attrs: {placeholder: "请选择类型"},
                    model: {
                        value: e.formInline.assetType, callback: function (t) {
                            e.formInline.assetType = t
                        }, expression: "formInline.assetType"
                    }
                }, [n("Option", {attrs: {value: "gold"}}, [e._v("游戏币")]), e._v(" "), n("Option", {attrs: {value: "bean"}}, [e._v("梦幻豆")])], 1)], 1), e._v(" "), n("i-button", {on: {click: e.addMoneyModalShow}}, [e._v("确定")])], 1)], 1), e._v(" "), n("Col", {attrs: {span: "10"}}, [e._v(" \n            "), n("Modal", {
                    attrs: {title: "确认添加吗"},
                    on: {"on-ok": e.ok, "on-cancel": e.cancel},
                    model: {
                        value: e.addMoneyModal, callback: function (t) {
                            e.addMoneyModal = t
                        }, expression: "addMoneyModal"
                    }
                }, [n("p", {staticStyle: {float: "left"}}, [e._v("确认给uid为：")]), e._v(" "), n("p", {
                    staticStyle: {
                        float: "left",
                        color: "red"
                    }
                }, [e._v(e._s(e.formInline.uidValue) + " ")]), e._v(" "), n("p", {staticStyle: {float: "left"}}, [e._v(" 的用户添加金额为 ")]), e._v(" "), n("p", {
                    staticStyle: {
                        float: "left",
                        color: "red"
                    }
                }, [e._v(" " + e._s(e.formInline.moneyValue) + " ")]), e._v(" "), n("p", {staticStyle: {float: "left"}}, [e._v("的 ")]), e._v(" "), n("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "gold" == e.formInline.assetType,
                        expression: "formInline.assetType=='gold'"
                    }], staticStyle: {float: "left", color: "red"}
                }, [e._v("游戏币")]), e._v(" "), n("p", {
                    directives: [{name: "show", rawName: "v-show", value: "bean" == e.formInline.assetType, expression: "formInline.assetType=='bean'"}],
                    staticStyle: {float: "left", color: "red"}
                }, [e._v("梦幻豆")]), e._v(" "), n("p", [e._v(" 吗？")])])], 1)], 1)], 1)
            }, staticRenderFns: []
        }
    }, 351: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("Row", [n("Col", {attrs: {span: "6"}}, [n("br"), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.itemList.length > 0,
                        expression: "itemList.length>0"
                    }], staticStyle: {position: "absolute", "background-color": "#DDDDDD", "border-radius": "10px", width: "55%", "padding-top": "10px"}
                }, e._l(e.itemList, function (t, r) {
                    return n("div", {
                        staticStyle: {"margin-left": "8%"}, model: {
                            value: e.itemList, callback: function (t) {
                                e.itemList = t
                            }, expression: "itemList"
                        }
                    }, [n("div", {staticStyle: {float: "left"}}, [e._v("物品编号：" + e._s(t.id) + "，数量：" + e._s(t.number)), n("div", {
                        staticStyle: {"margin-left": "100%"}, on: {
                            click: function (t) {
                                e.dele(r)
                            }
                        }
                    }, [n("Icon", {attrs: {type: "android-delete", size: "18"}})], 1)])])
                }))]), e._v(" "), n("Col", {attrs: {span: "8"}}, [n("i-form", {
                    ref: "formInline", model: {
                        value: e.formInline, callback: function (t) {
                            e.formInline = t
                        }, expression: "formInline"
                    }
                }, [n("FormItem", {attrs: {prop: "uidValue"}}, [n("Input", {
                    attrs: {placeholder: "请输入用户的uid"}, model: {
                        value: e.formInline.uidValue, callback: function (t) {
                            e.formInline.uidValue = t
                        }, expression: "formInline.uidValue"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {prop: "tittle"}}, [n("Input", {
                    attrs: {placeholder: "请输入邮件标题"}, model: {
                        value: e.formInline.tittle, callback: function (t) {
                            e.formInline.tittle = t
                        }, expression: "formInline.tittle"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {prop: "content"}}, [n("Input", {
                    attrs: {type: "textarea", autosize: {minRows: 7, maxRows: 10}, placeholder: "请输入邮件内容"},
                    model: {
                        value: e.formInline.content, callback: function (t) {
                            e.formInline.content = t
                        }, expression: "formInline.content"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {prop: "goldValue"}}, [n("Input", {
                    attrs: {number: !0, placeholder: "请输入游戏币金额"}, model: {
                        value: e.formInline.goldValue, callback: function (t) {
                            e.formInline.goldValue = t
                        }, expression: "formInline.goldValue"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {prop: "beanValue"}}, [n("Input", {
                    attrs: {placeholder: "请输入梦幻豆金额"}, model: {
                        value: e.formInline.beanValue, callback: function (t) {
                            e.formInline.beanValue = t
                        }, expression: "formInline.beanValue"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {prop: "itemValue"}}, [n("Select", {
                    attrs: {filterable: "", placeholder: "请选择物品(可输入搜索)"},
                    model: {
                        value: e.formInline.itemValue, callback: function (t) {
                            e.formInline.itemValue = t
                        }, expression: "formInline.itemValue"
                    }
                }, e._l(e.formInline.itemList, function (t) {
                    return n("Option", {key: t.value, attrs: {value: t.value}}, [e._v(e._s(t.label))])
                }))], 1), e._v(" "), n("FormItem", {attrs: {prop: "itemCount"}}, [n("Input", {
                    attrs: {placeholder: "请输入物品数量"}, model: {
                        value: e.formInline.itemCount, callback: function (t) {
                            e.formInline.itemCount = t
                        }, expression: "formInline.itemCount"
                    }
                })], 1), e._v(" "), n("i-button", {
                    on: {
                        click: function (t) {
                            e.addMoneyModal = !0
                        }
                    }
                }, [e._v("确定")]), e._v(" "), n("i-button", {on: {click: e.addItems}}, [e._v("添加")])], 1)], 1), e._v(" "), n("Col", {attrs: {span: "10"}}, [e._v(" \n                "), n("Modal", {
                    attrs: {title: "确认添加吗"},
                    on: {"on-ok": e.ok, "on-cancel": e.cancel},
                    model: {
                        value: e.addMoneyModal, callback: function (t) {
                            e.addMoneyModal = t
                        }, expression: "addMoneyModal"
                    }
                }, [n("p", {staticStyle: {float: "left"}}, [e._v("确认给uid为：")]), e._v(" "), n("p", {
                    staticStyle: {
                        float: "left",
                        color: "red"
                    }
                }, [e._v(e._s(e.formInline.uidValue) + " ")]), e._v(" "), n("p", [e._v(" 的用户发送邮件吗？ ")])])], 1)], 1)], 1)
            }, staticRenderFns: []
        }
    }, 352: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("span", [e._v("检索开关")]), e._v(" "), n("i-switch", {
                    attrs: {size: "large"}, on: {"on-change": e.onoffSearch}, model: {
                        value: e.switch1, callback: function (t) {
                            e.switch1 = t
                        }, expression: "switch1"
                    }
                }, [n("span", {slot: "open"}, [e._v("开启")]), e._v(" "), n("span", {slot: "close"}, [e._v("关闭")])]), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.switch1,
                        expression: "switch1==true"
                    }], staticStyle: {"margin-top": "5px"}
                }, [n("Input", {
                    staticStyle: {width: "200px"}, attrs: {placeholder: "请输入要查找的用户uid"}, model: {
                        value: e.uid, callback: function (t) {
                            e.uid = t
                        }, expression: "uid"
                    }
                }), e._v(" "), n("DatePicker", {
                    staticStyle: {width: "200px"},
                    attrs: {type: "daterange", options: e.options2, placement: "bottom-end", placeholder: "选择日期"},
                    on: {"on-change": e.daterange},
                    model: {
                        value: e.dateObj, callback: function (t) {
                            e.dateObj = t
                        }, expression: "dateObj"
                    }
                }), e._v(" "), n("i-button", {attrs: {type: "primary", shape: "circle"}, on: {click: e.showAll}}, [e._v("显示全部")]), e._v(" "), n("i-button", {
                    attrs: {
                        type: "primary",
                        shape: "circle",
                        icon: "ios-search"
                    }, on: {
                        click: function (t) {
                            e.getUidList(1, e.uid, e.dateObj)
                        }
                    }
                }, [e._v("搜索")])], 1), e._v(" "), n("Table", {
                    staticStyle: {"margin-top": "5px"},
                    attrs: {border: "", columns: e.columns6, data: e.data5}
                }), e._v(" "), n("div", {staticStyle: {margin: "10px", overflow: "hidden"}}, [n("div", {staticStyle: {float: "right"}}, [n("Page", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "allPage" == e.changePageType,
                        expression: "changePageType=='allPage'"
                    }], attrs: {total: e.count, current: 1, "page-size": 15}, on: {"on-change": e.changePage}
                }), e._v(" "), n("Page", {
                    directives: [{name: "show", rawName: "v-show", value: "searchPage" == e.changePageType, expression: "changePageType=='searchPage'"}],
                    attrs: {total: e.count, current: 1, "page-size": 15},
                    on: {"on-change": e.changeSearchPage}
                })], 1)])], 1)
            }, staticRenderFns: []
        }
    }, 353: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("Row", [n("Col", {attrs: {span: "6"}}, [e._v(" ")]), e._v(" "), n("Col", {attrs: {span: "8"}}, [n("i-form", {
                    ref: "formCustom",
                    attrs: {model: e.formCustom, "label-width": 80}
                }, [n("input", {
                    directives: [{name: "model", rawName: "v-model", value: e.formCustom.id, expression: "formCustom.id"}],
                    attrs: {type: "hidden"},
                    domProps: {value: e.formCustom.id},
                    on: {
                        input: function (t) {
                            t.target.composing || (e.formCustom.id = t.target.value)
                        }
                    }
                }), e._v(" "), n("FormItem", {attrs: {label: "旧密码", prop: "oldpwdinput"}}, [n("Input", {
                    attrs: {type: "text"},
                    on: {"on-blur": e.oldPwdCheck},
                    model: {
                        value: e.formCustom.oldpwdinput, callback: function (t) {
                            e.formCustom.oldpwdinput = t
                        }, expression: "formCustom.oldpwdinput"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {label: "新密码", prop: "passwd"}}, [n("Input", {
                    attrs: {type: "password"}, model: {
                        value: e.formCustom.passwd, callback: function (t) {
                            e.formCustom.passwd = t
                        }, expression: "formCustom.passwd"
                    }
                })], 1), e._v(" "), n("FormItem", {attrs: {label: "确认密码", prop: "passwdCheck"}}, [n("Input", {
                    attrs: {type: "password"},
                    on: {"on-blur": e.oldNewCheck},
                    model: {
                        value: e.formCustom.passwdCheck, callback: function (t) {
                            e.formCustom.passwdCheck = t
                        }, expression: "formCustom.passwdCheck"
                    }
                })], 1), e._v(" "), n("FormItem", [n("i-button", {attrs: {type: "primary"}, on: {click: e.updSubmit}}, [e._v("提交")]), e._v(" "), n("i-button", {
                    staticStyle: {"margin-left": "30%"},
                    attrs: {type: "ghost"},
                    on: {
                        click: function (t) {
                            e.handleReset("formCustom")
                        }
                    }
                }, [e._v("重置")])], 1)], 1)], 1), e._v(" "), n("Col", {attrs: {span: "10"}}, [e._v(" \n                "), n("Modal")], 1)], 1)], 1)
            }, staticRenderFns: []
        }
    }, 354: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "hello"}, [n("div", [n("Table", {
                    staticClass: "table-area",
                    attrs: {border: "", columns: e.columns, data: e.data}
                }), e._v(" "), "aaaaaa" === e.msg ? n("div", [n("Spin", {attrs: {fix: ""}}, [n("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: {type: "load-c", size: "18"}
                }), e._v(" "), n("div", [e._v("Loading")])], 1)], 1) : e._e()], 1), e._v(" "), n("div", {staticClass: "chart"}, [n("label", {staticClass: "name "}, [e._v("请选择所显示的项目")]), e._v(" "), n("Select", {
                    staticStyle: {width: "100px"},
                    attrs: {size: "small"},
                    on: {"on-change": e.clearValues},
                    model: {
                        value: e.selectedItem, callback: function (t) {
                            e.selectedItem = t
                        }, expression: "selectedItem"
                    }
                }, e._l(e.options, function (t) {
                    return n("Option", {key: t, attrs: {value: t}}, [e._v(e._s(t))])
                })), e._v(" "), n("label", {staticClass: "name "}, [e._v("请选择时间间隔(M)")]), e._v(" "), n("Select", {
                    staticStyle: {width: "100px"}, attrs: {size: "small"}, on: {
                        "on-change": function (t) {
                            e.changeTime(e.selectedTime)
                        }
                    }, model: {
                        value: e.selectedTime, callback: function (t) {
                            e.selectedTime = t
                        }, expression: "selectedTime"
                    }
                }, e._l(e.optionsTime, function (t) {
                    return n("Option", {key: t, attrs: {value: t}}, [e._v(e._s(t))])
                })), e._v(" "), n("line-chart", {
                    attrs: {
                        "chart-data": e.datacollection,
                        options: {responsive: !1, maintainAspectRatio: !1},
                        width: 1024,
                        height: 300
                    }
                }), e._v(" "), n("i-button", {on: {click: e.clearValues}}, [e._v("clearValues")])], 1)])
            }, staticRenderFns: []
        }
    }, 355: function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "layout"}, [n("Row", {staticClass: "layout-flex-body", attrs: {type: "flex"}}, [n("i-col", {
                    staticClass: "layout-menu-left",
                    attrs: {span: "4"}
                }, [n("Menu", {attrs: {theme: "dark", width: "auto", "open-names": ["1"]}}, [n("div", {staticClass: "layout-logo-left"}, [e._v(e._s(e.uname)), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "未登录" == e.uname,
                        expression: "uname=='未登录'"
                    }], staticStyle: {float: "left"}
                })]), e._v(" "), n("Submenu", {attrs: {name: "1"}}, [n("template", {slot: "title"}, [n("Icon", {attrs: {type: "ios-navigate"}}), e._v("\n                        监测平台\n                    ")], 1), e._v(" "), n("MenuItem", {attrs: {name: "1-1"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("onlineUsers")
                        }
                    }
                }, [e._v("onlineUsers")])]), e._v(" "), n("MenuItem", {attrs: {name: "1-2"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("systemInfo")
                        }
                    }
                }, [e._v("systemInfo")])]), e._v(" "), n("MenuItem", {attrs: {name: "1-3"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("nodeInfo")
                        }
                    }
                }, [e._v("nodeInfo")])])], 2), e._v(" "), n("Submenu", {attrs: {name: "2"}}, [n("template", {slot: "title"}, [n("Icon", {attrs: {type: "ios-keypad"}}), e._v("\n                        GM功能\n                    ")], 1), e._v(" "), n("MenuItem", {attrs: {name: "2-1"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("addMoney")
                        }
                    }
                }, [e._v("addMoney")])]), e._v(" "), n("MenuItem", {attrs: {name: "2-2"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("sendEmail")
                        }
                    }
                }, [e._v("sendEmail")])]), e._v(" "), n("MenuItem", {attrs: {name: "2-3"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("itemReceivedList")
                        }
                    }
                }, [e._v("itemReceivedList")])])], 2), e._v(" "), n("Submenu", {attrs: {name: "3"}}, [n("template", {slot: "title"}, [n("Icon", {attrs: {type: "ios-analytics"}}), e._v("\n                        账户管理\n                    ")], 1), e._v(" "), n("MenuItem", {attrs: {name: "3-1"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("pwdUpdate")
                        }
                    }
                }, [e._v("修改密码")])]), e._v(" "), "0" == e.role ? n("MenuItem", {attrs: {name: "3-2"}}, [n("div", {
                    on: {
                        click: function (t) {
                            e.clickCompon("GMManager")
                        }
                    }
                }, [e._v("GM管理")])]) : e._e()], 2)], 1)], 1), e._v(" "), n("i-col", {attrs: {span: "20"}}, [n("div", {staticClass: "layout-header"}, [n("div", {staticClass: "layout-loginout"}, [n("i-button", {on: {click: e.loginout}}, [e._v("注销")])], 1), e._v(" "), n("span", {staticClass: "layout-header-content"}, [e._v("ACE德州扑克 Pomelo-Admin Console")])]), e._v(" "), n("div", {staticClass: "layout-content"}, [n("div", {staticClass: "layout-content-main"}, [n(e.myComponent, {tag: "mycomponent"})], 1)]), e._v(" "), n("div", {staticClass: "layout-copy"}, [e._v("\n                北京微创弈有限公司版权所有 COPYRIGHT © 1998 – 2017\n            ")])])], 1)], 1)
            }, staticRenderFns: []
        }
    }, 361: function (e, t) {/*!
 * Pomelo -- adminConsole webClient
 * Copyright(c) 2012 fantasyni <fantasyni@163.com>
 * MIT Licensed
 */
        !function (e) {
            var t = function (e) {
                this.id = "", this.reqId = 1, this.callbacks = {}, this.listeners = {}, this.state = t.ST_INITED, this.socket = null, e = e || {}, this.username = e.username || "", this.password = e.password || "", this.md5 = e.md5 || !1
            };
            t.prototype = {
                connect: function (e, n, r, i) {
                    this.id = e;
                    var o = this;
                    this.socket = io.connect("http://"+host+":" + r, {"force new connection": !0, reconnect: !1}), this.socket.on("connect", function () {
                        o.state = t.ST_CONNECTED, o.socket.emit("register", {type: "client", id: e, username: o.username, password: o.password, md5: o.md5})
                    }), this.socket.on("register", function (e) {
                        if (e.code !== protocol.PRO_OK) return void i(e.msg);
                        o.state = t.ST_REGISTERED, i()
                    }), this.socket.on("client", function (e) {
                        if (e = protocol.parse(e), e.respId) {
                            var t = o.callbacks[e.respId];
                            delete o.callbacks[e.respId], t && "function" == typeof t && t(e.error, e.body)
                        } else e.moduleId && o.emit(e.moduleId, e)
                    }), this.socket.on("error", function (e) {
                        o.state < t.ST_CONNECTED && i(e), o.emit("error", e)
                    }), this.socket.on("disconnect", function (e) {
                        this.state = t.ST_CLOSED, o.emit("close")
                    })
                }, request: function (e, t, n) {
                    var r = this.reqId++;
                    t = t || {}, t.clientId = this.id, t.username = this.username;
                    var i = protocol.composeRequest(r, e, t);
                    this.callbacks[r] = n, this.socket.emit("client", i)
                }, notify: function (e, t) {
                    t = t || {}, t.clientId = this.id, t.username = this.username;
                    var n = protocol.composeRequest(null, e, t);
                    this.socket.emit("client", n)
                }, command: function (e, t, n, r) {
                    var i = this.reqId++;
                    n = n || {}, n.clientId = this.id, n.username = this.username;
                    var o = protocol.composeCommand(i, e, t, n);
                    this.callbacks[i] = r, this.socket.emit("client", o)
                }, on: function (e, t) {
                    this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t)
                }, emit: function (e) {
                    var t = this.listeners[e];
                    if (t && t.length) for (var n, r = Array.prototype.slice.call(arguments, 1), i = 0, o = t.length; i < o; i++) "function" == typeof(n = t[i]) && n.apply(null, r)
                }
            }, t.ST_INITED = 1, t.ST_CONNECTED = 2, t.ST_REGISTERED = 3, t.ST_CLOSED = 4, e.ConsoleClient = t
        }(window)
    }, 362: function (e, t, n) {
        var r, i;
        /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
        !function (t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function (o, s) {
            function a(e) {
                var t = "length" in e && e.length, n = ie.type(e);
                return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }

            function l(e, t, n) {
                if (ie.isFunction(t)) return ie.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return ie.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (fe.test(t)) return ie.filter(t, e, n);
                    t = ie.filter(t, e)
                }
                return ie.grep(e, function (e) {
                    return Y.call(t, e) >= 0 !== n
                })
            }

            function u(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            function c(e) {
                var t = ye[e] = {};
                return ie.each(e.match(ge) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function d() {
                ne.removeEventListener("DOMContentLoaded", d, !1), o.removeEventListener("load", d, !1), ie.ready()
            }

            function f() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = ie.expando + f.uid++
            }

            function p(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Ce, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _e.test(n) ? ie.parseJSON(n) : n)
                    } catch (e) {
                    }
                    ke.set(e, t, n)
                } else n = void 0;
                return n
            }

            function h() {
                return !0
            }

            function m() {
                return !1
            }

            function v() {
                try {
                    return ne.activeElement
                } catch (e) {
                }
            }

            function g(e, t) {
                return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function y(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function b(e) {
                var t = ze.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function w(e, t) {
                for (var n = 0, r = e.length; r > n; n++) xe.set(e[n], "globalEval", !t || xe.get(t[n], "globalEval"))
            }

            function x(e, t) {
                var n, r, i, o, s, a, l, u;
                if (1 === t.nodeType) {
                    if (xe.hasData(e) && (o = xe.access(e), s = xe.set(t, o), u = o.events)) {
                        delete s.handle, s.events = {};
                        for (i in u) for (n = 0, r = u[i].length; r > n; n++) ie.event.add(t, i, u[i][n])
                    }
                    ke.hasData(e) && (a = ke.access(e), l = ie.extend({}, a), ke.set(t, l))
                }
            }

            function k(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n
            }

            function _(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Se.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function C(e, t) {
                var n, r = ie(t.createElement(e)).appendTo(t.body), i = o.getDefaultComputedStyle && (n = o.getDefaultComputedStyle(r[0])) ? n.display : ie.css(r[0], "display");
                return r.detach(), i
            }

            function T(e) {
                var t = ne, n = We[e];
                return n || (n = C(e, t), "none" !== n && n || (Ve = (Ve || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), n = C(e, t), Ve.detach()), We[e] = n), n
            }

            function I(e, t, n) {
                var r, i, o, s, a = e.style;
                return n = n || Ge(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || ie.contains(e.ownerDocument, e) || (s = ie.style(e, t)), Ue.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }

            function j(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function S(e, t) {
                if (t in e) return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ze.length; i--;) if ((t = Ze[i] + n) in e) return t;
                return r
            }

            function E(e, t, n) {
                var r = Ke.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function A(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ie.css(e, n + Ie[o], !0, i)), r ? ("content" === n && (s -= ie.css(e, "padding" + Ie[o], !0, i)), "margin" !== n && (s -= ie.css(e, "border" + Ie[o] + "Width", !0, i))) : (s += ie.css(e, "padding" + Ie[o], !0, i), "padding" !== n && (s += ie.css(e, "border" + Ie[o] + "Width", !0, i)));
                return s
            }

            function D(e, t, n) {
                var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Ge(e), s = "border-box" === ie.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = I(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ue.test(i)) return i;
                    r = s && (te.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + A(e, t, n || (s ? "border" : "content"), r, o) + "px"
            }

            function M(e, t) {
                for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = xe.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && je(r) && (o[s] = xe.access(r, "olddisplay", T(r.nodeName)))) : (i = je(r), "none" === n && i || xe.set(r, "olddisplay", i ? n : ie.css(r, "display"))));
                for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
                return e
            }

            function N(e, t, n, r, i) {
                return new N.prototype.init(e, t, n, r, i)
            }

            function P() {
                return setTimeout(function () {
                    et = void 0
                }), et = ie.now()
            }

            function R(e, t) {
                var n, r = 0, i = {height: e};
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ie[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function L(e, t, n) {
                for (var r, i = (st[t] || []).concat(st["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
            }

            function O(e, t, n) {
                var r, i, o, s, a, l, u, c = this, d = {}, f = e.style, p = e.nodeType && je(e), h = xe.get(e, "fxshow");
                n.queue || (a = ie._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function () {
                    c.always(function () {
                        a.unqueued--, ie.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ie.css(e, "display"), "inline" === ("none" === u ? xe.get(e, "olddisplay") || T(e.nodeName) : u) && "none" === ie.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (r in t) if (i = t[r], nt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        p = !0
                    }
                    d[r] = h && h[r] || ie.style(e, r)
                } else u = void 0;
                if (ie.isEmptyObject(d)) "inline" === ("none" === u ? T(e.nodeName) : u) && (f.display = u); else {
                    h ? "hidden" in h && (p = h.hidden) : h = xe.access(e, "fxshow", {}), o && (h.hidden = !p), p ? ie(e).show() : c.done(function () {
                        ie(e).hide()
                    }), c.done(function () {
                        var t;
                        xe.remove(e, "fxshow");
                        for (t in d) ie.style(e, t, d[t])
                    });
                    for (r in d) s = L(p ? h[r] : 0, r, c), r in h || (h[r] = s.start, p && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function q(e, t) {
                var n, r, i, o, s;
                for (n in e) if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = ie.cssHooks[r]) && "expand" in s) {
                    o = s.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
            }

            function F(e, t, n) {
                var r, i, o = 0, s = ot.length, a = ie.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (i) return !1;
                    for (var t = et || P(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
                }, u = a.promise({
                    elem: e,
                    props: ie.extend({}, t),
                    opts: ie.extend(!0, {specialEasing: {}}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: et || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ie.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0, r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) u.tweens[n].run(1);
                        return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                    }
                }), c = u.props;
                for (q(c, u.opts.specialEasing); s > o; o++) if (r = ot[o].call(u, e, c, u.opts)) return r;
                return ie.map(c, L, u), ie.isFunction(u.opts.start) && u.opts.start.call(e, u), ie.fx.timer(ie.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function z(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(ge) || [];
                    if (ie.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function $(e, t, n, r) {
                function i(a) {
                    var l;
                    return o[a] = !0, ie.each(e[a] || [], function (e, a) {
                        var u = a(t, n, r);
                        return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                    }), l
                }

                var o = {}, s = e === kt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function H(e, t) {
                var n, r, i = ie.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ie.extend(!0, e, r), e
            }

            function V(e, t, n) {
                for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r) for (i in a) if (a[i] && a[i].test(r)) {
                    l.unshift(i);
                    break
                }
                if (l[0] in n) o = l[0]; else {
                    for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                            o = i;
                            break
                        }
                        s || (s = i)
                    }
                    o = o || s
                }
                return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
            }

            function W(e, t, n, r) {
                var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
                if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                    if (!(s = u[l + " " + o] || u["* " + o])) for (i in u) if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                        break
                    }
                    if (!0 !== s) if (s && e.throws) t = s(t); else try {
                        t = s(t)
                    } catch (e) {
                        return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
                    }
                }
                return {state: "success", data: t}
            }

            function B(e, t, n, r) {
                var i;
                if (ie.isArray(t)) ie.each(t, function (t, i) {
                    n || jt.test(e) ? r(e, i) : B(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                }); else if (n || "object" !== ie.type(t)) r(e, t); else for (i in t) B(e + "[" + i + "]", t[i], n, r)
            }

            function U(e) {
                return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var G = [], X = G.slice, K = G.concat, J = G.push, Y = G.indexOf, Q = {}, Z = Q.toString, ee = Q.hasOwnProperty, te = {}, ne = o.document, re = "2.1.4", ie = function (e, t) {
                return new ie.fn.init(e, t)
            }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, se = /^-ms-/, ae = /-([\da-z])/gi, le = function (e, t) {
                return t.toUpperCase()
            };
            ie.fn = ie.prototype = {
                jquery: re, constructor: ie, selector: "", length: 0, toArray: function () {
                    return X.call(this)
                }, get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
                }, pushStack: function (e) {
                    var t = ie.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e, t) {
                    return ie.each(this, e, t)
                }, map: function (e) {
                    return this.pushStack(ie.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(X.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: J, sort: G.sort, splice: G.splice
            }, ie.extend = ie.fn.extend = function () {
                var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ie.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (u && r && (ie.isPlainObject(r) || (i = ie.isArray(r))) ? (i ? (i = !1, o = n && ie.isArray(n) ? n : []) : o = n && ie.isPlainObject(n) ? n : {}, s[t] = ie.extend(u, o, r)) : void 0 !== r && (s[t] = r));
                return s
            }, ie.extend({
                expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isFunction: function (e) {
                    return "function" === ie.type(e)
                }, isArray: Array.isArray, isWindow: function (e) {
                    return null != e && e === e.window
                }, isNumeric: function (e) {
                    return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
                }, isPlainObject: function (e) {
                    return "object" === ie.type(e) && !e.nodeType && !ie.isWindow(e) && !(e.constructor && !ee.call(e.constructor.prototype, "isPrototypeOf"))
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[Z.call(e)] || "object" : typeof e
                }, globalEval: function (e) {
                    var t, n = eval;
                    (e = ie.trim(e)) && (1 === e.indexOf("use strict") ? (t = ne.createElement("script"), t.text = e, ne.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                }, camelCase: function (e) {
                    return e.replace(se, "ms-").replace(ae, le)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }, each: function (e, t, n) {
                    var r = 0, i = e.length, o = a(e);
                    if (n) {
                        if (o) for (; i > r && !1 !== t.apply(e[r], n); r++) ; else for (r in e) if (!1 === t.apply(e[r], n)) break
                    } else if (o) for (; i > r && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(oe, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (a(Object(e)) ? ie.merge(n, "string" == typeof e ? [e] : e) : J.call(n, e)), n
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : Y.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                    return e.length = i, e
                }, grep: function (e, t, n) {
                    for (var r = [], i = 0, o = e.length, s = !n; o > i; i++) !t(e[i], i) !== s && r.push(e[i]);
                    return r
                }, map: function (e, t, n) {
                    var r, i = 0, o = e.length, s = a(e), l = [];
                    if (s) for (; o > i; i++) null != (r = t(e[i], i, n)) && l.push(r); else for (i in e) null != (r = t(e[i], i, n)) && l.push(r);
                    return K.apply([], l)
                }, guid: 1, proxy: function (e, t) {
                    var n, r, i;
                    return "string" == typeof t && (n = e[t], t = e, e = n), ie.isFunction(e) ? (r = X.call(arguments, 2), i = function () {
                        return e.apply(t || this, r.concat(X.call(arguments)))
                    }, i.guid = e.guid = e.guid || ie.guid++, i) : void 0
                }, now: Date.now, support: te
            }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                Q["[object " + t + "]"] = t.toLowerCase()
            });
            var ue = function (e) {
                function t(e, t, n, r) {
                    var i, o, s, a, u, d, f, p, h, m;
                    if ((t ? t.ownerDocument || t : q) !== A && E(t), t = t || A, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
                    if (!r && M) {
                        if (11 !== a && (i = ve.exec(e))) if (s = i[1]) {
                            if (9 === a) {
                                if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && L(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && b.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
                        }
                        if (b.qsa && (!N || !N.test(e))) {
                            if (p = f = O, h = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (d = _(e), (f = t.getAttribute("id")) ? p = f.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = d.length; u--;) d[u] = p + c(d[u]);
                                h = ge.test(e) && l(t.parentNode) || t, m = d.join(",")
                            }
                            if (m) try {
                                return J.apply(n, h.querySelectorAll(m)), n
                            } catch (e) {
                            } finally {
                                f || t.removeAttribute("id")
                            }
                        }
                    }
                    return T(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[O] = !0, e
                }

                function i(e) {
                    var t = A.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
                }

                function s(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || B) - (~e.sourceIndex || B);
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function l(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function u() {
                }

                function c(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function d(e, t, n) {
                    var r = t.dir, i = n && "parentNode" === r, o = z++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
                    } : function (t, n, s) {
                        var a, l, u = [F, o];
                        if (s) {
                            for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                        } else for (; t = t[r];) if (1 === t.nodeType || i) {
                            if (l = t[O] || (t[O] = {}), (a = l[r]) && a[0] === F && a[1] === o) return u[2] = a[2];
                            if (l[r] = u, u[2] = e(t, n, s)) return !0
                        }
                    }
                }

                function f(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function p(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r
                }

                function h(e, t, n, r, i) {
                    for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), u && t.push(a));
                    return s
                }

                function m(e, t, n, i, o, s) {
                    return i && !i[O] && (i = m(i)), o && !o[O] && (o = m(o, s)), r(function (r, s, a, l) {
                        var u, c, d, f = [], m = [], v = s.length, g = r || p(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? g : h(g, f, e, a, l), b = n ? o || (r ? e : v || i) ? [] : s : y;
                        if (n && n(y, b, a, l), i) for (u = h(b, m), i(u, [], a, l), c = u.length; c--;) (d = u[c]) && (b[m[c]] = !(y[m[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = b.length; c--;) (d = b[c]) && u.push(y[c] = d);
                                    o(null, b = [], u, l)
                                }
                                for (c = b.length; c--;) (d = b[c]) && (u = o ? Q(r, d) : f[c]) > -1 && (r[u] = !(s[u] = d))
                            }
                        } else b = h(b === s ? b.splice(v, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                    })
                }

                function v(e) {
                    for (var t, n, r, i = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = d(function (e) {
                        return e === t
                    }, s, !0), u = d(function (e) {
                        return Q(t, e) > -1
                    }, s, !0), p = [function (e, n, r) {
                        var i = !o && (r || n !== I) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                        return t = null, i
                    }]; i > a; a++) if (n = w.relative[e[a].type]) p = [d(f(p), n)]; else {
                        if (n = w.filter[e[a].type].apply(null, e[a].matches), n[O]) {
                            for (r = ++a; i > r && !w.relative[e[r].type]; r++) ;
                            return m(a > 1 && f(p), a > 1 && c(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(se, "$1"), n, r > a && v(e.slice(a, r)), i > r && v(e = e.slice(r)), i > r && c(e))
                        }
                        p.push(n)
                    }
                    return f(p)
                }

                function g(e, n) {
                    var i = n.length > 0, o = e.length > 0, s = function (r, s, a, l, u) {
                        var c, d, f, p = 0, m = "0", v = r && [], g = [], y = I, b = r || o && w.find.TAG("*", u), x = F += null == y ? 1 : Math.random() || .1, k = b.length;
                        for (u && (I = s !== A && s); m !== k && null != (c = b[m]); m++) {
                            if (o && c) {
                                for (d = 0; f = e[d++];) if (f(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                                u && (F = x)
                            }
                            i && ((c = !f && c) && p--, r && v.push(c))
                        }
                        if (p += m, i && m !== p) {
                            for (d = 0; f = n[d++];) f(v, g, s, a);
                            if (r) {
                                if (p > 0) for (; m--;) v[m] || g[m] || (g[m] = X.call(l));
                                g = h(g)
                            }
                            J.apply(l, g), u && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (F = x, I = y), v
                    };
                    return i ? r(s) : s
                }

                var y, b, w, x, k, _, C, T, I, j, S, E, A, D, M, N, P, R, L, O = "sizzle" + 1 * new Date, q = e.document, F = 0, z = 0, $ = n(), H = n(), V = n(), W = function (e, t) {
                        return e === t && (S = !0), 0
                    }, B = 1 << 31, U = {}.hasOwnProperty, G = [], X = G.pop, K = G.push, J = G.push, Y = G.slice, Q = function (e, t) {
                        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
                        return -1
                    }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"),
                    re = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
                    ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", oe = new RegExp(ee + "+", "g"),
                    se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = new RegExp("^" + ee + "*," + ee + "*"),
                    le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie), de = new RegExp("^" + ne + "$"),
                    fe = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ye = /'|\\/g,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), we = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, xe = function () {
                        E()
                    };
                try {
                    J.apply(G = Y.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
                } catch (e) {
                    J = {
                        apply: G.length ? function (e, t) {
                            K.apply(e, Y.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                            e.length = n - 1
                        }
                    }
                }
                b = t.support = {}, k = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, E = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : q;
                    return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, D = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), M = !k(r), b.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), b.getElementsByTagName = i(function (e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), b.getElementsByClassName = me.test(r.getElementsByClassName), b.getById = i(function (e) {
                        return D.appendChild(e).id = O, !r.getElementsByName || !r.getElementsByName(O).length
                    }), b.getById ? (w.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && M) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, w.filter.ID = function (e) {
                        var t = e.replace(be, we);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete w.find.ID, w.filter.ID = function (e) {
                        var t = e.replace(be, we);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                        return M ? t.getElementsByClassName(e) : void 0
                    }, P = [], N = [], (b.qsa = me.test(r.querySelectorAll)) && (i(function (e) {
                        D.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || N.push(".#.+[+~]")
                    }), i(function (e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (b.matchesSelector = me.test(R = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                        b.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", ie)
                    }), N = N.length && new RegExp(N.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(D.compareDocumentPosition), L = t || me.test(D.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, W = t ? function (e, t) {
                        if (e === t) return S = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === q && L(q, e) ? -1 : t === r || t.ownerDocument === q && L(q, t) ? 1 : j ? Q(j, e) - Q(j, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return S = !0, 0;
                        var n, i = 0, o = e.parentNode, a = t.parentNode, l = [e], u = [t];
                        if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? Q(j, e) - Q(j, t) : 0;
                        if (o === a) return s(e, t);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; l[i] === u[i];) i++;
                        return i ? s(l[i], u[i]) : l[i] === q ? -1 : u[i] === q ? 1 : 0
                    }, r) : A
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== A && E(e), n = n.replace(ue, "='$1']"), !(!b.matchesSelector || !M || P && P.test(n) || N && N.test(n))) try {
                        var r = R.call(e, n);
                        if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                    }
                    return t(n, A, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== A && E(e), L(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== A && E(e);
                    var n = w.attrHandle[t.toLowerCase()], r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                    return void 0 !== r ? r : b.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], r = 0, i = 0;
                    if (S = !b.detectDuplicates, j = !b.sortStable && e.slice(0), e.sort(W), S) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return j = null, e
                }, x = t.getText = function (e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else for (; t = e[r++];) n += x(t);
                    return n
                }, w = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}},
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(be, we).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = $[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (e, n, r) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, d, f, p, h, m = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, g = a && t.nodeName.toLowerCase(), y = !l && !a;
                                if (v) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];) if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                        for (c = v[O] || (v[O] = {}), u = c[e] || [], p = u[0] === F && u[1], f = u[0] === F && u[2], d = p && v.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                                            c[e] = [F, p, f];
                                            break
                                        }
                                    } else if (y && (u = (t[O] || (t[O] = {}))[e]) && u[0] === F) f = u[1]; else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++f || (y && ((d[O] || (d[O] = {}))[e] = [F, f]), d !== t));) ;
                                    return (f -= i) === r || f % r == 0 && f / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[O] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), s = i.length; s--;) r = Q(e, i[s]), e[r] = !(t[r] = i[s])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [], n = [], i = C(e.replace(se, "$1"));
                            return i[O] ? r(function (e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }), has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: r(function (e) {
                            return e = e.replace(be, we), function (t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                            }
                        }), lang: r(function (e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) {
                                var n;
                                do {
                                    if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === D
                        }, focus: function (e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return !1 === e.disabled
                        }, disabled: function (e) {
                            return !0 === e.disabled
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !w.pseudos.empty(e)
                        }, header: function (e) {
                            return he.test(e.nodeName)
                        }, input: function (e) {
                            return pe.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: a(function () {
                            return [0]
                        }), last: a(function (e, t) {
                            return [t - 1]
                        }), eq: a(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }), even: a(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }), odd: a(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }), lt: a(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }), gt: a(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, w.pseudos.nth = w.pseudos.eq;
                for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[y] = function (e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(y);
                for (y in{submit: !0, reset: !0}) w.pseudos[y] = function (e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(y);
                return u.prototype = w.filters = w.pseudos, w.setFilters = new u, _ = t.tokenize = function (e, n) {
                    var r, i, o, s, a, l, u, c = H[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = e, l = [], u = w.preFilter; a;) {
                        (!r || (i = ae.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }), a = a.slice(r.length));
                        for (s in w.filter) !(i = fe[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({value: r, type: s, matches: i}), a = a.slice(r.length));
                        if (!r) break
                    }
                    return n ? a.length : a ? t.error(e) : H(e, l).slice(0)
                }, C = t.compile = function (e, t) {
                    var n, r = [], i = [], o = V[e + " "];
                    if (!o) {
                        for (t || (t = _(e)), n = t.length; n--;) o = v(t[n]), o[O] ? r.push(o) : i.push(o);
                        o = V(e, g(i, r)), o.selector = e
                    }
                    return o
                }, T = t.select = function (e, t, n, r) {
                    var i, o, s, a, u, d = "function" == typeof e && e, f = !r && _(e = d.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && M && w.relative[o[1].type]) {
                            if (!(t = (w.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !w.relative[a = s.type]);) if ((u = w.find[a]) && (r = u(s.matches[0].replace(be, we), ge.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && c(o))) return J.apply(n, r), n;
                            break
                        }
                    }
                    return (d || C(e, f))(r, t, !M, n, ge.test(e) && l(t.parentNode) || t), n
                }, b.sortStable = O.split("").sort(W).join("") === O, b.detectDuplicates = !!S, E(), b.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(A.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), b.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(Z, function (e, t, n) {
                    var r;
                    return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(o);
            ie.find = ue, ie.expr = ue.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ue.uniqueSort, ie.text = ue.getText, ie.isXMLDoc = ue.isXML, ie.contains = ue.contains;
            var ce = ie.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
            ie.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, ie.fn.extend({
                find: function (e) {
                    var t, n = this.length, r = [], i = this;
                    if ("string" != typeof e) return this.pushStack(ie(e).filter(function () {
                        for (t = 0; n > t; t++) if (ie.contains(i[t], this)) return !0
                    }));
                    for (t = 0; n > t; t++) ie.find(e, i[t], r);
                    return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                }, filter: function (e) {
                    return this.pushStack(l(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(l(this, e || [], !0))
                }, is: function (e) {
                    return !!l(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
                }
            });
            var pe, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (ie.fn.init = function (e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), de.test(n[1]) && ie.isPlainObject(t)) for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return r = ne.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = ne, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? void 0 !== pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
            }).prototype = ie.fn, pe = ie(ne);
            var me = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
            ie.extend({
                dir: function (e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                        if (i && ie(e).is(n)) break;
                        r.push(e)
                    }
                    return r
                }, sibling: function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), ie.fn.extend({
                has: function (e) {
                    var t = ie(e, this), n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++) if (ie.contains(this, t[e])) return !0
                    })
                }, closest: function (e, t) {
                    for (var n, r = 0, i = this.length, o = [], s = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? ie.unique(o) : o)
                }, index: function (e) {
                    return e ? "string" == typeof e ? Y.call(ie(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), ie.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return ie.dir(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return ie.dir(e, "parentNode", n)
                }, next: function (e) {
                    return u(e, "nextSibling")
                }, prev: function (e) {
                    return u(e, "previousSibling")
                }, nextAll: function (e) {
                    return ie.dir(e, "nextSibling")
                }, prevAll: function (e) {
                    return ie.dir(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return ie.dir(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return ie.dir(e, "previousSibling", n)
                }, siblings: function (e) {
                    return ie.sibling((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return ie.sibling(e.firstChild)
                }, contents: function (e) {
                    return e.contentDocument || ie.merge([], e.childNodes)
                }
            }, function (e, t) {
                ie.fn[e] = function (n, r) {
                    var i = ie.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ve[e] || ie.unique(i), me.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var ge = /\S+/g, ye = {};
            ie.Callbacks = function (e) {
                e = "string" == typeof e ? ye[e] || c(e) : ie.extend({}, e);
                var t, n, r, i, o, s, a = [], l = !e.once && [], u = function (c) {
                    for (t = e.memory && c, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) if (!1 === a[s].apply(c[0], c[1]) && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                    r = !1, a && (l ? l.length && u(l.shift()) : t ? a = [] : d.disable())
                }, d = {
                    add: function () {
                        if (a) {
                            var n = a.length;
                            !function t(n) {
                                ie.each(n, function (n, r) {
                                    var i = ie.type(r);
                                    "function" === i ? e.unique && d.has(r) || a.push(r) : r && r.length && "string" !== i && t(r)
                                })
                            }(arguments), r ? o = a.length : t && (i = n, u(t))
                        }
                        return this
                    }, remove: function () {
                        return a && ie.each(arguments, function (e, t) {
                            for (var n; (n = ie.inArray(t, a, n)) > -1;) a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
                        }), this
                    }, has: function (e) {
                        return e ? ie.inArray(e, a) > -1 : !(!a || !a.length)
                    }, empty: function () {
                        return a = [], o = 0, this
                    }, disable: function () {
                        return a = l = t = void 0, this
                    }, disabled: function () {
                        return !a
                    }, lock: function () {
                        return l = void 0, t || d.disable(), this
                    }, locked: function () {
                        return !l
                    }, fireWith: function (e, t) {
                        return !a || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : u(t)), this
                    }, fire: function () {
                        return d.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return d
            }, ie.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]],
                        n = "pending", r = {
                            state: function () {
                                return n
                            }, always: function () {
                                return i.done(arguments).fail(arguments), this
                            }, then: function () {
                                var e = arguments;
                                return ie.Deferred(function (n) {
                                    ie.each(t, function (t, o) {
                                        var s = ie.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = s && s.apply(this, arguments);
                                            e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? ie.extend(e, r) : r
                            }
                        }, i = {};
                    return r.pipe = r.then, ie.each(t, function (e, o) {
                        var s = o[2], a = o[3];
                        r[o[1]] = s.add, a && s.add(function () {
                            n = a
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = s.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                }, when: function (e) {
                    var t, n, r, i = 0, o = X.call(arguments), s = o.length, a = 1 !== s || e && ie.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ie.Deferred(), u = function (e, n, r) {
                        return function (i) {
                            n[e] = this, r[e] = arguments.length > 1 ? X.call(arguments) : i, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                        }
                    };
                    if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --a;
                    return a || l.resolveWith(r, o), l.promise()
                }
            });
            var be;
            ie.fn.ready = function (e) {
                return ie.ready.promise().done(e), this
            }, ie.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? ie.readyWait++ : ie.ready(!0)
                }, ready: function (e) {
                    (!0 === e ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, !0 !== e && --ie.readyWait > 0 || (be.resolveWith(ne, [ie]), ie.fn.triggerHandler && (ie(ne).triggerHandler("ready"), ie(ne).off("ready"))))
                }
            }), ie.ready.promise = function (e) {
                return be || (be = ie.Deferred(), "complete" === ne.readyState ? setTimeout(ie.ready) : (ne.addEventListener("DOMContentLoaded", d, !1), o.addEventListener("load", d, !1))), be.promise(e)
            }, ie.ready.promise();
            var we = ie.access = function (e, t, n, r, i, o, s) {
                var a = 0, l = e.length, u = null == n;
                if ("object" === ie.type(n)) {
                    i = !0;
                    for (a in n) ie.access(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(ie(e), n)
                    })), t)) for (; l > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
            };
            ie.acceptData = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, f.uid = 1, f.accepts = ie.acceptData, f.prototype = {
                key: function (e) {
                    if (!f.accepts(e)) return 0;
                    var t = {}, n = e[this.expando];
                    if (!n) {
                        n = f.uid++;
                        try {
                            t[this.expando] = {value: n}, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, ie.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                }, set: function (e, t, n) {
                    var r, i = this.key(e), o = this.cache[i];
                    if ("string" == typeof t) o[t] = n; else if (ie.isEmptyObject(o)) ie.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
                    return o
                }, get: function (e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                }, access: function (e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ie.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, r, i, o = this.key(e), s = this.cache[o];
                    if (void 0 === t) this.cache[o] = {}; else {
                        ie.isArray(t) ? r = t.concat(t.map(ie.camelCase)) : (i = ie.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(ge) || [])), n = r.length;
                        for (; n--;) delete s[r[n]]
                    }
                }, hasData: function (e) {
                    return !ie.isEmptyObject(this.cache[e[this.expando]] || {})
                }, discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var xe = new f, ke = new f, _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ce = /([A-Z])/g;
            ie.extend({
                hasData: function (e) {
                    return ke.hasData(e) || xe.hasData(e)
                }, data: function (e, t, n) {
                    return ke.access(e, t, n)
                }, removeData: function (e, t) {
                    ke.remove(e, t)
                }, _data: function (e, t, n) {
                    return xe.access(e, t, n)
                }, _removeData: function (e, t) {
                    xe.remove(e, t)
                }
            }), ie.fn.extend({
                data: function (e, t) {
                    var n, r, i, o = this[0], s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ke.get(o), 1 === o.nodeType && !xe.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), p(o, r, i[r])));
                            xe.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                        ke.set(this, e)
                    }) : we(this, function (t) {
                        var n, r = ie.camelCase(e);
                        if (o && void 0 === t) {
                            if (void 0 !== (n = ke.get(o, e))) return n;
                            if (void 0 !== (n = ke.get(o, r))) return n;
                            if (void 0 !== (n = p(o, r, void 0))) return n
                        } else this.each(function () {
                            var n = ke.get(this, r);
                            ke.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ke.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each(function () {
                        ke.remove(this, e)
                    })
                }
            }), ie.extend({
                queue: function (e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = xe.get(e, t), n && (!r || ie.isArray(n) ? r = xe.access(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = ie.queue(e, t), r = n.length, i = n.shift(), o = ie._queueHooks(e, t), s = function () {
                        ie.dequeue(e, t)
                    };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return xe.get(e, n) || xe.access(e, n, {
                        empty: ie.Callbacks("once memory").add(function () {
                            xe.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), ie.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = ie.queue(this, e, t);
                        ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        ie.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1, i = ie.Deferred(), o = this, s = this.length, a = function () {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = xe.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                    return a(), i.promise(t)
                }
            });
            var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ie = ["Top", "Right", "Bottom", "Left"], je = function (e, t) {
                return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
            }, Se = /^(?:checkbox|radio)$/i;
            !function () {
                var e = ne.createDocumentFragment(), t = e.appendChild(ne.createElement("div")), n = ne.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Ee = "undefined";
            te.focusinBubbles = "onfocusin" in o;
            var Ae = /^key/, De = /^(?:mouse|pointer|contextmenu)|click/, Me = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
            ie.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, s, a, l, u, c, d, f, p, h, m, v = xe.get(e);
                    if (v) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ie.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                        return typeof ie !== Ee && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(ge) || [""], u = t.length; u--;) a = Ne.exec(t[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (d = ie.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = ie.event.special[p] || {}, c = ie.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ie.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), ie.event.global[p] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, s, a, l, u, c, d, f, p, h, m, v = xe.hasData(e) && xe.get(e);
                    if (v && (l = v.events)) {
                        for (t = (t || "").match(ge) || [""], u = t.length; u--;) if (a = Ne.exec(t[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                            s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || ie.removeEvent(e, p, v.handle), delete l[p])
                        } else for (p in l) ie.event.remove(e, p + t[u], n, r, !0);
                        ie.isEmptyObject(l) && (delete v.handle, xe.remove(e, "events"))
                    }
                },
                trigger: function (e, t, n, r) {
                    var i, s, a, l, u, c, d, f = [n || ne], p = ee.call(e, "type") ? e.type : e, h = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = a = n = n || ne, 3 !== n.nodeType && 8 !== n.nodeType && !Me.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[ie.expando] ? e : new ie.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ie.makeArray(t, [e]), d = ie.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                        if (!r && !d.noBubble && !ie.isWindow(n)) {
                            for (l = d.delegateType || p, Me.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                            a === (n.ownerDocument || ne) && f.push(a.defaultView || a.parentWindow || o)
                        }
                        for (i = 0; (s = f[i++]) && !e.isPropagationStopped();) e.type = i > 1 ? l : d.bindType || p, c = (xe.get(s, "events") || {})[e.type] && xe.get(s, "handle"), c && c.apply(s, t), (c = u && s[u]) && c.apply && ie.acceptData(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = p, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !ie.acceptData(n) || u && ie.isFunction(n[p]) && !ie.isWindow(n) && (a = n[u], a && (n[u] = null), ie.event.triggered = p, n[p](), ie.event.triggered = void 0, a && (n[u] = a)), e.result
                    }
                },
                dispatch: function (e) {
                    e = ie.event.fix(e);
                    var t, n, r, i, o, s = [], a = X.call(arguments), l = (xe.get(this, "events") || {})[e.type] || [], u = ie.event.special[e.type] || {};
                    if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                        for (s = ie.event.handlers.call(this, e, l), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (r = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, s = [], a = t.delegateCount, l = e.target;
                    if (a && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) if (!0 !== l.disabled || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ie(i, this).index(l) >= 0 : ie.find(i, this, null, [l]).length), r[i] && r.push(o);
                        r.length && s.push({elem: l, handlers: r})
                    }
                    return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ne, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[ie.expando]) return e;
                    var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                    for (s || (this.fixHooks[i] = s = De.test(i) ? this.mouseHooks : Ae.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                    return e.target || (e.target = ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== v() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === v() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && ie.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (e) {
                            return ie.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = ie.extend(new ie.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                    r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, ie.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, ie.Event = function (e, t) {
                return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? h : m) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
            }, ie.Event.prototype = {
                isDefaultPrevented: m, isPropagationStopped: m, isImmediatePropagationStopped: m, preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = h, e && e.preventDefault && e.preventDefault()
                }, stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = h, e && e.stopPropagation && e.stopPropagation()
                }, stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ie.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (e, t) {
                ie.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), te.focusinBubbles || ie.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var n = function (e) {
                    ie.event.simulate(t, e.target, ie.event.fix(e), !0)
                };
                ie.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this, i = xe.access(r, t);
                        i || r.addEventListener(e, n, !0), xe.access(r, t, (i || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this, i = xe.access(r, t) - 1;
                        i ? xe.access(r, t, i) : (r.removeEventListener(e, n, !0), xe.remove(r, t))
                    }
                }
            }), ie.fn.extend({
                on: function (e, t, n, r, i) {
                    var o, s;
                    if ("object" == typeof e) {
                        "string" != typeof t && (n = n || t, t = void 0);
                        for (s in e) this.on(s, t, n, e[s], i);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = m; else if (!r) return this;
                    return 1 === i && (o = r, r = function (e) {
                        return ie().off(e), o.apply(this, arguments)
                    }, r.guid = o.guid || (o.guid = ie.guid++)), this.each(function () {
                        ie.event.add(this, e, r, n, t)
                    })
                }, one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = m), this.each(function () {
                        ie.event.remove(this, e, n, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        ie.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? ie.event.trigger(e, t, n, !0) : void 0
                }
            });
            var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Re = /<([\w:]+)/, Le = /<|&#?\w+;/, Oe = /<(?:script|style|link)/i,
                qe = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^$|\/(?:java|ecma)script/i, ze = /^true\/(.*)/, $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, He = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, ie.extend({
                clone: function (e, t, n) {
                    var r, i, o, s, a = e.cloneNode(!0), l = ie.contains(e.ownerDocument, e);
                    if (!(te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e))) for (s = k(a), o = k(e), r = 0, i = o.length; i > r; r++) _(o[r], s[r]);
                    if (t) if (n) for (o = o || k(e), s = s || k(a), r = 0, i = o.length; i > r; r++) x(o[r], s[r]); else x(e, a);
                    return s = k(a, "script"), s.length > 0 && w(s, !l && k(e, "script")), a
                }, buildFragment: function (e, t, n, r) {
                    for (var i, o, s, a, l, u, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; p > f; f++) if ((i = e[f]) || 0 === i) if ("object" === ie.type(i)) ie.merge(d, i.nodeType ? [i] : i); else if (Le.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")), s = (Re.exec(i) || ["", ""])[1].toLowerCase(), a = He[s] || He._default, o.innerHTML = a[1] + i.replace(Pe, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                        ie.merge(d, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else d.push(t.createTextNode(i));
                    for (c.textContent = "", f = 0; i = d[f++];) if ((!r || -1 === ie.inArray(i, r)) && (l = ie.contains(i.ownerDocument, i), o = k(c.appendChild(i), "script"), l && w(o), n)) for (u = 0; i = o[u++];) Fe.test(i.type || "") && n.push(i);
                    return c
                }, cleanData: function (e) {
                    for (var t, n, r, i, o = ie.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                        if (ie.acceptData(n) && (i = n[xe.expando]) && (t = xe.cache[i])) {
                            if (t.events) for (r in t.events) o[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
                            xe.cache[i] && delete xe.cache[i]
                        }
                        delete ke.cache[n[ke.expando]]
                    }
                }
            }), ie.fn.extend({
                text: function (e) {
                    return we(this, function (e) {
                        return void 0 === e ? ie.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            g(this, e).appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = g(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, remove: function (e, t) {
                    for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(k(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(k(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ie.cleanData(k(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return ie.clone(this, e, t)
                    })
                }, html: function (e) {
                    return we(this, function (e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Oe.test(e) && !He[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(Pe, "<$1></$2>");
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(k(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode, ie.cleanData(k(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                }, detach: function (e) {
                    return this.remove(e, !0)
                }, domManip: function (e, t) {
                    e = K.apply([], e);
                    var n, r, i, o, s, a, l = 0, u = this.length, c = this, d = u - 1, f = e[0], p = ie.isFunction(f);
                    if (p || u > 1 && "string" == typeof f && !te.checkClone && qe.test(f)) return this.each(function (n) {
                        var r = c.eq(n);
                        p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (u && (n = ie.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (i = ie.map(k(n, "script"), y), o = i.length; u > l; l++) s = n, l !== d && (s = ie.clone(s, !0, !0), o && ie.merge(i, k(s, "script"))), t.call(this[l], s, l);
                        if (o) for (a = i[i.length - 1].ownerDocument, ie.map(i, b), l = 0; o > l; l++) s = i[l], Fe.test(s.type || "") && !xe.access(s, "globalEval") && ie.contains(a, s) && (s.src ? ie._evalUrl && ie._evalUrl(s.src) : ie.globalEval(s.textContent.replace($e, "")))
                    }
                    return this
                }
            }), ie.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
                ie.fn[e] = function (e) {
                    for (var n, r = [], i = ie(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ie(i[s])[t](n), J.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ve, We = {}, Be = /^margin/, Ue = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"), Ge = function (e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : o.getComputedStyle(e, null)
            };
            !function () {
                function e() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(i);
                    var e = o.getComputedStyle(s, null);
                    t = "1%" !== e.top, n = "4px" === e.width, r.removeChild(i)
                }

                var t, n, r = ne.documentElement, i = ne.createElement("div"), s = ne.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(s), o.getComputedStyle && ie.extend(te, {
                    pixelPosition: function () {
                        return e(), t
                    }, boxSizingReliable: function () {
                        return null == n && e(), n
                    }, reliableMarginRight: function () {
                        var e, t = s.appendChild(ne.createElement("div"));
                        return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", r.appendChild(i), e = !parseFloat(o.getComputedStyle(t, null).marginRight), r.removeChild(i), s.removeChild(t), e
                    }
                }))
            }(), ie.swap = function (e, t, n, r) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = s[o];
                return i
            };
            var Xe = /^(none|table(?!-c[ea]).+)/, Ke = new RegExp("^(" + Te + ")(.*)$", "i"), Je = new RegExp("^([+-])=(" + Te + ")", "i"),
                Ye = {position: "absolute", visibility: "hidden", display: "block"}, Qe = {letterSpacing: "0", fontWeight: "400"}, Ze = ["Webkit", "O", "Moz", "ms"];
            ie.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = I(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0},
                cssProps: {float: "cssFloat"},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, s, a = ie.camelCase(t), l = e.style;
                        return t = ie.cssProps[a] || (ie.cssProps[a] = S(l, a)), s = ie.cssHooks[t] || ie.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = Je.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || ie.cssNumber[a] || (n += "px"), te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n))))
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, s, a = ie.camelCase(t);
                    return t = ie.cssProps[a] || (ie.cssProps[a] = S(e.style, a)), s = ie.cssHooks[t] || ie.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = I(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || ie.isNumeric(o) ? o || 0 : i) : i
                }
            }), ie.each(["height", "width"], function (e, t) {
                ie.cssHooks[t] = {
                    get: function (e, n, r) {
                        return n ? Xe.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, Ye, function () {
                            return D(e, t, r)
                        }) : D(e, t, r) : void 0
                    }, set: function (e, n, r) {
                        var i = r && Ge(e);
                        return E(e, n, r ? A(e, t, r, "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), ie.cssHooks.marginRight = j(te.reliableMarginRight, function (e, t) {
                return t ? ie.swap(e, {display: "inline-block"}, I, [e, "marginRight"]) : void 0
            }), ie.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                ie.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ie[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, Be.test(e) || (ie.cssHooks[e + t].set = E)
            }), ie.fn.extend({
                css: function (e, t) {
                    return we(this, function (e, t, n) {
                        var r, i, o = {}, s = 0;
                        if (ie.isArray(t)) {
                            for (r = Ge(e), i = t.length; i > s; s++) o[t[s]] = ie.css(e, t[s], !1, r);
                            return o
                        }
                        return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return M(this, !0)
                }, hide: function () {
                    return M(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        je(this) ? ie(this).show() : ie(this).hide()
                    })
                }
            }), ie.Tween = N, N.prototype = {
                constructor: N, init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = N.propHooks[this.prop];
                    return e && e.get ? e.get(this) : N.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = N.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
                }
            }, N.prototype.init.prototype = N.prototype, N.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    }, set: function (e) {
                        ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, ie.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, ie.fx = N.prototype.init, ie.fx.step = {};
            var et, tt, nt = /^(?:toggle|show|hide)$/, rt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"), it = /queueHooks$/, ot = [O], st = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t), r = n.cur(), i = rt.exec(t), o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                        s = (ie.cssNumber[e] || "px" !== o && +r) && rt.exec(ie.css(n.elem, e)), a = 1, l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], i = i || [], s = +r || 1;
                        do {
                            a = a || ".5", s /= a, ie.style(n.elem, e, s + o)
                        } while (a !== (a = n.cur() / r) && 1 !== a && --l)
                    }
                    return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
            ie.Animation = ie.extend(F, {
                tweener: function (e, t) {
                    ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[r], st[n] = st[n] || [], st[n].unshift(t)
                }, prefilter: function (e, t) {
                    t ? ot.unshift(e) : ot.push(e)
                }
            }), ie.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? ie.extend({}, e) : {complete: n || !n && t || ie.isFunction(e) && e, duration: e, easing: n && t || t && !ie.isFunction(t) && t};
                return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
                }, r
            }, ie.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(je).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                }, animate: function (e, t, n, r) {
                    var i = ie.isEmptyObject(e), o = ie.speed(t, n, r), s = function () {
                        var t = F(this, ie.extend({}, e), o);
                        (i || xe.get(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                }, stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, i = null != e && e + "queueHooks", o = ie.timers, s = xe.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && it.test(i) && r(s[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        (t || !n) && ie.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = xe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ie.timers, s = r ? r.length : 0;
                        for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ie.each(["toggle", "show", "hide"], function (e, t) {
                var n = ie.fn[t];
                ie.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i)
                }
            }), ie.each({slideDown: R("show"), slideUp: R("hide"), slideToggle: R("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
                ie.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ie.timers = [], ie.fx.tick = function () {
                var e, t = 0, n = ie.timers;
                for (et = ie.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || ie.fx.stop(), et = void 0
            }, ie.fx.timer = function (e) {
                ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
            }, ie.fx.interval = 13, ie.fx.start = function () {
                tt || (tt = setInterval(ie.fx.tick, ie.fx.interval))
            }, ie.fx.stop = function () {
                clearInterval(tt), tt = null
            }, ie.fx.speeds = {slow: 600, fast: 200, _default: 400}, ie.fn.delay = function (e, t) {
                return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            }, function () {
                var e = ne.createElement("input"), t = ne.createElement("select"), n = t.appendChild(ne.createElement("option"));
                e.type = "checkbox", te.checkOn = "" !== e.value, te.optSelected = n.selected, t.disabled = !0, te.optDisabled = !n.disabled, e = ne.createElement("input"), e.value = "t", e.type = "radio", te.radioValue = "t" === e.value
            }();
            var at, lt = ie.expr.attrHandle;
            ie.fn.extend({
                attr: function (e, t) {
                    return we(this, ie.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        ie.removeAttr(this, e)
                    })
                }
            }), ie.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ee ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? at : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
                }, removeAttr: function (e, t) {
                    var n, r, i = 0, o = t && t.match(ge);
                    if (o && 1 === e.nodeType) for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!te.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), at = {
                set: function (e, t, n) {
                    return !1 === t ? ie.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = lt[t] || ie.find.attr;
                lt[t] = function (e, t, r) {
                    var i, o;
                    return r || (o = lt[t], lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = o), i
                }
            });
            var ut = /^(?:input|select|textarea|button)$/i;
            ie.fn.extend({
                prop: function (e, t) {
                    return we(this, ie.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[ie.propFix[e] || e]
                    })
                }
            }), ie.extend({
                propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
                    var r, i, o, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || ut.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), te.optSelected || (ie.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ie.propFix[this.toLowerCase()] = this
            });
            var ct = /[\t\r\n\f]/g;
            ie.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, s, a = "string" == typeof e && e, l = 0, u = this.length;
                    if (ie.isFunction(e)) return this.each(function (t) {
                        ie(this).addClass(e.call(this, t, this.className))
                    });
                    if (a) for (t = (e || "").match(ge) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ct, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = ie.trim(r), n.className !== s && (n.className = s)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, u = this.length;
                    if (ie.isFunction(e)) return this.each(function (t) {
                        ie(this).removeClass(e.call(this, t, this.className))
                    });
                    if (a) for (t = (e || "").match(ge) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ct, " ") : "")) {
                        for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? ie.trim(r) : "", n.className !== s && (n.className = s)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ie.isFunction(e) ? function (n) {
                        ie(this).toggleClass(e.call(this, n, this.className, t), t)
                    } : function () {
                        if ("string" === n) for (var t, r = 0, i = ie(this), o = e.match(ge) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (n === Ee || "boolean" === n) && (this.className && xe.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : xe.get(this, "__className__") || "")
                    })
                }, hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ct, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            });
            var dt = /\r/g;
            ie.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = ie.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)) : void 0
                }
            }), ie.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = ie.find.attr(e, "value");
                            return null != t ? t : ie.trim(ie.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++) if (n = r[l], !(!n.selected && l !== i || (te.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ie(n).val(), o) return t;
                                s.push(t)
                            }
                            return s
                        }, set: function (e, t) {
                            for (var n, r, i = e.options, o = ie.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ie.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), ie.each(["radio", "checkbox"], function () {
                ie.valHooks[this] = {
                    set: function (e, t) {
                        return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
                    }
                }, te.checkOn || (ie.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                ie.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), ie.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }, bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var ft = ie.now(), pt = /\?/;
            ie.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, ie.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    n = new DOMParser, t = n.parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return (!t || t.getElementsByTagName("parsererror").length) && ie.error("Invalid XML: " + e), t
            };
            var ht = /#.*$/, mt = /([?&])_=[^&]*/, vt = /^(.*?):[ \t]*([^\r\n]*)$/gm, gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yt = /^(?:GET|HEAD)$/, bt = /^\/\//,
                wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, xt = {}, kt = {}, _t = "*/".concat("*"), Ct = o.location.href, Tt = wt.exec(Ct.toLowerCase()) || [];
            ie.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct,
                    type: "GET",
                    isLocal: gt.test(Tt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {"*": _t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? H(H(e, ie.ajaxSettings), t) : H(ie.ajaxSettings, e)
                },
                ajaxPrefilter: z(xt),
                ajaxTransport: z(kt),
                ajax: function (e, t) {
                    function n(e, t, n, s) {
                        var l, c, g, y, w, k = t;
                        2 !== b && (b = 2, a && clearTimeout(a), r = void 0, o = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = V(d, x, n)), y = W(d, y, x, l), l ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ie.lastModified[i] = w), (w = x.getResponseHeader("etag")) && (ie.etag[i] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, g = y.error, l = !g)) : (g = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", l ? h.resolveWith(f, [c, k, x]) : h.rejectWith(f, [x, k, g]), x.statusCode(v), v = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? c : g]), m.fireWith(f, [x, k]), u && (p.trigger("ajaxComplete", [x, d]), --ie.active || ie.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, s, a, l, u, c, d = ie.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event, h = ie.Deferred(),
                        m = ie.Callbacks("once memory"), v = d.statusCode || {}, g = {}, y = {}, b = 0, w = "canceled", x = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (2 === b) {
                                    if (!s) for (s = {}; t = vt.exec(o);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return 2 === b ? o : null
                            }, setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, g[e] = t), this
                            }, overrideMimeType: function (e) {
                                return b || (d.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (2 > b) for (t in e) v[t] = [v[t], e[t]]; else x.always(e[x.status]);
                                return this
                            }, abort: function (e) {
                                var t = e || w;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Ct) + "").replace(ht, "").replace(bt, Tt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(ge) || [""], null == d.crossDomain && (l = wt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === Tt[1] && l[2] === Tt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), $(xt, d, t, x), 2 === b) return x;
                    u = ie.event && d.global, u && 0 == ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !yt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (pt.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = mt.test(i) ? i.replace(mt, "$1_=" + ft++) : i + (pt.test(i) ? "&" : "?") + "_=" + ft++)), d.ifModified && (ie.lastModified[i] && x.setRequestHeader("If-Modified-Since", ie.lastModified[i]), ie.etag[i] && x.setRequestHeader("If-None-Match", ie.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : d.accepts["*"]);
                    for (c in d.headers) x.setRequestHeader(c, d.headers[c]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(f, x, d) || 2 === b)) return x.abort();
                    w = "abort";
                    for (c in{success: 1, error: 1, complete: 1}) x[c](d[c]);
                    if (r = $(kt, d, t, x)) {
                        x.readyState = 1, u && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                            x.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, r.send(g, n)
                        } catch (e) {
                            if (!(2 > b)) throw e;
                            n(-1, e)
                        }
                    } else n(-1, "No Transport");
                    return x
                },
                getJSON: function (e, t, n) {
                    return ie.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return ie.get(e, void 0, t, "script")
                }
            }), ie.each(["get", "post"], function (e, t) {
                ie[t] = function (e, n, r, i) {
                    return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({url: e, type: t, dataType: i, data: n, success: r})
                }
            }), ie._evalUrl = function (e) {
                return ie.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
            }, ie.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return ie.isFunction(e) ? this.each(function (t) {
                        ie(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                }, wrapInner: function (e) {
                    return this.each(ie.isFunction(e) ? function (t) {
                        ie(this).wrapInner(e.call(this, t))
                    } : function () {
                        var t = ie(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = ie.isFunction(e);
                    return this.each(function (n) {
                        ie(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), ie.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, ie.expr.filters.visible = function (e) {
                return !ie.expr.filters.hidden(e)
            };
            var It = /%20/g, jt = /\[\]$/, St = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
            ie.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function () {
                    i(this.name, this.value)
                }); else for (n in e) B(n, e[n], t, i);
                return r.join("&").replace(It, "+")
            }, ie.fn.extend({
                serialize: function () {
                    return ie.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = ie.prop(this, "elements");
                        return e ? ie.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !ie(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !Se.test(e))
                    }).map(function (e, t) {
                        var n = ie(this).val();
                        return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
                            return {name: t.name, value: e.replace(St, "\r\n")}
                        }) : {name: t.name, value: n.replace(St, "\r\n")}
                    }).get()
                }
            }), ie.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (e) {
                }
            };
            var Dt = 0, Mt = {}, Nt = {0: 200, 1223: 204}, Pt = ie.ajaxSettings.xhr();
            o.attachEvent && o.attachEvent("onunload", function () {
                for (var e in Mt) Mt[e]()
            }), te.cors = !!Pt && "withCredentials" in Pt, te.ajax = Pt = !!Pt, ie.ajaxTransport(function (e) {
                var t;
                return te.cors || Pt && !e.crossDomain ? {
                    send: function (n, r) {
                        var i, o = e.xhr(), s = ++Dt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) o.setRequestHeader(i, n[i]);
                        t = function (e) {
                            return function () {
                                t && (delete Mt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Nt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), o.onerror = t("error"), t = Mt[s] = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    }, abort: function () {
                        t && t()
                    }
                } : void 0
            }), ie.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (e) {
                        return ie.globalEval(e), e
                    }
                }
            }), ie.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), ie.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, i) {
                            t = ie("<script>").prop({async: !0, charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), ne.head.appendChild(t[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var Rt = [], Lt = /(=)\?(?=&|$)|\?\?/;
            ie.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Rt.pop() || ie.expando + "_" + ft++;
                    return this[e] = !0, e
                }
            }), ie.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r, i, s,
                    a = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Lt, "$1" + r) : !1 !== e.jsonp && (e.url += (pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return s || ie.error(r + " was not called"), s[0]
                }, e.dataTypes[0] = "json", i = o[r], o[r] = function () {
                    s = arguments
                }, n.always(function () {
                    o[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Rt.push(r)), s && ie.isFunction(i) && i(s[0]), s = i = void 0
                }), "script") : void 0
            }), ie.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || ne;
                var r = de.exec(e), i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
            };
            var Ot = ie.fn.load;
            ie.fn.load = function (e, t, n) {
                if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
                var r, i, o, s = this, a = e.indexOf(" ");
                return a >= 0 && (r = ie.trim(e.slice(a)), e = e.slice(0, a)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && ie.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, s.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                    s.each(n, o || [e.responseText, t, e])
                }), this
            }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                ie.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), ie.expr.filters.animated = function (e) {
                return ie.grep(ie.timers, function (t) {
                    return e === t.elem
                }).length
            };
            var qt = o.document.documentElement;
            ie.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, s, a, l, u, c = ie.css(e, "position"), d = ie(e), f = {};
                    "static" === c && (e.style.position = "relative"), a = d.offset(), o = ie.css(e, "top"), l = ie.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = d.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), ie.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
                }
            }, ie.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        ie.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
                    return o ? (t = o.documentElement, ie.contains(t, r) ? (typeof r.getBoundingClientRect !== Ee && (i = r.getBoundingClientRect()), n = U(o), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = this[0], r = {top: 0, left: 0};
                        return "fixed" === ie.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (r = e.offset()), r.top += ie.css(e[0], "borderTopWidth", !0), r.left += ie.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - ie.css(n, "marginTop", !0),
                            left: t.left - r.left - ie.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || qt; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                        return e || qt
                    })
                }
            }), ie.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
                var n = "pageYOffset" === t;
                ie.fn[e] = function (r) {
                    return we(this, function (e, r, i) {
                        var s = U(e);
                        return void 0 === i ? s ? s[t] : e[r] : void(s ? s.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                    }, e, r, arguments.length, null)
                }
            }), ie.each(["top", "left"], function (e, t) {
                ie.cssHooks[t] = j(te.pixelPosition, function (e, n) {
                    return n ? (n = I(e, t), Ue.test(n) ? ie(e).position()[t] + "px" : n) : void 0
                })
            }), ie.each({Height: "height", Width: "width"}, function (e, t) {
                ie.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                    ie.fn[r] = function (r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r), s = n || (!0 === r || !0 === i ? "margin" : "border");
                        return we(this, function (t, n, r) {
                            var i;
                            return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, s) : ie.style(t, n, r, s)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }), ie.fn.size = function () {
                return this.length
            }, ie.fn.andSelf = ie.fn.addBack, n(359) && (r = [], void 0 !== (i = function () {
                return ie
            }.apply(t, r)) && (e.exports = i));
            var Ft = o.jQuery, zt = o.$;
            return ie.noConflict = function (e) {
                return o.$ === ie && (o.$ = zt), e && o.jQuery === ie && (o.jQuery = Ft), ie
            }, typeof s === Ee && (o.jQuery = o.$ = ie), ie
        })
    }, 363: function (e, t, n) {
        var r, i, o;
        /*!
	Papa Parse
	v4.3.2
	https://github.com/mholt/PapaParse
*/
        !function (n, s) {
            i = [], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
        }(0, function () {
            "use strict";

            function e(e, t) {
                t = t || {};
                var n = t.dynamicTyping || !1;
                if (v(n) && (t.dynamicTypingFunction = n, n = {}), t.dynamicTyping = n, t.worker && C.WORKERS_SUPPORTED) {
                    var a = u();
                    return a.userStep = t.step, a.userChunk = t.chunk, a.userComplete = t.complete, a.userError = t.error, t.step = v(t.step), t.chunk = v(t.chunk), t.complete = v(t.complete), t.error = v(t.error), delete t.worker, void a.postMessage({
                        input: e,
                        config: t,
                        workerId: a.id
                    })
                }
                var l = null;
                return "string" == typeof e ? l = t.download ? new r(t) : new o(t) : !0 === e.readable && v(e.read) && v(e.on) ? l = new s(t) : (y.File && e instanceof File || e instanceof Object) && (l = new i(t)), l.stream(e)
            }

            function t(e, t) {
                function n(e) {
                    if ("object" != typeof e) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return t
                }

                function r(e, t) {
                    var n = "";
                    "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                    var r = e instanceof Array && e.length > 0, o = !(t[0] instanceof Array);
                    if (r && a) {
                        for (var s = 0; s < e.length; s++) s > 0 && (n += l), n += i(e[s], s);
                        t.length > 0 && (n += u)
                    }
                    for (var c = 0; c < t.length; c++) {
                        for (var d = r ? e.length : t[c].length, f = 0; f < d; f++) {
                            f > 0 && (n += l);
                            var p = r && o ? e[f] : f;
                            n += i(t[c][p], f)
                        }
                        c < t.length - 1 && (n += u)
                    }
                    return n
                }

                function i(e, t) {
                    return void 0 === e || null === e ? "" : (e = e.toString().replace(d, c + c), "boolean" == typeof s && s || s instanceof Array && s[t] || o(e, C.BAD_DELIMITERS) || e.indexOf(l) > -1 || " " === e.charAt(0) || " " === e.charAt(e.length - 1) ? c + e + c : e)
                }

                function o(e, t) {
                    for (var n = 0; n < t.length; n++) if (e.indexOf(t[n]) > -1) return !0;
                    return !1
                }

                var s = !1, a = !0, l = ",", u = "\r\n", c = '"';
                !function () {
                    "object" == typeof t && ("string" == typeof t.delimiter && 1 === t.delimiter.length && -1 === C.BAD_DELIMITERS.indexOf(t.delimiter) && (l = t.delimiter), ("boolean" == typeof t.quotes || t.quotes instanceof Array) && (s = t.quotes), "string" == typeof t.newline && (u = t.newline), "string" == typeof t.quoteChar && (c = t.quoteChar), "boolean" == typeof t.header && (a = t.header))
                }();
                var d = new RegExp(c, "g");
                if ("string" == typeof e && (e = JSON.parse(e)), e instanceof Array) {
                    if (!e.length || e[0] instanceof Array) return r(null, e);
                    if ("object" == typeof e[0]) return r(n(e[0]), e)
                } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), e.data instanceof Array && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = e.data[0] instanceof Array ? e.fields : n(e.data[0])), e.data[0] instanceof Array || "object" == typeof e.data[0] || (e.data = [e.data])), r(e.fields || [], e.data || []);
                throw"exception: Unable to serialize unrecognized input"
            }

            function n(e) {
                function t(e) {
                    var t = h(e);
                    t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null), this._handle = new a(t), this._handle.streamer = this, this._config = t
                }

                this._handle = null, this._paused = !1, this._finished = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                    data: [],
                    errors: [],
                    meta: {}
                }, t.call(this, e), this.parseChunk = function (e) {
                    if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
                        var t = this._config.beforeFirstChunk(e);
                        void 0 !== t && (e = t)
                    }
                    this.isFirstChunk = !1;
                    var n = this._partialLine + e;
                    this._partialLine = "";
                    var r = this._handle.parse(n, this._baseIndex, !this._finished);
                    if (!this._handle.paused() && !this._handle.aborted()) {
                        var i = r.meta.cursor;
                        this._finished || (this._partialLine = n.substring(i - this._baseIndex), this._baseIndex = i), r && r.data && (this._rowCount += r.data.length);
                        var o = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                        if (w) y.postMessage({results: r, workerId: C.WORKER_ID, finished: o}); else if (v(this._config.chunk)) {
                            if (this._config.chunk(r, this._handle), this._paused) return;
                            r = void 0, this._completeResults = void 0
                        }
                        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r.data), this._completeResults.errors = this._completeResults.errors.concat(r.errors), this._completeResults.meta = r.meta), !o || !v(this._config.complete) || r && r.meta.aborted || this._config.complete(this._completeResults, this._input), o || r && r.meta.paused || this._nextChunk(), r
                    }
                }, this._sendError = function (e) {
                    v(this._config.error) ? this._config.error(e) : w && this._config.error && y.postMessage({workerId: C.WORKER_ID, error: e, finished: !1})
                }
            }

            function r(e) {
                function t(e) {
                    var t = e.getResponseHeader("Content-Range");
                    return null === t ? -1 : parseInt(t.substr(t.lastIndexOf("/") + 1))
                }

                e = e || {}, e.chunkSize || (e.chunkSize = C.RemoteChunkSize), n.call(this, e);
                var r;
                this._nextChunk = b ? function () {
                    this._readChunk(), this._chunkLoaded()
                } : function () {
                    this._readChunk()
                }, this.stream = function (e) {
                    this._input = e, this._nextChunk()
                }, this._readChunk = function () {
                    if (this._finished) return void this._chunkLoaded();
                    if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), b || (r.onload = m(this._chunkLoaded, this), r.onerror = m(this._chunkError, this)), r.open("GET", this._input, !b), this._config.downloadRequestHeaders) {
                        var e = this._config.downloadRequestHeaders;
                        for (var t in e) r.setRequestHeader(t, e[t])
                    }
                    if (this._config.chunkSize) {
                        var n = this._start + this._config.chunkSize - 1;
                        r.setRequestHeader("Range", "bytes=" + this._start + "-" + n), r.setRequestHeader("If-None-Match", "webkit-no-cache")
                    }
                    try {
                        r.send()
                    } catch (e) {
                        this._chunkError(e.message)
                    }
                    b && 0 === r.status ? this._chunkError() : this._start += this._config.chunkSize
                }, this._chunkLoaded = function () {
                    if (4 == r.readyState) {
                        if (r.status < 200 || r.status >= 400) return void this._chunkError();
                        this._finished = !this._config.chunkSize || this._start > t(r), this.parseChunk(r.responseText)
                    }
                }, this._chunkError = function (e) {
                    var t = r.statusText || e;
                    this._sendError(t)
                }
            }

            function i(e) {
                e = e || {}, e.chunkSize || (e.chunkSize = C.LocalChunkSize), n.call(this, e);
                var t, r, i = "undefined" != typeof FileReader;
                this.stream = function (e) {
                    this._input = e, r = e.slice || e.webkitSlice || e.mozSlice, i ? (t = new FileReader, t.onload = m(this._chunkLoaded, this), t.onerror = m(this._chunkError, this)) : t = new FileReaderSync, this._nextChunk()
                }, this._nextChunk = function () {
                    this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
                }, this._readChunk = function () {
                    var e = this._input;
                    if (this._config.chunkSize) {
                        var n = Math.min(this._start + this._config.chunkSize, this._input.size);
                        e = r.call(e, this._start, n)
                    }
                    var o = t.readAsText(e, this._config.encoding);
                    i || this._chunkLoaded({target: {result: o}})
                }, this._chunkLoaded = function (e) {
                    this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result)
                }, this._chunkError = function () {
                    this._sendError(t.error)
                }
            }

            function o(e) {
                e = e || {}, n.call(this, e);
                var t, r;
                this.stream = function (e) {
                    return t = e, r = e, this._nextChunk()
                }, this._nextChunk = function () {
                    if (!this._finished) {
                        var e = this._config.chunkSize, t = e ? r.substr(0, e) : r;
                        return r = e ? r.substr(e) : "", this._finished = !r, this.parseChunk(t)
                    }
                }
            }

            function s(e) {
                e = e || {}, n.call(this, e);
                var t = [], r = !0;
                this.stream = function (e) {
                    this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
                }, this._nextChunk = function () {
                    t.length ? this.parseChunk(t.shift()) : r = !0
                }, this._streamData = m(function (e) {
                    try {
                        t.push("string" == typeof e ? e : e.toString(this._config.encoding)), r && (r = !1, this.parseChunk(t.shift()))
                    } catch (e) {
                        this._streamError(e)
                    }
                }, this), this._streamError = m(function (e) {
                    this._streamCleanUp(), this._sendError(e.message)
                }, this), this._streamEnd = m(function () {
                    this._streamCleanUp(), this._finished = !0, this._streamData("")
                }, this), this._streamCleanUp = m(function () {
                    this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
                }, this)
            }

            function a(e) {
                function t() {
                    if (_ && m && (d("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + C.DefaultDelimiter + "'"), m = !1), e.skipEmptyLines) for (var t = 0; t < _.data.length; t++) 1 === _.data[t].length && "" === _.data[t][0] && _.data.splice(t--, 1);
                    return n() && r(), s()
                }

                function n() {
                    return e.header && 0 === k.length
                }

                function r() {
                    if (_) {
                        for (var e = 0; n() && e < _.data.length; e++) for (var t = 0; t < _.data[e].length; t++) k.push(_.data[e][t]);
                        _.data.splice(0, 1)
                    }
                }

                function i(t) {
                    return e.dynamicTypingFunction && void 0 === e.dynamicTyping[t] && (e.dynamicTyping[t] = e.dynamicTypingFunction(t)), !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                }

                function o(e, t) {
                    return i(e) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && c(t) : t
                }

                function s() {
                    if (!_ || !e.header && !e.dynamicTyping) return _;
                    for (var t = 0; t < _.data.length; t++) {
                        for (var n = e.header ? {} : [], r = 0; r < _.data[t].length; r++) {
                            var i = r, s = _.data[t][r];
                            e.header && (i = r >= k.length ? "__parsed_extra" : k[r]), s = o(i, s), "__parsed_extra" === i ? (n[i] = n[i] || [], n[i].push(s)) : n[i] = s
                        }
                        _.data[t] = n, e.header && (r > k.length ? d("FieldMismatch", "TooManyFields", "Too many fields: expected " + k.length + " fields but parsed " + r, t) : r < k.length && d("FieldMismatch", "TooFewFields", "Too few fields: expected " + k.length + " fields but parsed " + r, t))
                    }
                    return e.header && _.meta && (_.meta.fields = k), _
                }

                function a(t, n) {
                    for (var r, i, o, s = [",", "\t", "|", ";", C.RECORD_SEP, C.UNIT_SEP], a = 0; a < s.length; a++) {
                        var u = s[a], c = 0, d = 0;
                        o = void 0;
                        for (var f = new l({delimiter: u, newline: n, preview: 10}).parse(t), p = 0; p < f.data.length; p++) {
                            var h = f.data[p].length;
                            d += h, void 0 !== o ? h > 1 && (c += Math.abs(h - o), o = h) : o = h
                        }
                        f.data.length > 0 && (d /= f.data.length), (void 0 === i || c < i) && d > 1.99 && (i = c, r = u)
                    }
                    return e.delimiter = r, {successful: !!r, bestDelimiter: r}
                }

                function u(e) {
                    e = e.substr(0, 1048576);
                    var t = e.split("\r"), n = e.split("\n"), r = n.length > 1 && n[0].length < t[0].length;
                    if (1 === t.length || r) return "\n";
                    for (var i = 0, o = 0; o < t.length; o++) "\n" === t[o][0] && i++;
                    return i >= t.length / 2 ? "\r\n" : "\r"
                }

                function c(e) {
                    return g.test(e) ? parseFloat(e) : e
                }

                function d(e, t, n, r) {
                    _.errors.push({type: e, code: t, message: n, row: r})
                }

                var f, p, m, g = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, y = this, b = 0, w = !1, x = !1, k = [], _ = {data: [], errors: [], meta: {}};
                if (v(e.step)) {
                    var T = e.step;
                    e.step = function (r) {
                        if (_ = r, n()) t(); else {
                            if (t(), 0 === _.data.length) return;
                            b += r.data.length, e.preview && b > e.preview ? p.abort() : T(_, y)
                        }
                    }
                }
                this.parse = function (n, r, i) {
                    if (e.newline || (e.newline = u(n)), m = !1, e.delimiter) v(e.delimiter) && (e.delimiter = e.delimiter(n), _.meta.delimiter = e.delimiter); else {
                        var o = a(n, e.newline);
                        o.successful ? e.delimiter = o.bestDelimiter : (m = !0, e.delimiter = C.DefaultDelimiter), _.meta.delimiter = e.delimiter
                    }
                    var s = h(e);
                    return e.preview && e.header && s.preview++, f = n, p = new l(s), _ = p.parse(f, r, i), t(), w ? {meta: {paused: !0}} : _ || {meta: {paused: !1}}
                }, this.paused = function () {
                    return w
                }, this.pause = function () {
                    w = !0, p.abort(), f = f.substr(p.getCharIndex())
                }, this.resume = function () {
                    w = !1, y.streamer.parseChunk(f)
                }, this.aborted = function () {
                    return x
                }, this.abort = function () {
                    x = !0, p.abort(), _.meta.aborted = !0, v(e.complete) && e.complete(_), f = ""
                }
            }

            function l(e) {
                e = e || {};
                var t = e.delimiter, n = e.newline, r = e.comments, i = e.step, o = e.preview, s = e.fastMode, a = e.quoteChar || '"';
                if (("string" != typeof t || C.BAD_DELIMITERS.indexOf(t) > -1) && (t = ","), r === t) throw"Comment character same as delimiter";
                !0 === r ? r = "#" : ("string" != typeof r || C.BAD_DELIMITERS.indexOf(r) > -1) && (r = !1), "\n" != n && "\r" != n && "\r\n" != n && (n = "\n");
                var l = 0, u = !1;
                this.parse = function (e, c, d) {
                    function f(e) {
                        _.push(e), I = l
                    }

                    function p(t) {
                        return d ? m() : (void 0 === t && (t = e.substr(l)), T.push(t), l = y, f(T), k && g(), m())
                    }

                    function h(t) {
                        l = t, f(T), T = [], A = e.indexOf(n, l)
                    }

                    function m(e) {
                        return {data: _, errors: C, meta: {delimiter: t, linebreak: n, aborted: u, truncated: !!e, cursor: I + (c || 0)}}
                    }

                    function g() {
                        i(m()), _ = [], C = []
                    }

                    if ("string" != typeof e) throw"Input must be a string";
                    var y = e.length, b = t.length, w = n.length, x = r.length, k = v(i);
                    l = 0;
                    var _ = [], C = [], T = [], I = 0;
                    if (!e) return m();
                    if (s || !1 !== s && -1 === e.indexOf(a)) {
                        for (var j = e.split(n), S = 0; S < j.length; S++) {
                            var T = j[S];
                            if (l += T.length, S !== j.length - 1) l += n.length; else if (d) return m();
                            if (!r || T.substr(0, x) !== r) {
                                if (k) {
                                    if (_ = [], f(T.split(t)), g(), u) return m()
                                } else f(T.split(t));
                                if (o && S >= o) return _ = _.slice(0, o), m(!0)
                            }
                        }
                        return m()
                    }
                    for (var E = e.indexOf(t, l), A = e.indexOf(n, l), D = new RegExp(a + a, "g"); ;) if (e[l] !== a) if (r && 0 === T.length && e.substr(l, x) === r) {
                        if (-1 === A) return m();
                        l = A + w, A = e.indexOf(n, l), E = e.indexOf(t, l)
                    } else if (-1 !== E && (E < A || -1 === A)) T.push(e.substring(l, E)), l = E + b, E = e.indexOf(t, l); else {
                        if (-1 === A) break;
                        if (T.push(e.substring(l, A)), h(A + w), k && (g(), u)) return m();
                        if (o && _.length >= o) return m(!0)
                    } else {
                        var M = l;
                        for (l++; ;) {
                            var M = e.indexOf(a, M + 1);
                            if (-1 === M) return d || C.push({type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: _.length, index: l}), p();
                            if (M === y - 1) {
                                var N = e.substring(l, M).replace(D, a);
                                return p(N)
                            }
                            if (e[M + 1] !== a) {
                                if (e[M + 1] === t) {
                                    T.push(e.substring(l, M).replace(D, a)), l = M + 1 + b, E = e.indexOf(t, l), A = e.indexOf(n, l);
                                    break
                                }
                                if (e.substr(M + 1, w) === n) {
                                    if (T.push(e.substring(l, M).replace(D, a)), h(M + 1 + w), E = e.indexOf(t, l), k && (g(), u)) return m();
                                    if (o && _.length >= o) return m(!0);
                                    break
                                }
                            } else M++
                        }
                    }
                    return p()
                }, this.abort = function () {
                    u = !0
                }, this.getCharIndex = function () {
                    return l
                }
            }

            function u() {
                if (!C.WORKERS_SUPPORTED) return !1;
                if (!x && null === C.SCRIPT_PATH) throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");
                var e = C.SCRIPT_PATH || g;
                e += (-1 !== e.indexOf("?") ? "&" : "?") + "papaworker";
                var t = new y.Worker(e);
                return t.onmessage = c, t.id = _++, k[t.id] = t, t
            }

            function c(e) {
                var t = e.data, n = k[t.workerId], r = !1;
                if (t.error) n.userError(t.error, t.file); else if (t.results && t.results.data) {
                    var i = function () {
                        r = !0, d(t.workerId, {data: [], errors: [], meta: {aborted: !0}})
                    }, o = {abort: i, pause: f, resume: f};
                    if (v(n.userStep)) {
                        for (var s = 0; s < t.results.data.length && (n.userStep({data: [t.results.data[s]], errors: t.results.errors, meta: t.results.meta}, o), !r); s++) ;
                        delete t.results
                    } else v(n.userChunk) && (n.userChunk(t.results, o, t.file), delete t.results)
                }
                t.finished && !r && d(t.workerId, t.results)
            }

            function d(e, t) {
                var n = k[e];
                v(n.userComplete) && n.userComplete(t), n.terminate(), delete k[e]
            }

            function f() {
                throw"Not implemented."
            }

            function p(e) {
                var t = e.data;
                if (void 0 === C.WORKER_ID && t && (C.WORKER_ID = t.workerId), "string" == typeof t.input) y.postMessage({
                    workerId: C.WORKER_ID,
                    results: C.parse(t.input, t.config),
                    finished: !0
                }); else if (y.File && t.input instanceof File || t.input instanceof Object) {
                    var n = C.parse(t.input, t.config);
                    n && y.postMessage({workerId: C.WORKER_ID, results: n, finished: !0})
                }
            }

            function h(e) {
                if ("object" != typeof e) return e;
                var t = e instanceof Array ? [] : {};
                for (var n in e) t[n] = h(e[n]);
                return t
            }

            function m(e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }

            function v(e) {
                return "function" == typeof e
            }

            var g, y = function () {
                return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== y ? y : {}
            }(), b = !y.document && !!y.postMessage, w = b && /(\?|&)papaworker(=|&|$)/.test(y.location.search), x = !1, k = {}, _ = 0, C = {};
            if (C.parse = e, C.unparse = t, C.RECORD_SEP = String.fromCharCode(30), C.UNIT_SEP = String.fromCharCode(31), C.BYTE_ORDER_MARK = "\ufeff", C.BAD_DELIMITERS = ["\r", "\n", '"', C.BYTE_ORDER_MARK], C.WORKERS_SUPPORTED = !b && !!y.Worker, C.SCRIPT_PATH = null, C.LocalChunkSize = 10485760, C.RemoteChunkSize = 5242880, C.DefaultDelimiter = ",", C.Parser = l, C.ParserHandle = a, C.NetworkStreamer = r, C.FileStreamer = i, C.StringStreamer = o, C.ReadableStreamStreamer = s, y.jQuery) {
                var T = y.jQuery;
                T.fn.parse = function (e) {
                    function t() {
                        if (0 === o.length) return void(v(e.complete) && e.complete());
                        var t = o[0];
                        if (v(e.before)) {
                            var i = e.before(t.file, t.inputElem);
                            if ("object" == typeof i) {
                                if ("abort" === i.action) return void n("AbortError", t.file, t.inputElem, i.reason);
                                if ("skip" === i.action) return void r();
                                "object" == typeof i.config && (t.instanceConfig = T.extend(t.instanceConfig, i.config))
                            } else if ("skip" === i) return void r()
                        }
                        var s = t.instanceConfig.complete;
                        t.instanceConfig.complete = function (e) {
                            v(s) && s(e, t.file, t.inputElem), r()
                        }, C.parse(t.file, t.instanceConfig)
                    }

                    function n(t, n, r, i) {
                        v(e.error) && e.error({name: t}, n, r, i)
                    }

                    function r() {
                        o.splice(0, 1), t()
                    }

                    var i = e.config || {}, o = [];
                    return this.each(function (e) {
                        if ("INPUT" !== T(this).prop("tagName").toUpperCase() || "file" !== T(this).attr("type").toLowerCase() || !y.FileReader || !this.files || 0 === this.files.length) return !0;
                        for (var t = 0; t < this.files.length; t++) o.push({file: this.files[t], inputElem: this, instanceConfig: T.extend({}, i)})
                    }), t(), this
                }
            }
            return w ? y.onmessage = p : C.WORKERS_SUPPORTED && (g = function () {
                var e = document.getElementsByTagName("script");
                return e.length ? e[e.length - 1].src : ""
            }(), document.body ? document.addEventListener("DOMContentLoaded", function () {
                x = !0
            }, !0) : x = !0), r.prototype = Object.create(n.prototype), r.prototype.constructor = r, i.prototype = Object.create(n.prototype), i.prototype.constructor = i, o.prototype = Object.create(o.prototype), o.prototype.constructor = o, s.prototype = Object.create(n.prototype), s.prototype.constructor = s, C
        })
    }, 364: function (e, t) {
        !function (e) {
            var t = function (e) {
                return e instanceof Error ? {message: e.message, stack: e.stack} : e
            }, n = function () {
                this.PRO_OK = 1, this.PRO_FAIL = -1
            };
            n.prototype = {
                composeRequest: function (e, t, n) {
                    return e ? JSON.stringify({reqId: e, moduleId: t, body: n}) : {moduleId: t, body: n}
                }, composeResponse: function (e, n, r) {
                    return e.reqId ? JSON.stringify({respId: e.reqId, error: t(n), body: r}) : null
                }, composeCommand: function (e, t, n, r) {
                    return e ? JSON.stringify({reqId: e, command: t, moduleId: n, body: r}) : JSON.stringify({command: t, moduleId: n, body: r})
                }, parse: function (e) {
                    return "string" == typeof e ? JSON.parse(e) : e
                }, isRequest: function (e) {
                    return e && e.reqId
                }
            }, n.PRO_OK = 1, n.PRO_FAIL = -1, e.protocol = new n
        }(window)
    }, 365: function (e, t) {
    }, 38: function (e, t) {
        e.exports = {
            1000: "6万ACE币",
            1001: "30万ACE币",
            1002: "68万ACE币",
            1003: "128万ACE币",
            1004: "328万ACE币",
            1005: "648万ACE币",
            1006: "默认男头像",
            1007: "默认女头像",
            1008: "狍狍",
            1009: "晴子",
            1010: "Tina",
            1011: "麦克",
            1012: "穷鬼附身",
            1013: "拖鞋",
            1014: "冠军徽章",
            1016: "超级炸弹",
            1018: "大喇叭",
            1019: "改名卡",
            1020: "10元微信红包",
            1021: "50元微信红包",
            1022: "100元微信红包",
            1023: "Apple iPhone 6S",
            1024: "Apple iPad Air",
            1025: "Apple Watch",
            1026: "10元充值卡",
            1027: "50元充值卡",
            1028: "100元充值卡",
            1029: "小米NOTE",
            1030: "3亿锦标赛门票",
            1031: "百万筹码",
            1032: "三亿筹码",
            1033: "默认牌面1",
            1034: "默认牌面2",
            1035: "默认牌背1",
            1036: "默认牌背2",
            1037: "龙哥",
            1038: "Duke",
            1039: "鸡蛋",
            1040: "啤酒",
            1041: "玫瑰花",
            1042: "水晶扑克",
            1043: "高清扑克",
            1044: "鲨鱼牌背",
            1045: "ACE简约牌背",
            1046: "iPhone6S争夺赛门票",
            1047: "30元微信红包",
            1048: "88元微信红包",
            1049: "888元微信红包",
            1050: "888888ACE币",
            1051: "6888888ACE币",
            1052: "Apple iPad mini",
            1053: "500元微信红包",
            1054: "300元微信红包",
            1055: "200元微信红包",
            1056: "上线庆典赛门票",
            1057: "3000万快速赛门票",
            1058: "666元红包(30级)",
            1059: "1亿ACE币赛门票",
            1060: "开业回馈赛门票",
            1061: "新年迎春赛门票",
            1062: "迎春晋级赛门票",
            1063: "iPad mini订阅专属赛门票",
            1064: "30元红包(15级)",
            1065: "50元红包(30级以上)",
            1066: "70元红包（30级）",
            1067: "1888元红包（50级）",
            1068: "扑克大师赛一门票",
            1069: "扑克大师赛二门票",
            1070: "扑克大师赛三门票",
            1071: "亚巡赛红牛券",
            1072: "CPG主赛门票",
            1073: "CPG主赛门票争夺赛门票",
            1074: "MacBook",
            1075: "1000面值京东卡",
            1076: "500面值京东卡",
            1077: "200面值京东卡",
            1078: "CPG卫星赛门票",
            1079: "CPG边赛门票",
            1080: "CPG边赛门票赛门票",
            1081: "南洋杯门票赛门票",
            1082: "南洋杯/IPO门票",
            1083: "南洋杯门票",
            1084: "南洋杯/IPO卫星赛门票",
            1085: "1亿卫星赛门票",
            1086: "1亿大奖赛门票",
            1087: "iPhone7卫星赛门票",
            1088: "iPhone7贺岁赛门票",
            1089: "iPhone7plus",
            1090: "iPad Pro",
            1091: "iPhone7 Plus 32G",
            1092: "爱马仕腰带",
            1093: "奥迪A6L 2016款",
            1094: "百达翡丽5711",
            1095: "宝马X5 2016款",
            1096: "上海迪士尼3日自助游",
            1097: "大溪地6晚8日自助游",
            1098: "法拉利488",
            1099: "劳力士-黑水鬼",
            1100: "路易威登腰带",
            1101: "欧米茄-星座系列18K",
            1102: "帕劳4晚5日自助游",
            1103: "其他车型预定",
            1104: "1000元京东卡",
            1105: "500元京东卡",
            1106: "200元京东卡",
            1107: "50元充值卡",
            1108: "100元充值卡",
            1109: "百万热身赛门票",
            1110: "iPhone7 Plus 128G",
            1111: "百万大奖赛门票",
            1112: "百万新人赛门票",
            1113: "百万卫星赛门票",
            1114: "iPhone7 128G",
            1115: "底牌专属赛门票",
            1116: "超级周五回馈赛门票",
            1117: "ACE新人福利赛门票",
            1118: "新春集字.新",
            1119: "新春集字.春",
            1120: "新春集字.快",
            1121: "新春集字.乐",
            1122: "iPad新人邀请赛门票",
            1123: "“我是王牌”猎人赛门票",
            1124: "MacBook新人邀请赛门票",
            1125: "iPhone7P新人邀请赛门票",
            1126: "ACE6人徽章赛门票",
            1127: "20元充值卡",
            1128: "MacBook Pro新款",
            1129: "新款外星人笔记本",
            1130: "iPhone7 Plus 128G 红色版",
            1901: "偷鸡",
            1902: "抓鸡",
            1903: "女神玫瑰",
            1904: "VIP卡",
            1905: "月卡",
            1906: "5000万快速赛门票",
            1907: "200元微信红包",
            1908: "100元微信红包",
            1909: "50元微信红包",
            1910: "110万菠萝卫星赛门票CDK",
            1911: "39万菠萝卫星赛门票CDK",
            2000: "牌桌1",
            2001: "牌桌2",
            2002: "牌桌3",
            2003: "牌桌4",
            2004: "500万ACE币",
            2005: "1000万ACE币",
            2010: "荷官1",
            2011: "荷官2",
            2012: "荷官3",
            11008: "狍狍",
            11009: "晴子",
            11010: "Tina",
            11011: "麦克",
            11012: "穷鬼附身",
            11013: "拖鞋",
            11014: "冠军徽章",
            11016: "超级炸弹",
            11018: "大喇叭",
            11019: "改名卡",
            11020: "10元微信红包",
            11021: "50元微信红包",
            11022: "100元微信红包",
            11023: "Apple iPhone 6S",
            11024: "Apple iPad Air",
            11025: "Apple Watch",
            11026: "10元充值卡",
            11027: "50元充值卡",
            11028: "100元充值卡",
            11029: "小米NOTE",
            11030: "3亿锦标赛门票",
            11031: "百万筹码",
            11032: "三亿筹码",
            11037: "龙哥",
            11038: "Duke",
            11039: "鸡蛋",
            11040: "啤酒",
            11041: "玫瑰花",
            11046: "iPhone6S争夺赛门票",
            11047: "30元微信红包",
            11048: "88元微信红包",
            11049: "888元微信红包",
            11050: "888888ACE币",
            11051: "6888888ACE币",
            11052: "Apple iPad mini",
            11053: "500元微信红包",
            11054: "300元微信红包",
            11055: "200元微信红包",
            11056: "上线庆典赛门票",
            11057: "3000万快速赛门票",
            11058: "666元微信红包",
            11059: "1亿ACE币赛门票",
            11060: "开业回馈赛门票",
            11061: "新年迎春赛门票",
            11062: "迎春晋级赛门票",
            11063: "iPad mini订阅专属赛门票",
            11064: "30元红包(15级)",
            11065: "50元红包(30级以上)",
            11066: "70元红包（30级）",
            11067: "1888元红包（50级）",
            11068: "扑克大师赛一门票",
            11069: "扑克大师赛二门票",
            11070: "扑克大师赛三门票",
            11071: "亚巡赛红牛券",
            11072: "CPG主赛门票",
            11073: "CPG主赛门票争夺赛门票",
            11074: "MacBook",
            11075: "1000面值京东卡",
            11076: "500面值京东卡",
            11077: "200面值京东卡",
            11078: "CPG卫星赛门票",
            11079: "CPG边赛门票",
            11080: "CPG边赛门票赛门票",
            11081: "南洋杯门票赛门票",
            11082: "南洋杯/IPO门票",
            11083: "南洋杯门票",
            11084: "南洋杯/IPO卫星赛门票",
            11085: "1亿卫星赛门票",
            11086: "1亿大奖赛门票",
            11087: "iPhone7卫星赛门票",
            11088: "iPhone7贺岁赛门票",
            11089: "iPhone7plus",
            11090: "iPad Pro",
            11091: "iPhone7 Plus 32G",
            11092: "爱马仕腰带",
            11093: "奥迪A6L 2016款",
            11094: "百达翡丽5711",
            11095: "宝马X5 2016款",
            11096: "上海迪士尼3日自助游",
            11097: "大溪地6晚8日自助游",
            11098: "法拉利488",
            11099: "劳力士-黑水鬼",
            11100: "路易威登腰带",
            11101: "欧米茄-星座系列18K",
            11102: "帕劳4晚5日自助游",
            11103: "其他车型预定",
            11104: "1000元京东卡",
            11105: "500元京东卡",
            11106: "200元京东卡",
            11107: "50元充值卡",
            11108: "100元充值卡",
            11109: "百万热身赛门票",
            11110: "iPhone7 Plus 128G",
            11111: "百万大奖赛门票",
            11112: "百万新人赛门票",
            11113: "百万卫星赛门票",
            11114: "iPhone7 128G",
            11115: "底牌专属赛门票",
            11116: "超级周五回馈赛门票",
            11117: "ACE新人福利赛门票",
            11118: "新春集字.新",
            11119: "新春集字.春",
            11120: "新春集字.快",
            11121: "新春集字.乐",
            11122: "iPad新人邀请赛门票",
            11123: "“我是王牌”猎人赛门票",
            11124: "MacBook新人邀请赛门票",
            11125: "iPhone7P新人邀请赛门票",
            11126: "ACE6人徽章赛门票",
            11127: "20元充值卡",
            11128: "MacBook Pro新款",
            11129: "新款外星人笔记本",
            11130: "iPhone7 Plus 128G 红色版",
            11901: "偷鸡",
            11902: "抓鸡",
            11903: "女神玫瑰",
            11904: "VIP卡",
            11905: "月卡",
            11906: "5000万快速赛门票",
            11907: "200元微信红包",
            11908: "100元微信红包",
            11909: "50元微信红包",
            11910: "110万菠萝卫星赛门票CDK",
            11911: "39万菠萝卫星赛门票CDK",
            12000: "牌桌1",
            12001: "牌桌2",
            12002: "牌桌3",
            12003: "牌桌4",
            12010: "荷官1",
            12011: "荷官2",
            12012: "荷官3"
        }
    }, 9: function (e, t, n) {
        "use strict";
        var r = n(12), i = n.n(r), o = n(11), s = n.n(o), a = n(1), l = n(358), u = n(10);
        a.default.use(l.a);
        var c = new l.a.Store({
            state: {loginbean: null}, mutations: {
                zhuce: function (e, t) {
                    e.loginbean = t
                }, login: function (e, t) {
                    e.loginbean = t
                }
            }
        });
        c.getLoginbean = s()(i.a.mark(function e() {
            var t;
            return i.a.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (t = this.state.loginbean, alert(t), null == t) {
                            e.next = 6;
                            break
                        }
                        return e.abrupt("return", t);
                    case 6:
                        return e.next = 8, n.i(u.a)();
                    case 8:
                        return e.abrupt("return", e.sent);
                    case 9:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        })), t.a = c
    }
}, [214]);