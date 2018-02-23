/* 首页模块 */
const app = r => require.ensure([], () => r(require('view/app/index.vue')), 'group-app')

const appConfig = r => require.ensure([], () => r(require('view/app/appConfig.vue')), 'group-appConfig')

const alipay = r => require.ensure([], () => r(require('view/app/alipay.vue')), 'group-alipay')

const alipayReportMonth = r => require.ensure([], () => r(require('view/report/alipayReport-month.vue')), 'group-alipayReportMonth')

const alipayReportAll = r => require.ensure([], () => r(require('view/report/alipayReport-all.vue')), 'group-alipayReportAll')

const alipayReportYear = r => require.ensure([], () => r(require('view/report/alipayReport-year.vue')), 'group-alipayReportYear')

const animateTest = r => require.ensure([], () => r(require('view/app/animateTest.vue')), 'animateTest')

let routes = [
  {
    path: '/animateTest',
    name: 'animateTest',
    component: animateTest
  },

  {
    path: '/',
    name: 'app',
    component: app
  },
  {
    path: '/app',
    name: 'app',
    component: app
  },
  {
    path: '/app/alipay',
    name: 'alipay',
    component: alipay
  },
  {
    path: '/app/config',
    name: 'appConfig',
    component: appConfig
  },
  {
    path: '/app/alipay/report/month',
    name: 'alipayReportMonth',
    component: alipayReportMonth
  },
  {
    path: '/app/alipay/report/all',
    name: 'alipayReportAll',
    component: alipayReportAll
  },
  {
    path: '/app/alipay/report/year',
    name: 'alipayReportYear',
    component: alipayReportYear
  }
]

export default routes;
