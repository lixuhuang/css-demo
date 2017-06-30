// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './config/routes'
import VueRouter from 'vue-router'
// import components from './components/' // 加载公共组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
// Object.keys(components).forEach((key) => {
//   var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
//   Vue.component(`v${name}`, components[key])
//   console.log(key + ' ' + 'reg:' + name + components[key])
// })

Vue.use(MuseUI)
Vue.use(VueRouter)
const router = new VueRouter({routes})

window.$router = router
new Vue({ router }).$mount('#app')

