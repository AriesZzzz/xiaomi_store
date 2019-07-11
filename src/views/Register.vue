<template>

  <div class="all_frame">
    <div class="all">
      <div class="logo">
        <a class="milogo"
           href="javascript:void(0)"></a>
      </div>
      <div class="tit_text">
        <h4 class="mi_text">注册小米账号</h4>
      </div>
      <div class="main">
        <div class="main_content">
          <div class="main_text">
            <label class="country_area">
              <p>国家/地区</p>
              <input class="inptext"
                     type="text"
                     placeholder="中国" /> <br />
              <p>成功注册账号后，国家/地区将不能被修改</p>
              <p>手机号码</p>
              <input class="inptext"
                     type="text"
                     placeholder="+86 请输入手机号码"
                     v-model="telephone"
                     @blur="phone(telephone)">
            </label>
            <div class="err"
                 v-if="sign">
              <em class="err_icon"></em>
              <span>输入正确的手机号</span>
            </div>
            <p>请输入密码</p>
            <input class="inptext"
                   type="password"
                   placeholder="密码长度8~16位，数字 字母 特殊符号中最少两种"
                   v-model="userpass"
                   @blur="pass(userpass)" /><br />
            <div class="err_code"
                 v-if="sign_pass">
              <em class="err_icon"></em>
              <span>密码长度8~16位，只能字母、数字包含其中两种</span>
            </div>
            <p>再次输入密码</p>
            <input class="inptext"
                   type="password"
                   placeholder="确认密码"
                   v-model="again"
                   @blur="passcheck(again)" />
            <div class="err_code"
                 v-if="sign_passck">
              <em class="err_icon"></em>
              <span>密码不一致</span>
            </div>
            <div>
              <button @click="register"
                      class="btn">立即注册</button>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {
      username: '',
      telephone: '',
      userpass: '',
      again: '',
      msg_r: '',//接收数据
      sign: '',
      sign_pass: '',
      sign_passck: '',
      mi_id: ''
    }
  },
  methods: {
    phone() {
      var that = this
      if (/^1[34578]\d{9}$/.test(that.telephone)) {
        that.sign = 0;
        return true
      } else if (that.telephone.length != 11) {
        that.sign = 1;
        return false
      } else {
        that.sign = 1;
        return false
      }
    },
    pass() {
      var that = this
      if (!(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,16}$/.test(that.userpass))) {
        that.sign_pass = 1;
        return false
      } else {
        that.sign_pass = 0;
        return true
      }

    },
    passcheck() {
      var that = this
      if (that.userpass !== that.again) {
        that.msg_r = '两次密码不一致'
        that.sign_passck = 1;
        return false
      } else {
        that.sign_passck = 0;
        return true
      }
    },

    register() {
      let info = JSON.stringify({
        'telephone': this.telephone,
        'userpass': this.userpass,
        'again': this.again
      })
      localStorage.setItem('user_info', info)
      console.log(this.phone() && this.pass() && this.passcheck())
      //如果之前访问过需要权限的路由，则登陆之后跳转到原来访问的路由，否则跳转到首页
      if (this.phone() && this.pass() && this.passcheck()) {

        this.$router.push({
          path: this.$route.query.redirect || "/home"
        });

      }

    }
  },
}
</script>
<style scoped>
* {
  margin: 0;
}
html,
body {
  overflow-y: auto;
  height: 100%;
  background: #f9f9f9;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體",
    "儷黑 Pro", sans-serif;
}
.all_frame {
  width: 100%;
  height: 100%;
  height: auto;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  background: #f9f9f9;
}
.all {
  height: 600px;
  width: 854px;
  padding-bottom: 80px;
  margin: 50px 0 0 0;
  padding: 0 34px 30px 34px;
  background: #fff;
  min-height: 100%;
}
.logo {
  padding-bottom: 40px;
  display: block;
}
.milogo {
  width: 49px;
  height: 48px;
  margin: 0 auto;
  display: block;
  cursor: default;
  background-image: url(https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/milogo.png);
}
.mi_text {
  font-size: 30px;
  font-weight: normal;
  padding-bottom: 0;
  margin-top: 0;
  padding: 0;
}
.main {
  width: 332px;
  height: 400px;
  display: -webkit-box;
  margin: 0 auto;
  padding: 0;
}
.main_text {
  height: 200px;
  text-align: left;
}
.main_content {
  margin: 30px 0 0 0;
}
.err_icon {
  width: 14px;
  height: 14px;
  margin: -1px 5px 0 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RThERTYwMzA1REI3MTFFNDg1NkRDMzZGRjlFNjlEMzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RThERTYwMzE1REI3MTFFNDg1NkRDMzZGRjlFNjlEMzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOERFNjAyRTVEQjcxMUU0ODU2REMzNkZGOUU2OUQzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOERFNjAyRjVEQjcxMUU0ODU2REMzNkZGOUU2OUQzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhTWU2QAAADRSURBVHjaYvyfb8uABESAuAiIfYBYDSp2A4g3AfEkIH4DU8iIpDEYiOcCMT8DdvAJiJOAeC2Iw4SkaTUeTSDAB1UTDNMoCsTzQLajKJtwCIJRASNUrRhIYy7UNGIBSG0BSKMfA+nAB6RRgwyN6kwM5IFfLNB40seQKrDDp/EeEzRyMQH2UIWBrSCNU6CRSywAqZ0AcuoraIpYjRKX2J36H6r2FSxwQMkoDIg/47EJJBeKnuRAYA0QKwFxOxBfAeLfQPwViM8DcQtUbi1MMUCAAQBgriw0RAfMMAAAAABJRU5ErkJggg==);
}
.err .err_code {
  width: 332px;
  height: 20px;
  margin: 0 10px;
  padding: 0 auto;
  text-align: left;
}
.btn {
  width: 100%;
  height: 42px;
  margin: 0 auto;
  padding: 0 14px;
  line-height: 42px;
  text-align: center;
  background-color: #ff6700;
  margin-top: 15px;
  border: none;
  float: left;
  color: #f9f9f9;
}
.inptext {
  border: 1px solid #e8e8e8;
  width: 350px;
  padding: 12px;
  font-size: 15px;
  padding-left: 14px;
  float: left;
  margin: 10px 0 10px 0;
}
p {
  font-weight: 500;
}
</style>
