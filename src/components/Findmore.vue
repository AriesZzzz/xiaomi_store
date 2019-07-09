<template>
  <div class="find-more">
    <div class="container">
      <div class="goods-title">
        <div class="goods-type">
          <span>手机</span>
        </div>
        <div class="find-others">
          <a href="#">
            <span class="text">查看全部</span>
            <span class="right-pointer">></span>
          </a>
        </div>
      </div>
      <div class="goods-item">
        <div class="item" v-for="item in lists" :key="item.goods_id">
          <span class="flag">新品</span>
          <a href="#">
            <img :src="item.thumb_url" alt />
            <p class="brand">{{ item.brand }} {{ item.goods_name }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "findMore",
  data() {
    return {
      lists: []
    };
  },
  created() {
    let that = this;
    this.$http
      .get("/goods/findmore")
      .then(function(res) {
        that.lists = res.data.data;
      })
      .catch(function() {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.find-more {
  background-color: #f5f5f5;
  height: 700px;
}
.container {
  width: 1246px;
  margin: 0 auto;
}
.goods-title {
  width: 100%;
  height: 58px;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  > div {
    float: left;
  }
}
.goods-type {
  font-size: 22px;
}
.find-others {
  position: absolute;
  right: 10px;
  > a {
    text-decoration: none;
  }
}
.goods-item {
  width: 100%;
}
.item {
  width: 234px;
  height: 300px;
  float: left;
  margin-left: 75px;
  margin-bottom: 26px;
  background-color: #fff;
  transition: all .2s linear;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
  > a {
    text-decoration: none;
  }
}
.flag {
    display: inline-block;
    width: 50px;
    background-color: #83c44e;
    font-size: 16px;
    color: #fff;
}
</style>

