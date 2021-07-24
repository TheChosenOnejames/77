/*
 * @Description: 
 * @Author: shenxu
 * @Date: 2021-07-24 20:40:48
 * @LastEditors: shenxu
 * @LastEditTime: 2021-07-24 23:32:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 控制台的一条提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
