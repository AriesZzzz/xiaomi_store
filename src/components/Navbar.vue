<template>
  <div class="nav"
       id="top">
    <div class="container">
      <div class="topbar-left">
        <ul>
          <li>
            <router-link to="/home">小米商城&nbsp;&nbsp;</router-link>

            <span>|</span>
          </li>

          <li>
            <a href="#">MIUI&nbsp;&nbsp;</a>
            <span>|</span>
          </li>

          <li>
            <a href="#">loT&nbsp;&nbsp;</a>

            <span>|</span> </li>

          <li>
            <a href="#">云服务&nbsp;&nbsp;</a>

            <span>|</span> </li>

          <li>
            <a href="#">金融&nbsp;&nbsp;</a>

            <span>|</span> </li>

          <li>
            <a href="#">有品&nbsp;&nbsp;</a>

            <span>|</span> </li>

          <li>
            <a href="#">小爱开发平台&nbsp;&nbsp;</a>
            <span>|</span>
          </li>

          <li>
            <a href="#">企业团购&nbsp;&nbsp;</a>
            <span>|</span>
          </li>

          <li>
            <a href="#">资质证照&nbsp;&nbsp;</a>
            <span>|</span>
          </li>

          <li>
            <a href="#">协议规则&nbsp;&nbsp;</a>
            <span>|</span>
          </li>

          <li>
            <a href="#">下载app&nbsp;&nbsp;</a>
            <span>|</span>
          </li>

          <li>
            <a href="#">Select Region&nbsp;&nbsp;</a>
          </li>
        </ul>
      </div>
      <div class="topbar-right">
        <div class="topbar-user">
          <a href="#"
             v-if="isLogin"
             class="userinfo">
            <span class="user">{{ userid }}&nbsp;∨ </span>
          </a>
          <ul class="user-list">
            <li>
              <router-link to="/personal"
                           class="router-link personal">个人中心</router-link>
            </li>
            <li>
              <a href="#">评价晒单</a>
            </li>
            <li>
              <a href="#">我的喜欢</a>
            </li>
            <li>
              <a href="#">小米账号</a>
            </li>
            <li>
              <a href="/home"
                 @click="exitLogin">退出登录</a>
            </li>
          </ul>
          <div class="isLogin"
               v-if="!isLogin">
            <router-link to="/login"
                         class="router-link">登录</router-link>

            <router-link to="/register"
                         class="router-link">注册</router-link>
          </div>
        </div>
        <div class="topbar-order-form">
          <router-link to="/personal">我的订单</router-link>
        </div>
        <div class="shopcart">
          <a href="/shoppingcar">
            <div class="shopcaricon">
              <i class="27 iconfont icon-27"></i>购物车
              <span>({{ shopcart_count }})</span>
            </div>
          </a>
          <div class="shopcart-list">购物车中还没有商品，赶紧选购吧！</div>

        </div>
      </div>

    </div>

    <div class="float-button">
      <ul>
        <li><a class="nav-link"
             href="#">
            <p class="shouji iconfont icon-shouji"></p>手机app
          </a></li>
        <li>
          <router-link to="/personal"
                       class="nav-link">
            <p class="gerenzhongxin iconfont icon-gerenzhongxin"></p>个人中心
          </router-link>
        </li>
        <li><a class="nav-link"
             href="#">
            <p class="shouhoufuwu iconfont icon-shouhoufuwu"></p>售后服务
          </a></li>
        <li><a class="nav-link"
             href="#">
            <p class="lianxikefu iconfont icon-lianxikefu"></p>联系客服
          </a></li>
        <li>
          <a href="/shoppingcar"
             class="nav-link">

            <p class="27 iconfont icon-27"></p>购物车
          </a>
        </li>
        <li>
          <a href="#top"
             class="back-to-top">回顶部</a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      isLogin: false,
      shopcart_count: 3,
      userid: 'Aries'
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  methods: {
    exitLogin() {
      localStorage.removeItem('token')

      localStorage.removeItem('username')

    }
  },
}
</script>

<style lang="scss" scoped>
@import url("../assets/font_1278717_wbuq0quvb0p/iconfont.css");
$primary-color: #ff6700;
$primary-text-color: #757575;
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.nav {
  width: 100%;
  height: 40px;
  background-color: #333;
  line-height: 40px;
}
.container {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}
.topbar-left {
  float: left;
  ul {
    font-size: 12px;
    li {
      list-style: none;
      float: left;
      margin-right: 6px;
      a {
        text-decoration: none;
        color: #757575;
        &:hover {
          color: #fff;
        }
      }
      span {
        color: #757575;
      }
    }
  }
}

.isLogin {
  height: 40px;
}
// .router-link {
//   margin: 0 10px;
//   float: left;
//   &:hover {
//     color: #fff;
//   }
// }
.topbar-right {
  width: 310px;
  font-size: 12px;
  float: right;
  a {
    color: #757575;
  }
}
.shopcart {
  width: 120px;
  height: 40px;
  float: left;
  background-color: $primary-color;
  color: #fff;
  position: relative;
  &:hover {
    background-color: #fff;
    color: $primary-color;
    .shopcart-list {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 40px;
      left: -195px;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      z-index: 1001;
    }
  }
}
.shopcart-list {
  display: none;
  width: 316px;
  height: 400px;
  overflow-y: auto;
}
.topbar-user {
  width: 120px;
  height: 40px;
  position: relative;
  cursor: pointer;
  float: left;
  &:hover {
    color: #fff;
    .user-list {
      display: block;
    }
  }
}

.topbar-order-form {
  width: 60px;
  height: 40px;
  float: left;
  margin-right: 10px;
  a {
    &:hover {
      color: #fff;
      z-index: 1001;
    }
  }
}
.user-list {
  display: none;
  position: absolute;
  top: 40px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear;
  z-index: 1001;

  li {
    width: 120px;
    height: 30px;
    list-style: none;
    color: $primary-text-color;
    cursor: pointer;
    line-height: 32px;
    &:hover {
      background-color: #f5f5f5;
      color: $primary-color;
    }
  }
}
.float-button {
  position: fixed;
  top: 150px;
  right: 0;
  z-index: 1000;
  ul {
    width: 60px;
    background-color: #fff;
    li {
      width: 100%;
      height: 70px;
      border: 1px solid #eee;
      a {
        color: #aaa;
        font-size: 14px;
        p {
          font-size: 30px;
        }
      }
    }
  }
}
.back-to-top {
  line-height: 72px;
}
</style>
