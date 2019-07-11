<template>

  <body class="all_frame">
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
            <div class="p-text">
              <p class="phone">您的小米ID为&nbsp;&nbsp;</p>
              <p class="phone p_num">{{num}}</p>
            </div>

          </div>
          <!-- <router-link to="/home"></router-link> -->
        </div>

      </div>

    </div>

  </body>

</template>

<script>
export default {
  name: 'regsucess',
  data() {
    return {
      num: ''
    }
  },
  created() {
    this.getRandom()
  },
  methods: {
    getRandom() {
      var rand;
      var array = [];
      // 循环N次生成随机数
      for (var i = 0; ; i++) {
        rand = parseInt(Math.random() * 6);
        if (array.length < 6) {
          array.push(rand);
        } else {
          break;
        }
      }
      this.num = array.join("")

    }
  }

}
</script>
<style>
body {
  height: 100%;
  background: #f9f9f9;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體",
    "儷黑 Pro", sans-serif;
  text-align: center;
}
.btn {
  width: 300px;
  height: 50px;
  background-color: #ff6700;
}
.all_frame {
  width: 100%;
  height: 100%;
  height: auto;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
}

.all {
  height: 558px;
  width: 854px;
  padding-bottom: 80px;
  margin: 50px 0 0 0;
  padding: 0 34px 30px 34px;
  background: #fff;
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
  margin: 0;
}

.main {
  width: 350px;
  height: 400px;
  display: -webkit-box;
  margin: 0 auto;
  padding: 0;
}
.main_content {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.main_text {
  width: 100%;
  height: 200px;
  text-align: center;
  box-sizing: border-box;
  padding: 77px;
}
.p-text {
  width: 155px;
  height: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.btn1 {
  width: 350px;
  height: 42px;
  margin: 0 auto;
  padding: 0 14px;
  line-height: 42px;
  text-align: center;
  background-color: #ff6700;
  margin-top: 15px;
  border: 1px solid rgba(186, 186, 186, 0.3);
  float: left;
  color: #f9f9f9;
}

.phone {
  float: left;
}

p {
  font-weight: 800;
}

.p_num {
  color: red;
}
</style>
