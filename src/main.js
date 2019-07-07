import Vue from 'vue' // ES6 模块引入
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 统一设置服务器地址
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 装载
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
