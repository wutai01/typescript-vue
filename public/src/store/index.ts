import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import alipay from './modules/alipay'
import report from './modules/report'
import rules from './modules/rules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app, alipay, report, rules
  }
})

export default store
