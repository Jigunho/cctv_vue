import Vue from 'vue'
import VueChartkick from 'vue-chartkick'
import Highcharts from 'highcharts'

Vue.use(VueChartkick, {adapter: Highcharts})

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import chartist from "chartist"
import '@/styles/index.scss' // global css


import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
Vue.use(ElementUI, { locale })
Vue.prototype.$hostname = 'http://165.132.105.41:51908'
Vue.prototype.$http = axios
Vue.prototype.$chartist = chartist
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
