// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import lazy from 'vue-lazyload'
// 引入axios
import axios from 'axios'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(lazy,{
	
})

// 使用插件
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
