import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

export default function request( url , method = 'GET' , data ){
  return new Promise((resolve,reject) => {
    let options = {
      url,
      method
    }
    if(method.toLowerCase() === 'get'){
      options.params = data;
    }else{
      options.data = data;
    }
    axios(options)
    .then((res) => {
      if(res.data.status === 'ok'){
        Message({
          message : res.data.msg ,
          type : 'success'
        })
        resolve(res.data);
      }else{
        Message.error(res.data.msg);
        reject(res.data);
      }
    })
    .catch((res) => {
      Message.error('网络异常');
      reject({img:'网络异常'})
    })
  })
}