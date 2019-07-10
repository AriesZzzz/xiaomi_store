<template>
  <div class="login">
    <div class="h-pannel">
      <div class="h-logo">
        <a href="#">
          <img src="../../public/login-logo.png"
               alt="logo" />
        </a>
      </div>
    </div>
    <div class="layout-pannel">
      <a class="hot-bg"
         href="#">
        <div class="layout-pannel layout-bg"></div>
      </a>
      <div class="layout">
        <div class="mainbox">
          <div class="login-title">
            <div class="title">
              <a href="#">
                <h1>登录小米商城</h1>
              </a>
            </div>
            <div class="login-area">
              <form class="login-mainform"
                    action
                    method="get">
                <div class="inputbox">
                  <input class="item_account"
                         autocomplete="off"
                         type="text"
                         name="user"
                         id="username"
                         placeholder="邮箱/手机号码/小米ID"
                         v-model="username" />
                  <input class="item_account"
                         type="password"
                         placeholder="密码"
                         autocomplete="off"
                         id="pwd"
                         name="userpass"
                         v-model="userpass" />
                  <span class="error-info"
                        v-if="seen"
                        style="color: orangered;">{{info}}</span>
                </div>

                <div class="submitbox">
                  <a href="#"
                     class="btnadpt"
                     @click="login">登录</a>
                </div>
                <div class="other_panel">
                  <a class="outer-link"
                     href="#">立即注册</a>
                  <span>|</span>
                  <a class="outer-link"
                     href="#">忘记密码？</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data () {
    return {
      seen: false,
      username: "",
      userpass: "",
      info: ""
    }
  },
  methods: {
    login () {
      var reg = /^\w{3,10}$/;
      var that = this;
      if (!that.username) {
        that.seen = true;
        that.info = "用户名不能为空！"
      } else if (!that.userpass) {


        that.seen = true;
        that.info = "密码不能为空！"


      } else if (!reg.test(this.username)) {
        that.seen = true
        that.info = "用户名只能为数字！"


      } else if (that.username || that.userpass || reg.test(this.username)) {
        that.seen = false

        //登录请求
        that.$http
          .post("/user/login", {
            username: that.username,
            userpass: that.userpass
          })
          .then(function (res) {
            if (res.data.state == 3) {
              //保存登陆态
              localStorage.setItem("token", res.data.token);
              //如果之前访问过需要权限的路由，则登陆之后跳转到原来访问的路由，否则跳转到首页
              that.$router.push({
                path: that.$route.query.redirect || "/home"
              });

              /* that.$router.push('/home') */
            } else {
              that.seen = true;
              that.info = "用户名或密码错误!";
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li,
a {
  text-decoration: none;
  list-style: none;
}
.login {
  width: 100%;
  height: 100%;
}
.h-pannel {
  width: 100%;
  height: 100px;
  padding: 20px 0 0 130px;
  box-sizing: border-box;
}
.h-logo {
  width: 200px;
  height: 98px;
  cursor: pointer;
}
.layout-pannel {
  width: 100%;
  height: 600px;
  top: 0px;
  position: relative;
  margin: 0 auto;
  /* background-color: rosybrown; */
}
.title a h1 {
  color: orangered;
}
.layout-bg {
  background-image: url(../../public/hot-bg.png);
  background-repeat: no-repeat;
  background-position: -555px -10px;
}
.hot-bg {
  width: 100%;
  height: 588px;
  cursor: pointer;
}
.layout {
  width: 410px;
  /* height: 588px; */
  position: absolute;
  left: 922px;
  top: 100px;
  z-index: 4;
  background-color: white;
}
.mainbox {
  width: 390px;
  /* height: 568px; */
  margin: 10px;
}
.login-area {
  width: 390px;
  height: 305px;
  margin-top: 30px;
}
.login-mainform {
  width: 380px;
  height: 256.2px;
  margin: 0 auto;
}
/* .inputbox{
		width: 380px;
		height: ;
	} */
.item_account {
  width: 346px;
  height: 18px;
  padding: 13px 16px 13px 14px;
  margin: 8px auto;
  border: 1px solid #e0e0e0;
}
.error-info {
  color: orangered;
  width: 346px;
  height: 30px;
  margin: 0 auto;
}
.submitbox {
  margin: 8px 0 16px 0;
}
.btnadpt {
  display: block;
  width: 380px;
  height: 50px;
  border: 0;
  background-color: #ff6700;
  cursor: pointer;
  margin: 8px 0 16px 0;
  color: #fff;
  line-height: 48px;
}
.item_account:focus {
  border: 1px solid orangered;
}
.outer-link {
  margin: 20px 4px;
  color: #ccc;
}
.other_panel span {
  color: #ccc;
}
</style>
