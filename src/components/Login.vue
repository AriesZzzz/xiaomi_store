<template>
  <div class="login">
    <h1>登录</h1>
    <form>
      <div class="form-group">
				<!-- v-model:设置数据双向绑定 -->
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
        username:'',
				userpass:''
      }
    },
    methods: {
      login() {
				console.log(this.username,this.userpass)
				
				//登录请求
				var that=this
				that.$http.post('/user/login',{
					username:that.username,
					userpass:that.userpass
				})
				.then(function(res){
					console.log(res)
					if(res.data.state == 3){
						//保存登陆态
						 localStorage.setItem('token',res.data.token)
						//如果之前访问过需要权限的路由，则登陆之后跳转到原来访问的路由，否则跳转到首页
						that.$router.push({
							path:that.$route.query.redirect ||'/home'
						})
						
						/* that.$router.push('/home') */
					}else{
						alert(res.data.msg);//弹框
					}
				})
				.catch(function(err){
					console.log(err)
				})
			}
    }
  }
</script>