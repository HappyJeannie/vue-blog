import blog from '@/api/blog.js'
import marked from 'marked'
export default {
  name: 'detail',
  data () {
    return {
      title:'',
      rawContent:'',
      user:{},
      createdAt:'',
      blogId:''
    }
  },
  created(){
    this.blogId = this.$route.params.blogId;
    blog.getDetail(this.blogId)
    .then((res) => {
      console.log(res);
      this.title = res.data.title;
      this.user = res.data.user;
      this.rawContent = res.data.content;
      this.createdAt = res.data.createdAt;
    })
  },
  computed:{
    markdown(){
      return marked(this.rawContent)
    }
  }
}