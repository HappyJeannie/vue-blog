import request from '@/utils/request.js'

let URL = {
  GETLISTS : '/blog',
  GETDETAIL : '/blog/:blogId',
  CREATE : '/blog',
  EDIT : '/blog/:blogId',
  DELETE : '/blog/:blogId'
}

export default {
  getBlogs({page=1,userId,atIndex} = {page : 1}){
    return request( URL.GETLISTS, 'get' , { page , userId , atIndex } )
  },
  getIndexBlogs({page = 1} = { page : 1 }){
    return this.getBlogs({page,atIndex:true})
  },
  getBlogsByUserId(userId,{page = 1,atIndex} = {page : 1}){
    return this.getBlogs({page,userId,atIndex})
  },
  getBlogsByPage(page){
    return this.getBlogs({page : page})
  },
  getDetail( blogId ){
    return request( URL.GETDETAIL.replace( '/:blogId' , blogId ))
  },
  create({ title = '' , content = '' , description = '' , atIndex = false } = {title:'',content:'',description:'',atIndex:false}){
    return request( URL.CREATE , 'post' , { title , content , description } )
  },
  edit( blogId , { title , content , description }){
    return request( URL.EDIT.replace( '/:blogId' , blogId ) , 'patch' , { title , content , description })
  },
  delete( blogId ){
    return request( URL.DELETE.replace( '/:blogId' , blogId ) , 'delete')
  }
}