webpackJsonp([10],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("MVMM"),a=n("xB4m"),o=n.n(a),s=(n("l4ih"),n("4YfN")),i=n.n(s),u=n("9rMa"),c=n("vLgD"),l="/auth/register",d="/auth/login",f="/auth/logout",m="/auth",p={register:function(e){var t=e.username,n=e.password;return Object(c.a)(l,"post",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(c.a)(d,"post",{username:t,password:n})},logout:function(){return Object(c.a)(f)},getInfo:function(){return Object(c.a)(m)}};window.auth=p;var h={data:function(){return{}},computed:i()({},Object(u.c)(["user","isLogin"])),created:function(){this.checkLogin()},methods:i()({},Object(u.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,nologin:!e.isLogin}},[e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("let's share")])],1),e._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),e._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.name}}),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[e._v("我的")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:e.onLogout}},[e._v("注销")])])])])]:[n("h1",[e._v("LET'S share")]),e._v(" "),n("p",[e._v("精品博客汇聚")]),e._v(" "),n("el-row",[n("router-link",{attrs:{to:"/login"}},[n("el-button",[e._v("立即登录")])],1),e._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[e._v("注册账号")])],1)],1)]],2)},staticRenderFns:[]};var v={render:function(){var e=this.$createElement;return(this._self._c||e)("footer",[this._v("\n  From : Summer (https://happyjeannie.github.io/)\n")])},staticRenderFns:[]};var b={name:"App",data:function(){return{}},components:{Header:n("vSla")(h,g,!1,function(e){n("zH0j")},"data-v-640dd6d6",null).exports,Footer:n("vSla")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(e){n("RrHt")},"data-v-05bd3f24",null).exports}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"header"}}),this._v(" "),t("main",{attrs:{id:"main"}},[t("router-view")],1),this._v(" "),t("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var L=n("vSla")(b,w,!1,function(e){n("jMUm")},null,null).exports,_=n("zO6J"),k=n("lC5x"),j=n.n(k),x=n("J0Oq"),M=n.n(x),y={state:{user:null,isLogin:!1},getters:{user:function(e){return e.user},isLogin:function(e){return e.isLogin}},mutations:{setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},actions:{login:function(e,t){var n=e.commit,r=t.username,a=t.password;return p.login({username:r,password:a}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(e,t){var n=this,r=e.commit,a=t.username,o=t.password;return M()(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.register({username:a,password:o});case 2:return t=e.sent,r("setUser",{user:t.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",t.data);case 6:case"end":return e.stop()}},e,n)}))()},logout:function(e){var t=this,n=e.commit;return M()(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return e.stop()}},e,t)}))()},checkLogin:function(e){var t=this,n=e.commit,r=e.state;return M()(j.a.mark(function e(){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isLogin){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,p.getInfo();case 4:if(a=e.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){e.next=8;break}return e.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,t)}))()}}},O={state:{},getters:{},mutations:{},actions:{}};r.default.use(u.a);var P=new u.a.Store({modules:[y,O]});r.default.use(_.a);var A=new _.a({routes:[{path:"/",name:"index",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"epW7"))}},{path:"/login",name:"login",component:function(){return n.e(4).then(n.bind(null,"OpX7"))}},{path:"/register",name:"register",component:function(){return n.e(8).then(n.bind(null,"YDhy"))}},{path:"/detail/:blogId",name:"detail",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"YE8u"))}},{path:"/create",name:"create",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/edit/:blogId",name:"edit",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/user/:userId",name:"user",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"bywM"))}},{path:"/my",name:"my",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}}]});A.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?P.dispatch("checkLogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var E=A,H=n("hRKE"),R=n.n(H);function U(e){var t=("object"===(void 0===e?"undefined":R()(e))?e:new Date(e)).getTime(),n=Date.now()-t,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var C={install:function(e,t){e.prototype.formatDate=U}};r.default.config.productionTip=!1,r.default.use(o.a),r.default.use(C),console.log(r.default),window.Vue=r.default,new r.default({el:"#app",router:E,store:P,components:{App:L},template:"<App/>"})},RrHt:function(e,t){},jMUm:function(e,t){},l4ih:function(e,t){},vLgD:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments[2];return new a.a(function(r,a){var o={url:e,method:t};"get"===t.toLowerCase()?o.params=n:o.data=n,s()(o).then(function(e){"ok"===e.data.status?(Object(i.Message)({message:e.data.msg,type:"success"}),r(e.data)):(i.Message.error(e.data.msg),a(e.data))}).catch(function(e){i.Message.error("网络异常"),a({img:"网络异常"})})})};var r=n("rVsN"),a=n.n(r),o=n("aozt"),s=n.n(o),i=n("xB4m");n.n(i);s.a.defaults.baseURL="http://blog-server.hunger-valley.com",s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.withCredentials=!0},zH0j:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9481526607a74faa8f4d.js.map