import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue")
  }
]

const router = new VueRouter({
  routes
})
export default router
