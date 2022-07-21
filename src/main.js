import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

// 引入统一注册的全局组件
import "@/components/index.js"

// 引入UI组件库
import "virtual:windi.css"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

// 引入自己的样式
import "./assets/styles"

import "default-passive-events" //添加事件管理者'passive'，来阻止'touchstart'事件，让页面更加流畅。 解决chrome下的warning问题

Vue.use(ElementUI, { size: "small" })
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
