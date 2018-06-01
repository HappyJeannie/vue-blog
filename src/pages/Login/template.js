export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visiable: false
    }
  },
  methods:{
    open(){
      this.$alert('内容','标题',{
        confirmButtonText:'Ok',
        callback:action => {
          this.$message({
            type:'info',
            message:`action`
          })
        }
      })
    }
  }
}