<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  }
}
</script>

<style lang="scss">
#app {
}
</style>
