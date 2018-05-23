<template>
  <div class="shop">
    <menu-nav></menu-nav>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      seen: false
    }
  },
  methods: {
    reg: function () {
      this.seen = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
