<template>
  <div class="header">
    <div class="welcome">
    	<div class="welcome-text">您好，欢迎来到 印象乾图!</div>
      <div class="log-reg-btn">
        <router-link to="/Log">登录</router-link>
        <router-link to="/Reg">注册</router-link>
      </div>
      <div class="username" v-if="seen">gmjzhjm</div>
    </div>
    <div class="right-menu">
    	<el-dropdown size="small">
        <span class="el-dropdown-link">手机端<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><img src="../assets/logo.png" /></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="small">
        <span class="el-dropdown-link">我的订单<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>待付款</el-dropdown-item>
          <el-dropdown-item>待收货</el-dropdown-item>
          <el-dropdown-item>待评价</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="small">
        <span class="el-dropdown-link">客户服务<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>帮助中心</el-dropdown-item>
          <el-dropdown-item>售后服务</el-dropdown-item>
          <el-dropdown-item>客服中心</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      seen: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 1000px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  background-color: #FFFFFF;
  font-size: 12px;
}
.welcome{
  width: 300px;
  float: left;
  height: 30px;
  text-align: left;
  display: flex;
  flex-direction: row;
}
.log-reg-btn{
  padding-left: 10px;

}
.log-reg-btn a{
  color: red;
}
.el-dropdown{
	margin-left: 10px;
	font-size: 12px;
	color: #999;
	font-family: "微软雅黑";
}
</style>
