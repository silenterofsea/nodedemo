/*
拦截器
*/
import axios from 'axios';
import { Message } from 'element-ui';
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api';
// 'http://www.web-jshtml.cn/productapi'
var service = axios.create({
  baseURL: BASEURL,
  timeout: 1000
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    //console.log(response);
    let data = response.data;
    //console.log(data);
    if(data.resCode !== 0){
      //console.log(data.message);
      Message.error(data.message);
      //console.log(data.Message);
      return Promise.reject(data);
    }else{
      return response;
    }
    //console.log(response);
    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
//   service.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
export default service;