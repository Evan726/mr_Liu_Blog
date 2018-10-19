import axios from 'axios'
// import { Message } from 'element-ui'
// // import store from '@/store'



const service = axios.create({
    //baseURL: 'http://192.168.2.253/thrnrn/', // api的base_url
    //baseURL: "https://api-dev", // api的base_url
    timeout: 5000 // request timeout
})


service.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
service.interceptors.response.use(function(response) {
    console.log('response',response)
    return response;
}, function(error) {
    return Promise.reject(error);
});

export default service
