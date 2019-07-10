<template>
  <div class="shopping-car">
    <div class="site-header">
      <div class="container">
        <div class="header-logo">
          <a href="#">
            <img src="../assets/logo.jpg"
                 alt="logo" />
          </a>
        </div>
        <div class="header-title">
          <span class="mycart">我的购物车</span>
          <span class="alert-info">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
        </div>
        <div class="topbar-info"></div>
        <div class="topbar-right">
          <div class="topbar-user">
            <a href="#">
              <span class="user">AriesZzz</span>
              <span>ˇ</span>
            </a>
            <ul class="user-list">
              <li>
                <a href="#">个人中心</a>
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
                <a href="#">退出登录</a>
              </li>
            </ul>
          </div>
          <div class="topbar-order-form">
            <a href="#">|&nbsp;&nbsp;我的订单</a>
          </div>
        </div>
      </div>
    </div>
    <div class="shopcart">
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <td>
                <div class="all_checked">
                  <input type="checkbox"
                         @click="checkAll"
                         v-model="all_checked" />&nbsp;&nbsp;&nbsp;全选
                </div>
              </td>
              <td></td>
              <td>商品</td>
              <td>单价(￥)</td>
              <td>数量</td>
              <td>小计(￥)</td>
              <td>操作</td>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item,index) in shopcart"
                :key="item.goods_id">
              <td class="all-checked">
                <input type="checkbox"
                       v-model="checkeds[index]" />
              </td>
              <td class="goods-imgs">
                <a href="#">
                  <img :src="item.images_url"
                       alt="goods" />
                </a>
              </td>
              <td>{{ item.goods_name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <div class="more-goods">
                  <div @click=" item.count > 1 ? item.count-- : item.count =1">-</div>
                  <input type="text"
                         size="4"
                         v-model="item.count"
                         @blur="numTypeCheck(item.count, item.goods_id)" />
                  <div @click=" item.count++ ">+</div>
                </div>
              </td>

              <td class="subtotal">
                {{
                /^[0-9]{1,6}$/.test(parseInt(item.count * item.price))
                ? item.count * item.price
                : 0 }}
              </td>
              <td>
                <a href="#"
                   @click.prevent="del(item.goods_id)"
                   class="delete"
                   title="删除">
                  <span>×</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="compute-footer"
             :class="{ computeFooterFixed: isFixed }"
             ref="computeFooter">
          <div class="section-left">
            <a href="/home">继续购物</a>
            <span class="line-before">
              共
              <b>{{ subtotal }}</b>
            </span>
            <span>&nbsp;件商品,</span>
            <span>
              已选择
              <b>{{ count }}</b>
              件
            </span>
          </div>
          <div class="section-right">
            <span class="subtotal">
              合计:
              <b>{{ sum }}</b>
              (元)
            </span>
            <a href="#"
               class="btn-primary">结算</a>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-recommend">
      <div class="container">
        <h2>
          <span>买购物车中商品的人还买了</span>
        </h2>
        <div class="recommend">
          <div class="recommend-list">
            <div class="item"
                 v-for="item in lists"
                 :key="item.goods_id">
              <a href="#">
                <img :src="item.images_url"
                     alt />
                <p>
                  <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
                </p>
              </a>
              <p class="price-text">
                <span>{{ item.price }}(元)</span>
              </p>
              <p>
                <span>{{ item.comments }}人好评</span>
              </p>

              <a href="#">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footerfix></Footerfix>
  </div>
</template>

<script>
import Footerfix from '../components/Footer'
export default {
  name: "shopping-car",
  components: {
    Footerfix
  },
  data() {
    return {
      id: "",
      name: "",
      shopcart: [],
      lists: [],
      checkeds: [],
      all_checked: false,
      reg: /^[0-9]{1,6}$/,
      scrollTop: null,
      isFixed: false // 设置购物车底部是否固定
    };
  },
  created() {
    let that = this;
    this.$http
      .get("/goods/recommend")
      .then(function (res) {
        that.lists = res.data.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    this.$http
      .get("/goods/shopcart")
      .then(function (res) {
        that.shopcart = res.data.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll); // 离开页面移除事件监听，否则报错
  // },
  computed: {
    sum() {
      let sum = 0;
      for (let i in this.shopcart) {
        if (this.checkeds[i])
          //如果checkeds[i]的结果为true，则进行累加
          sum +=
            parseInt(this.shopcart[i].price) * parseInt(this.shopcart[i].count);
      }
      return sum;
    },

    count() {
      let count = 0;
      for (let i in this.shopcart) {
        if (this.checkeds[i]) {
          count += parseInt(this.shopcart[i].count);
        }
      }
      return count;
    },

    subtotal() {
      let subtotal = 0;
      for (let i in this.shopcart) {
        if (this.reg.test(this.shopcart[i].count)) {
          subtotal += parseInt(this.shopcart[i].count);
        }
      }
      return subtotal;
    }
  },
  methods: {
    checkAll() {
      if (this.all_checked) {
        for (let i = 0; i < this.shopcart.length; i++) {
          //此处必须用$set设置，才能触发视图更新！
          this.$set(this.checkeds, i, false);
        }
      } else {
        for (let i = 0; i < this.shopcart.length; i++) {
          this.$set(this.checkeds, i, true);
        }
      }
    },
    del(id) {
      let index = this.shopcart.findIndex(item => {
        if (item.goods_id === id) {
          return true;
        }
      });
      this.checkeds.splice(index, 1);
      this.shopcart.splice(index, 1);
    },
    numTypeCheck(num, id) {
      // NaN 是 "number" 类型
      // NaN 不与自身相等
      if (!this.reg.test(num) || num === "") {
        let index = this.shopcart.findIndex(item => {
          return item.goods_id === id;
        });
        this.$set(this.shopcart[index], "count", 1);
        alert("输入的数量只能是数字！");
      }
    }
    // handleScroll() {
    //   let scrollTop =
    //       window.pageYOffset ||
    //       document.documentElement.scrollTop ||
    //       document.body.scrollTop,
    //     offsetTop = this.$refs.computeFooter.offsetTop,
    //     shopCartHeight = 228 + 85 * this.list.length
    //   console.log(offsetTop)
    //   console.log(shopCartHeight)

    //   if (offsetTop > 680) {
    //     this.isFixed = true
    //   } else {
    //     this.isFixed = false

    //   }
    // }
  }
};
</script>

<style lang="scss">
$primary-color: #ff6700;
$primary-text-color: #757575;
* {
  margin: 0;
  padding: 0;
}

.site-header {
  width: 100%;
  height: 100px;
  border-bottom: 2px solid $primary-color;
  .container {
    width: 1226px;
    height: 74px;
    margin: 0 auto;
    padding-top: 20px;
    box-sizing: border-box;
    div {
      float: left;
    }
  }
}

.header-logo {
  img {
    width: 48px;
    height: 48px;
  }
}
.mycart {
  font-size: 28px;
  font-weight: normal;
  margin-left: 43px;
}
.alert-info {
  color: #757575;
  font-size: 12px;
  margin-left: 20px;
}
.topbar-info {
  float: right;
}
.topbar-right {
  font-size: 12px;
  float: right !important;
  width: 180px;
  line-height: 48px;
}
.topbar-user {
  width: 120px;
  height: 40px;
  position: relative;
  cursor: pointer;
  &:hover {
    color: $primary-color;
    .user-list {
      display: block;
    }
  }
}
.topbar-order-form {
  width: 58px;
  height: 40px;
}
.user-list {
  display: none;
  position: absolute;
  top: 40px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear;
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
.topbar-right {
  a {
    text-decoration: none;
    color: #757575;
  }
}
.shopcart {
  width: 100%;
  padding-top: 38px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  .container {
    width: 1226px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }
}
.table {
  width: 100%;
  background-color: #fff;
  thead {
    tr {
      height: 65px;
    }
  }
  tbody {
    tr {
      height: 110px;
      td {
        border-top: 1px solid #e0e0e0;
      }
    }
  }
  [type="checkbox"] {
    width: 20px;
    height: 20px;
  }
}
.delete {
  text-decoration: none;
  color: #757575;
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 10px;
  margin: 0 auto;
  span {
    font-size: 20px;
  }
}
.more-goods {
  border: 1px solid #cecece;
  overflow: hidden;
  width: 148px;
  margin: 0 auto;
  div,
  input {
    float: left;
  }
  div {
    width: 38px;
    height: 38px;
    font-size: 20px;
    line-height: 38px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #e0e0e0;
    }
  }
  input {
    width: 72px;
    height: 38px;
    border: none;
    font-size: 16px;
    text-align: center;
  }
}
.all-checked {
  width: 110px;
}
td.all-checked {
  padding-right: 43px;
  box-sizing: border-box;
}
.goods-imgs {
  img {
    width: 80px;
    height: 80px;
  }
}
.subtotal {
  color: $primary-color;
}
.compute-footer {
  width: 1225.6px;
  overflow: hidden;
  margin-top: 20px;
  background-color: #fff;
  box-sizing: border-box;
}
.computeFooterFixed {
  width: 1226px;
  position: fixed;
  left: 50%;
  margin-left: -613px;
  bottom: 0;
  z-index: 20;
  background-color: #fafafa;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.1);
}
.section-left {
  width: 300px;
  height: 50px;
  padding-top: 14px;
  float: left;
  box-sizing: border-box;
  color: $primary-text-color;
  margin-left: 18px;
  a {
    text-decoration: none;
    color: $primary-text-color;
    margin-right: 10px;
    &:hover {
      color: $primary-color;
    }
  }
  b {
    color: $primary-color;
    font-size: 14px;
  }
  .line-before {
    &::before {
      content: " | ";
      color: #f5f5f5;
    }
  }
}
.section-right {
  float: right;
  box-sizing: border-box;

  span {
    padding-top: 6px;
    float: left;
  }
  .subtotal {
    b {
      font-size: 30px;
    }
  }
}
.btn-primary {
  display: block;
  width: 200px;
  height: 50px;
  background-color: $primary-color;
  float: left;
  text-decoration: none;
  color: #fff;
  line-height: 54px;
  font-size: 18px;
  margin-left: 48px;
}
.cart-recommend {
  width: 100%;
  height: 800px;
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 60px;
  box-sizing: border-box;
  .container {
    width: 1226px;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;

    h2 {
      color: $primary-text-color;
      width: 1226px;
      height: 50px;
      border-top: 1px solid #e0e0e0;
      font-size: 30px;
      font-weight: 400;
      position: relative;
      span {
        position: absolute;
        top: -20px;
        left: 372px;
        height: 40px;
        width: 482px;
        line-height: 40px;
        text-align: center;
        display: block;
        background-color: #f5f5f5;
      }
    }
  }
}
.item {
  width: 234px;
  height: 300px;
  float: left;
  margin-bottom: 26px;
  background-color: #fff;
  transition: all 0.2s linear;
  padding: 40px 20px 0;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    a:last-child {
      display: block;
      color: $primary-color;
      width: 121px;
      height: 29px;
      border: 1px solid $primary-color;
      margin: 10px auto 0;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      transition: all 0.2s linear;
    }
    .price-text + p {
      display: none;
    }
  }
  > a {
    text-decoration: none;
    &:last-child {
      display: none;
      &:hover {
        background-color: $primary-color;
        color: #fff;
      }
    }
  }
  img {
    width: 140px;
    height: 140px;
  }
  &:nth-child(1),
  &:nth-child(6) {
    ~ div {
      margin-left: 14px;
    }
  }
  &:nth-child(6) {
    margin-left: 0 !important;
  }
  p {
    color: #757575;
    line-height: 30px;
  }
}
.price-text {
  color: $primary-color !important;
}
</style>

