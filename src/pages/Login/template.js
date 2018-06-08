import { mapActions } from 'vuex';

export default {
  name: 'login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    onLogin(){
      if(this.username === '' || this.password === ''){
        this.$message({
          type:'error',
          message:'用户名/密码不能为空'
        })
      }else{
        this.login({username:this.username,password:this.password})
          .then(
            (res) => {
              this.$message({
                type:'success',
                message:'登录成功'
              })
              console.log(this.$route.query.redirect)
              this.$router.push({path:this.$route.query.redirect || '/'})
            },
            (res) => {
              this.$message({
                type:'error',
                message:res.msg
              })
            }
        )
      }
      console.log(this.username + ' ' + this.password)
    }
  }
}