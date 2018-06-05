import request from '../utils/request';

let URL = {
  REGISTER : '/auth/register',
  LOGIN : '/auth/login',
  LOGOUT : '/auth/logout',
  GETINFO : '/auth'
}

export default {
  register({ username , password }){
    return request( URL.REGISTER , 'post' , { username , password } )
  },
  login({ username , password }){
    return request( URL.LOGIN , 'post' , { username , password } )
  },
  logout(){
    return request( URL.LOGOUT )
  },
  getInfo(){
    return request( URL.GETINFO )
  }
}