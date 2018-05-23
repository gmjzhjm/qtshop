<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" mode="horizontal" size="medium" background-color="#1e89e0" text-color="#fff" active-text-color="#fff" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">商品分类</el-menu-item>
      <el-menu-item index="4">我的订单</el-menu-item>
      <el-menu-item index="3">会员中心</el-menu-item>
      <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
	width: 100%;
	height: 60px;
	line-height: 60px;
	background-color: #1e89e0;
}
.menu .el-menu{
  width: 1000px;
  height: 60px;
  margin: 0 auto;
}
.menu .el-menu .el-menu-item{
  font-size: 16px;
}
.menu .el-menu .el-menu-item.is-active{
	background-color: #006bc7;
}
</style>
