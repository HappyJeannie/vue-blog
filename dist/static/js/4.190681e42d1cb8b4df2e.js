webpackJsonp([4],{OpX7:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t("4YfN"),n=t.n(r),o=t("9rMa"),a={name:"login",data:function(){return{username:"",password:""}},methods:n()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;""===this.username||""===this.password?this.$message({type:"error",message:"用户名/密码不能为空"}):this.login({username:this.username,password:this.password}).then(function(s){e.$message({type:"success",message:"登录成功"}),console.log(e.$route.query.redirect),e.$router.push({path:e.$route.query.redirect||"/"})},function(s){e.$message({type:"error",message:s.msg})}),console.log(this.username+" "+this.password)}})},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"login"}},[t("h4",[e._v("用户名")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),e._v(" "),t("h4",[e._v("密码")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(s){return"button"in s||!e._k(s.keyCode,"enter",13,s.key,"Enter")?e.onLogin(s):null},input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._v(" "),t("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),t("p",{staticClass:"notice"},[e._v("没有账号？"),t("router-link",{attrs:{to:"/register"}},[e._v("立即注册")])],1)],1)},staticRenderFns:[]};var u=t("vSla")(a,i,!1,function(e){t("Zt4V")},null,null);s.default=u.exports},Zt4V:function(e,s){}});
//# sourceMappingURL=4.190681e42d1cb8b4df2e.js.map