import request from '@/utils/request.js'
import auth from '@/api/auth.js'
çç
window.request = request;
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
      this.$message({
        message:'提示消息',
        type:'success'
      })
    }
  }
}