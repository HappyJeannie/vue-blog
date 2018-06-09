import blog from '@/api/blog'
export default {
  name: 'index',
  data () {
    return {
      blogList:[],
      total:1,
      page:1
    }
  },
  created(){
    this.page = this.$route.query.page || 1;
    blog.getBlogsByPage(this.page)
    .then((res) => {
      console.log(res);
      this.blogList = res.data;
      this.total = res.total;
      this.page = res.page
    })
  },
  methods:{
    onPageChange(newPage){
      console.log(newPage)
      blog.getBlogsByPage(newPage)
      .then((res) => {
        this.blogList = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({
          path: '/',
          query : {page : newPage}
        })
      })
    }
  }
}