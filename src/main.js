// 导入vue实例
import Vue from 'vue'
import Hello from './components/Hello'
import About from './components/About'
import DeclarationManager from './modules/DeclarationManager'
import InfoManager from './modules/InfoManager'
import SingleDeclarationManager from './modules/SingleDeclarationManager'
import OrderManager from './modules/OrderManager'
import Home from './modules/Home'


// 导入 App 组件
import App from './App'
// 导入 vue router
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 告诉vue使用vue-router路由组件
Vue.use(VueRouter)
Vue.use(ElementUI)
// 定义路由表
const routes = [
  // 将根URL加入到路由表并声明对应Hello组件.
  { path: '/',
    component: Hello,
    children: [
      { path: '/Home', component: Home, name: '首页' },
      { path: '/OrderManager', component: OrderManager, name: '订单管理' },
      { path: '/DeclarationManager', component: DeclarationManager, name: '增值税申报管理' },
      { path: '/SingleDeclarationManager', component: SingleDeclarationManager, name: '个税申报管理' },
      { path: '/InfoManager', component: InfoManager, name: '企业信息管理' }] },
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
