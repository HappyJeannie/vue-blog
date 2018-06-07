<template>
  <header :class="{ 'login' : isLogin , 'nologin' : !isLogin }">
    <template v-if="!isLogin">
      <h1>LET'S share</h1>
      <p>精品博客汇聚</p>
      <el-row>
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </el-row>
    </template>
    <template v-else>
      <h1>let's share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img :src="user.avatar" class="avatar" :alt="user.name">
        <ul>
          <li><router-link to="my">我的</router-link></li>
          <li><a href="javascript:;" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters , mapActions} from 'vuex';
import auth from '@/api/auth';
window.auth = auth;
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters([
      'user',
      'isLogin'
    ])
  },
  created(){
    this.checkLogin();
  },
  methods : {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout:function(){
      this.logout();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./../assets/style/base.less";

header.nologin{
  padding:0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;
  h1{
    color: #fff;
    font-size: 40px;
    margin:60px 0 0 0 ;
    text-transform: uppercase;
  }
  p{
    margin: 15px 0 0 0;
    color: #fff;
  }
  button{
    margin: 20px 5px 0;
  }
}
header.login{
  display: flex;
  align-items: center;
  background: @bgColor;
  h1{
    color: #fff;
    font-size: 40px;
    margin:0;
    padding: 0;
    text-transform: uppercase;
    flex: 1;  
  }
  .edit{
    font-size: 30px;
    color: #fff;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border:1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
  .user{
    position: relative;
    ul{
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border:1px solid #eaeaea;
      margin: 0px;
      padding: 0px;
      background-color: #fff;
      a{
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;
        &:hover{
          background: #eaeaea;
        }
      }
    }
    &:hover{
      ul{
        display: block;
      }
    }
  }
}

</style>
