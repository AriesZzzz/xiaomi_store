<template>
  <div class="goods">
    <div class="goods-head">
      <div class="goods-head-left">
        <img :src="goods.thumb_url"
             alt="">
      </div>
      <div class="goods-head-right">
        <h3>{{ goods.goods_name }}</h3>
        <p>{{ goods.brand}}</p>
        <p>{{ goods.price}}</p>
        <button type="button"
                @click="addCar">添加到购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data() {
    return {
      goods: {}
    }
  },
  created() {
    let goodsId = this.$route.query.id

    // 向服务器获取该商品详细信息
    let that = this
    this.$http.get('/goods/one?goods_id=' + goodsId)
      .then(function (res) {

        that.goods = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    addCar() {

    }
  }
}
</script>

<style scoped>
.goods-head-left {
  float: left;
}
.goods-head-right {
  float: left;
}
</style>
