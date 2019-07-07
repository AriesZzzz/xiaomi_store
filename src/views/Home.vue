<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home">首页</router-link> | 
      <router-link to="/home/catogery">分类</router-link> | 
      <router-link to="/personal" v-if="isLogin">个人中心</router-link>
      <router-link to="/login" v-else>登录</router-link>
    </div>
    
    <!-- 嵌套子路由 -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if(token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style>
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
