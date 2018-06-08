import blog from '@/api/blog.js';

export default {
  name: 'create',
  data () {
    return {
      title : '',
      description : '',
      content : '',
      atIndex : false 
    }
  },
  methods:{
    onCreate(){
      blog.create({
        title:this.title,
        description:this.description,
        content:this.content,
        atIndex:this.atIndex
      })
      .then((res) => {
        this.$message({
          type:'success',
          message:res.msg
        })
        this.$router.push({
          path:`/detail/${res.data.id}`
        })
      })
    }
  }
}