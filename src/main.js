import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./axios/index";
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import components from "@/untils/components";

Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(components);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
