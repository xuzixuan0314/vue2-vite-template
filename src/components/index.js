import Vue from "vue"
const componentArr = []
componentArr.forEach((item) => {
  Vue.component(item.name, item)
})
