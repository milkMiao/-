import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Ant from 'ant-design-vue'

import routes from './routes'
import startQiankun from './micro'

import "./assets/styles/locale.antd.css"

Vue.use(VueRouter);
Vue.use(Ant)
Vue.config.productionTip = false

startQiankun();

/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
