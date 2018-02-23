import app from './app/index.js';
import rules from './rules/index.js';

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let oRoutes = {
  app, rules
}

let aRoutes = [];
for (let r in oRoutes) {
  aRoutes = aRoutes.concat(oRoutes[r]);
}
export default new Router({
  routes: aRoutes,
  mode: 'hash',
  // base: __dirname,
  linkActiveClass: 'active',
})
// export default aRoutes;