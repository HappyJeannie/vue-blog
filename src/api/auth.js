import request from '@/utils/request.js';

const URL = {
  REGISTER:'/auth/register',
  LOGIN:'/auth/login',
  LOGOUT:'/auth/logout',
  GET_INFO:'/auth'
}

export default {
  register({username,password}){
    return request(URL.REGISTER , 'post' , { username , password });
  },
  login({username,password}){
    return request( URL.LOGIN , 'post' , {username , password} )
  },
  logout(){
    return request( URL.LOGOUT , 'get' )
  },
  getInfo(){
    return request( URL.GET_INFO , 'get' )
  }
}