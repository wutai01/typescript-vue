import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routers'
import entry from './App'
import store from './store'
import './style'
// import * as Util from "./utils/index.ts"
import moment from 'moment'


(window as any)['moment'] = moment
import $http from './utils/http'



let vue = new Vue()
Vue.use(VueRouter)
Vue.use((window as any).Shield)
// Vue.prototype.utils = Util;

// 是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
// const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.devtools = false // isDebug_mode;


let t = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(entry)
})
