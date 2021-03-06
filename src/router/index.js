import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//引入组件header.vue引入当前index.js
import vivo from '@/components/exam/vivo'
import login from '@/components/exam/login'
import regester from '@/components/exam/regester'
import productList from '@/components/exam/productList'
import detail from '@/components/exam/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vivo',
      name: 'vivo',
      component: vivo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regester',
      name: 'regester',
      component: regester
    },
    {
      path: '/productList',
      name: 'productList',
      component:productList
    },
    {
      path: '/detail/:fid',
      name: 'detail',
      component:detail
    },
  ]
})
 