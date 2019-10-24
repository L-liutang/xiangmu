// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入外部css样式
import './assets/comm.css';
import './assets/normalize.css'
//引入element-ui组件
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
//引入子组件
Vue.use(ElementUI);
//注册子组件
//vue.components("header",header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
