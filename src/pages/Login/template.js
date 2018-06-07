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
              this.$router.push({path:'/'})
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