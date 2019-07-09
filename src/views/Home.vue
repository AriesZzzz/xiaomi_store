<template>
  <div class="home">

    <div id="nav">
      <router-link to="/home">首页</router-link> | 
      <router-link to="/home/catogery">分类</router-link> | 
      <router-link to="/personal" v-if="isLogin">个人中心</router-link>
      <router-link to="/login" v-else>登录</router-link>
    </div>
    <Nav></Nav>
    <Carousel></Carousel>
    <Findmore></Findmore>
    <!-- <Asidebar></Asidebar> -->

    <!-- 嵌套子路由 -->
    <router-view />
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Findmore from '../components/Findmore'
import Nav from '../components/Nav'
export default {
  name: 'home',
  components: {
    Carousel,
    Findmore,
    Nav
  },
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

<style scoped>
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
