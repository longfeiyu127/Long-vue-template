import Vue from 'vue'
// import 'Components'// 全局组件注册
GLOBAL.$center = new Vue()  //观察者
import 'Directives' // 指令
import 'filters' // 过滤器

// 引入插件
import router from 'Plugins/router'
import inject from 'Plugins/inject'
import store from 'Plugins/store'
import { sync } from 'vuex-router-sync'
// 引入组件库及其组件库样式
import VueOnsen from 'vue-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
// 引入vux全局组件
import { ConfigPlugin, AlertPlugin, ToastPlugin, LoadingPlugin } from 'vux'
// 引入自用工具
import { ScrollPlugin } from './utils/ScrollPlugin'
// 引入根组件
import App from './App'

Vue.use(inject)
Vue.use(ScrollPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {position: 'bottom'})
Vue.use(VueOnsen)

// render
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})