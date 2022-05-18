import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from '../routerMap/index'

// const routerPush = VueRoute.prototype.push
// VueRoute.prototype.push = function push(location) {//防止重新加载相同的路由时控制台报错
//   return routerPush.call(this, location).catch(error=> error)
// }
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta:{index:1},
    component: resolve => require(['@/views/login'], resolve)
  },
  {
    path:'/cms',
    name:'Cms',
    meta:{index:2},
    component: resolve => require(['@/views/cms'], resolve),
    children:routerMap, 
}
]

const router = new VueRouter({
  routes,
    mode: 'hash',
    linkActiveClass: 'active'
})

export default router
