import request from '@/utils/request.js';

const URL = {
  GET_LIST:'/blog',
  GET_DETAIL:'/blog/:blogId',
  CREATE:'/blog',
  EDIT:'/blog/:blogId',
  DELETE:'/blog/:blogId'
}

export default {
  getBlogs({page=1,userId,atIndex} = {page:1}){
    return request( URL.GET_LIST , 'GET' , { page , userId , atIndex });
  },
  getIndexBlogs({ page = 1 } = { page : 1 }){
    return this.getBlogs({page,atIndex:true})
  },
  getBlogsByUserId(userId,{page= 1,atIndex} = { page : 1 }){
    return this.getBlogs({userId,page,atIndex});
  },
  getDetail({blogId}){
    return request( URL.GET_DETAIL.replace(':blogId',blogId) , 'get' )
  },
  updateBlog({blogId},{title,content,desc,atIndex}){
    return request( URL.EDIT.replace(':blogId',blogId) , 'patch',{title,content,desc,atIndex} )
  },
  detailBlog({blogId}){
    return request( URL.DELETE.replace(':blogId',blogId) , 'DELETE' )
  },
  createBlog({title='',content='',desc='',atIndex=false} = {title:'',content:'',desc:'',atIndex:false}){
    return request( URL.CREATE , 'post' ,{title,content,desc})
  }
}