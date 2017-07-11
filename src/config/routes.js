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
        path: '/background',
        component: resolve => require(['../pages/css/background'], resolve)
      },
      {
        path: '/cicada',
        component: resolve => require(['../pages/css/cicada'], resolve)
      },
      {
        path: '/shape',
        component: resolve => require(['../pages/css/shape'], resolve)
      },
      {
        path: '/effects',
        component: resolve => require(['../pages/css/effects'], resolve)
      },
      {
        path: '/ue',
        component: resolve => require(['../pages/css/ue'], resolve)
      },
      {
        path: '/layout',
        component: resolve => require(['../pages/css/layout'], resolve)
      },
      {
        path: '*', //  其他页面，强制跳转到登录页面
        redirect: '/background'
      }
    ]
  }
]
