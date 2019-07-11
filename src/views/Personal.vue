<template>
  <div class="personal">
    <Navbar></Navbar>
    <Navlist></Navlist>
    <div class="history-nav">

    </div>
    <div class="person-container">
      <div class="person-nav-pannel">
        <h3>订单中心</h3>
        <ul>
          <li>
            <a href>我的订单</a>
          </li>
          <li>
            <a href>团购订单</a>
          </li>
          <li>
            <a href>评价晒单</a>
          </li>
        </ul>
        <h3>个人中心</h3>
        <ul>
          <li>
            <a href>我的个人中心</a>
          </li>
          <li>
            <a href>消息通知</a>
          </li>
          <li>
            <a href>收货地址</a>
          </li>
          <li>
            <a href>喜欢的商品</a>
          </li>
        </ul>
        <h3>售后服务</h3>
        <ul>
          <li>
            <a href>服务记录</a>
          </li>
          <li>
            <a href>申请服务</a>
          </li>
        </ul>
        <h3>账户管理</h3>
        <ul>
          <li>
            <a href>个人信息</a>
          </li>
          <li>
            <a href>修改密码</a>
          </li>
        </ul>
      </div>
      <div class="person-info-pannel">
        <div class="info">
          <div class="person-info">
            <div class="personimg">
              <img :src="userphoto"
                   alt="">
            </div>
            <div class="person-name">
              <h3 style="color: #000000;">{{username}}</h3>
              <p>{{tips}}</p>
              <a href="">修改个人信息</a>
            </div>
          </div>
          <div class="person-account">
            <ul class="account-item">
              <li>账户安全: <span class="level">{{user_level}}</span>
              </li>
              <li>绑定手机: <span class="tel">{{telephone}}</span>
              </li>
              <li>绑定邮箱: <span class="email">{{useremail}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="info-list">
          <div class="pay-order order-type">
            <div class="type-icon">
              <img src="../../public/pay-order.png"
                   alt />
            </div>
            <h3>
              待支付的订单：
              <span class="num">0</span>
            </h3>
            <a href>查看待支付的订单></a>
          </div>
          <div class="receipt-order order-type">
            <div class="type-icon">
              <img src="../../public/receipt-order.png"
                   alt />
            </div>
            <h3>
              待收货的商品：
              <span class="num">0</span>
            </h3>
            <a href>查看待收货的商品></a>
          </div>
          <div class="elvaluation-goods order-type">
            <div class="type-icon">
              <img src="../../public/elvalution-order.png"
                   alt />
            </div>
            <h3>
              待评价的商品：
              <span class="num">0</span>
            </h3>
            <a href>查看待评价的商品></a>
          </div>
          <div class="like-goods order-type">
            <div class="type-icon">
              <img src="../../public/like-goods.png"
                   alt />
            </div>
            <h3>
              喜欢的商品：
              <span class="num">0</span>
            </h3>
            <a href>查看喜欢的商品></a>
          </div>
        </div>
      </div>
    </div>
    <Footerfix></Footerfix>
  </div>
</template>

<script>
import Footerfix from "../components/Footer.vue"
import Navlist from "../components/Navlist.vue"
import Navbar from '../components/Navbar'

export default {
  name: "personal",
  components: {
    Footerfix,
    Navlist,
    Navbar
  },
  data() {
    return {
      username: 'Aries',
      user_level: '普通',
      useremail: '未绑定',
      userphoto: 'https://account.xiaomi.com/static/img/passport/photo.jpg',
      tips: '这个人很懒~',
      telephone: '未绑定'
    }
  },
  created() {
    var that = this
    var user_id = this.$route.query.id
    that.$http.get('/user/personal?user_id=' + user_id)
      .then(function (res) {
        //修改组件的数据

        that.username = res.data.data.username
        that.user_level = res.data.data.user_level
        that.useremail = res.data.data.useremail
        that.userphoto = res.data.data.userphoto
        that.tips = res.data.data.tips
        that.telephone = res.data.data.telephone
      })
      .catch(function (err) {
        console.log(err)
      })

  },

  methods: {
    getPersonal() {

    }
  }
}
</script>

<style scoped>
a,
li {
  text-decoration: none;
  list-style: none;
  color: darkgray;
}

h3 {
  color: gray;
}
.personal {
  width: 100%;
  background-color: #f5f5f5;
}
.person-nav-pannel h3 {
  margin: 0 48px 2px 48px;
  text-align: left;
}
.person-nav-pannel ul {
  padding: 0;
}
.person-nav-pannel li {
  width: 100px;
  height: 23.8px;

  padding: 6px 48px;
  text-align: left;
}

.person-container {
  width: 1240px;
  height: 800px;
  margin: auto 135px;
  padding: -1px 0 0 14px;
}
.person-nav-pannel {
  width: 234px;
  height: 677px;
  float: left;
  padding: 36px 0;
  background-color: white;
}
.person-info-pannel {
  width: 978px;
  height: 677px;
  float: left;
  padding: 36px 0;
  margin-left: 20px;
  background-color: white;
}
.info {
  width: 878px;
  height: 200px;
  margin: auto 50px;
  /* padding: 24px 0 0 0px; */
  border-bottom: 1px solid darkgray;
}
.person-info {
  width: 482px;
  height: 200px;
  padding: 24px 0 0 0px;
  position: relative;
  float: left;
}
.personimg img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin: 0 auto;
}

.personimg {
  width: 120px;
  height: 120px;
  border: 4px solid lightgray;
  border-radius: 74px;
  left: 0;
  float: left;
  position: absolute;
}
.person-name {
  margin-left: 170px;
  float: left;
  text-align: left;
}
.person-name p {
  color: darkgray;
}
.person-name a,
.level,
.order-type > h3 > span {
  color: orangered;
  font-size: 18px;
}
.person-account {
  float: left;
  padding: 24px 0 0 0;
}
.account-item li {
  width: 200px;
  height: 32.8;
  padding: 6px 16px;
  color: #000000;
  text-align: left;
}

.info-list {
  width: 882px;
  height: 380px;
  padding: 20px 0 0 0;
  color: #000000;
}
.order-type {
  width: 388px;
  height: 80px;
  margin: 0 0 80px 14px;
  padding: 15px 0 0 112px;
  float: left;
  width: 276px;
  height: 65px;
  position: relative;
}
.order-type h3 {
  margin: 18.72px auto 10px auto;
}
.type-icon img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  top: 18px;
  left: 57px;
  position: absolute;
}
a:hover {
  color: orangered;
}

.footer {
  width: 100%;
  height: 500px;
  background-color: #000000;
}
</style>
