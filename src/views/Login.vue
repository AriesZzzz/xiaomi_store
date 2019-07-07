<template>
  <div class="login">
    <h1>登录</h1>
    <form>
      <div class="form-group">
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" placeholder="请输入密码" v-model="userpass">
      </div>
      <div class="form-group">
        <button class="login-btn" type="button" @click="login">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        userpass: ''
      }
    },
    methods: {
      login() {
        let that = this
        this.$http.post('/user/login', {
          username: this.username,
          userpass: this.userpass
        })
        .then(function (res) {
          if(res.data.state === 3) {

            localStorage.setItem('token', res.data.token)
            // 如果之前访问过需要权限的路由，则登录之后跳转到原来访问的路由，否则跳到首页
            that.$router.push({
              path: that.$route.query.redirect || '/home'
            })
          } else {
            alert(res.data.msg)
          }
        })
        .catch(function (err) {

        })
      }
    }
  }
</script>