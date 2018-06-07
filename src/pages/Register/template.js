import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'register'
    ]),
    onRegister(){
      if(this.username === '' || this.password === ''){
        this.$message({
          type:'error',
          message:'用户名或密码不能为空'
        })
      }else{
        this.register({username:this.username,password:this.password})
          .then(
            (res) => {
              this.$message({
                type:'success',
                message:'注册成功'
              })
              this.$router.push({'path':'/'})
            },
            (res) => {
              this.$message({
                type:'error',
                message:res.msg
              })
            }
          )
      }
    }
  }
}