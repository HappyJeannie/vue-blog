<template>
  <header :class="{ 'login' : !isLogin , 'nologin' : isLogin }">
    <template v-if="isLogin">
      <h1>LET'S share</h1>
      <p>精品博客汇聚</p>
      <el-row>
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </el-row>
    </template>
    <template v-else>
      <h1>let's share</h1>
      <i class="edit el-icon-edit"></i>
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" class="avatar">
    </template>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isLogin : false
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
}

</style>
