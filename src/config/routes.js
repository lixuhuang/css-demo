import App from '../app'
// import Login from '../pages/login/index.vue'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/empty-template',
        component: resolve => require(['../pages/demo/empty-template'], resolve)
      },
      {
        path: '/background',
        component: resolve => require(['../pages/css/background'], resolve)
      },
      {
        path: '/cicada',
        component: resolve => require(['../pages/css/cicada'], resolve)
      },
      {
        path: '*', //  其他页面，强制跳转到登录页面
        redirect: '/empty-template'
      }
    ]
  }
]
