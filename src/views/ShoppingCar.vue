<template>
  <div class="shopping-car">
    <div class="site-header">
      <div class="container">
        <div class="header-logo">
          <a href="#">
            <img src="../assets/logo.jpg" alt="logo" />
          </a>
        </div>
        <div class="header-title">
          <span class="mycart">我的购物车</span>
          <span class="alert-info">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
        </div>
        <div class="topbar-info"></div>
      </div>
    </div>
    <div class="shopcart">
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <td>
                <div class="all_checked">
                  <input type="checkbox" @click="checkAll" v-model="all_checked" />&nbsp;&nbsp;全选
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
            <tr v-for="(item,index) in list" :key="item.id">
              <td class="all-checked">
                <input type="checkbox" v-model="checkeds[index]" />
              </td>
              <td class="goods-imgs">
                <a href="#">
                  <img src alt="goods" />
                </a>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <div class="more-goods">
                  <div @click=" item.count > 1 ? item.count-- : item.count =1">-</div>
                  <input
                    type="text"
                    size="4"
                    v-model="item.count"
                    @blur="numTypeCheck(item.count, item.id)"
                  />
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
                <a href="#" @click.prevent="del(item.id)" class="delete" title="删除">
                  <span>×</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="compute-footer" :class="{computeFooterFixed: isFixed}" ref="computeFooter">
          <div class="section-left">
            <a href="#">继续购物</a>
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
            <a href="#" class="btn-primary">结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-car",
  data() {
    return {
      id: "",
      name: "",
      list: [
        { id: 1, name: "php书籍", price: 34, count: 1 },
        { id: 2, name: "javaScript书籍", price: 56, count: 1 },
        { id: 3, name: "C语言书籍", price: 33, count: 1 },
        { id: 4, name: "MySql书籍", price: 34, count: 1 },
        { id: 5, name: "jQuery书籍", price: 22, count: 1 },
        { id: 6, name: "Vue书籍", price: 66, count: 1 }
      ],
      checkeds: [],
      all_checked: false,
      reg: /^[0-9]{1,6}$/,
      scrollTop: null,
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面移除事件监听，否则报错
  },
  computed: {
    sum() {
      let sum = 0;
      for (let i in this.list) {
        if (this.checkeds[i])
          //如果checkeds[i]的结果为true，则进行累加
          sum += parseInt(this.list[i].price) * parseInt(this.list[i].count);
      }
      return sum;
    },

    count() {
      let count = 0;
      for (let i in this.list) {
        if (this.checkeds[i]) {
          count += parseInt(this.list[i].count);
        }
      }
      return count;
    },

    subtotal() {
      let subtotal = 0;
      for (let i in this.list) {
        if (this.reg.test(this.list[i].count)) {
          subtotal += parseInt(this.list[i].count);
        }
      }
      return subtotal;
    }
  },
  methods: {
    checkAll() {
      if (this.all_checked) {
        for (let i = 0; i < this.list.length; i++) {
          //此处必须用$set设置，才能触发视图更新！
          this.$set(this.checkeds, i, false);
        }
      } else {
        for (let i = 0; i < this.list.length; i++) {
          this.$set(this.checkeds, i, true);
        }
      }
    },
    del(id) {
      let index = this.list.findIndex(item => {
        if (item.id === id) {
          return true;
        }
      });
      this.list.splice(index, 1);
    },
    numTypeCheck(num, id) {
      // NaN 是 "number" 类型
      // NaN 不与自身相等
      if (!this.reg.test(num) || num === "") {
        let index = this.list.findIndex(item => {
          return item.id === id;
        });
        this.$set(this.list[index], "count", 1);
        alert("输入的数量只能是数字！");
      }
    },
    handleScroll() {
      let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop,
        offsetTop = this.$refs.computeFooter.offsetTop,
        shopCartHeight = 228 + 85 * this.list.length
      console.log(offsetTop)
      console.log(shopCartHeight)

      if (offsetTop > 680) {
        this.isFixed = true
      } else {
        this.isFixed = false
        window.removeEventListener("scroll", this.handleScroll)

      }
    }
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
body {
  height: 2000px;
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
.shopcart {
  width: 100%;
  height: 700px;
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
      height: 85px;
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
</style>

