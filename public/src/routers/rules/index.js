/* 规则模块 */
const rules = r => require.ensure([], () => r(require('view/rules/center.vue')), 'group-rules')

let routes = [
  {
    path: '/rules',
    name: 'rules',
    component: rules
  }
]

export default routes;
