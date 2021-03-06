// 导入vue实例
import Vue from 'vue'
import Index from './modules/Index'
import About from './components/About'
// 导入 App 组件
import App from './App'
// 导入 vue router
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import { nSQL } from "nano-sql";
import 'element-ui/lib/theme-chalk/index.css'

import OrderManager from './modules/Order/OrderManager'
// 告诉vue使用vue-router路由组件
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts
Vue.prototype.$sql=nSQL;
// 定义路由表
const routes = [
  // 将根URL加入到路由表并声明对应Hello组件.
  { path: '/', component: Index, name: '首页' },
  { path: '/order', component: OrderManager, name: '订单管理' },
  { path: '/manager', component: resolve => require(['@/modules/Order/TaxManager'], resolve), name: '增值税申报管理' },
  { path: '/declear', component: resolve => require(['@/modules/Order/PersonalTaxManager'], resolve), name: '个税申报管理' },
  { path: '/user', component: resolve => require(['@/modules/Order/InfomationManager'], resolve), name: '管理员账号管理' }
]

// 创建路由器实例，并且传入`routes`变量作为路由。
// 你还可以传入别的参数，不过在这里尽量简单化就可以了
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 实例化Vue实例
new Vue({
  // 定义Vue绑定的跟元素
  el: '#app',
  // 用<App/>代替根元素
  template: '<App/>',
  // 声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  // 将上面声明的路由器传递到根Vue实例
  router
}).$mount('#app')
