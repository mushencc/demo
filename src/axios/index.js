import axios from "axios";

import Vue from "vue";

const instance = axios.create(config);

// 3. 配置信息
let config = {
  // 每次请求的协议、IP地址。  设置该配置后，每次请求路径都可以使用相对路径，例如"/admin/login"
  // baseURL: "http://127.0.0.1:5590",
  // 请求超时时间
  timeout: 0,
  // 每次请求携带cookie
  withCredentials: true,
};
//请求拦截，后期可能会用到，先注册在此
instance.interceptors.request.use(
    function(config) {
    
        Vue.prototype.$loading.show();
      // let proxy_url = 'http://121.37.173.82:82'; //打包上线时请改用此处
      let proxy_url = process.env.VUE_APP_BASE_URL; //打包上线时请改用此处
      // let proxy_url = '/proxy'//打包上线时此处请注释掉
  
      config.url = proxy_url + config.url;
      // 在发送请求之前做些什么，例如加入token
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
// 2. 响应拦截
instance.interceptors.response.use(
  (res) => {
    Vue.prototype.$loading.hide();
    if (res.status == 200) {
      if (res.data.code == 200) {
        return res.data;
      } else {
        //若code 非 200
        Vue.prototype.$Message.error(res.data.msg || "未知错误");
        return res.data || res;
      }
    } else {
      return Vue.prototype.$Message.error("请求超时");
    }
  },
  // 对于错误响应的处理
  (err) => {
    // Vue.prototype.$Notice.error({ title: "请求失败", desc: err });
    Vue.prototype.$loading.hide();
    return err;
  }
);

export default instance;