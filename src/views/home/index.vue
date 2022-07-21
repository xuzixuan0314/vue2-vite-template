<template>
  <div class="bg-red-500">
    home
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$store.state.User.userInfo)
  },
  watch: {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="scss"></style>
