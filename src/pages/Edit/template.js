import blog from '@/api/blog.js';

export default {
  name: 'edit',
  data () {
    return {
      title : '',
      description : '',
      content : '',
      atIndex : false ,
      blogId:''
    }
  },
  created(){
    this.blogId = this.$route.params.blogId;
    blog.getDetail(this.blogId)
      .then((res)=>{
        console.log(res);
        this.title = res.data.title;
        this.description = res.data.description;
        this.content = res.data.content;
        this.atIndex = res.data.atIndex;
      })
  },
  methods:{
    onSave(){
      blog.edit(this.blogId,{
        title:this.title,
        description:this.description,
        content:this.content,
        atIndex:this.atIndex
      })
      .then((res) => {
        this.$router.push({
          path:`/detail/${res.data.id}`
        })
      })
    }
  }
}