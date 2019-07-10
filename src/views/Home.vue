<template>
  <div class="home">

    <Navbar></Navbar>
    <Navlist></Navlist>
    <Carousel></Carousel>
    <Findmore></Findmore>
    <Footerfix></Footerfix>

  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Findmore from '../components/Findmore'
import Navlist from '../components/Navlist'
import Footerfix from '../components/Footer'
import Navbar from '../components/Navbar'
export default {
  name: 'home',
  components: {
    Carousel,
    Findmore,
    Navlist,
    Footerfix,
    Navbar
  },
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
