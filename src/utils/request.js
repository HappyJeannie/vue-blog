import axios from 'axios';
import {Message} from 'element-ui';

//设置全局axios的默认值

axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(url,type = 'GET',data={}){
  return new Promise((resolve,reject) => {
    let option = {
      url,
      method:type
    }
    if(type.toLowerCase() === 'get'){
      option.pramas = data;
    }else{
      option.data = data;
    }
    axios(option)
    .then((res) => {
      if(res.data.status === 'ok'){
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    })
    .catch((err)=>{
      Message.error('网络异常')
      reject({msg:'网络异常'})
    })
  })
}