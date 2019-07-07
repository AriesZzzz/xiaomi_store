<template>
  <div class="list">
    <h1>热销商品</h1>
    
    <div class="lists">
      <div class="lists-item" v-for="item in lists" :key="item.goods_id">
        <img :src="item.thumb_url" alt="">
        <h3>
          <router-link :to="'/home/goods?id=' + item.goods_id">{{ item.goods_name }}</router-link>
        </h3>
        <p>{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'list',
    data() {
      return { 
        lists: [] 
      }
    },
    created() {
      // 发起请求，获取数据
      let that = this
      // 地址必须为服务器端地址
      this.$http.get('/goods/hot')
        .then(function(res) {
            that.lists = res.data.data
        })
        .catch(function() {
          console.log(err)
        })
    }
  }
</script>

<style>
  .lists {
    width: 800px;
    margin: 0 auto;
  }
  
  .lists-item {
    width: 200px;
    padding: 10px;
    box-sizing: border-box; /* 修改盒子模型为 IE模型 */
    float: left;
    text-align: center;
  }
  .lists-item img {
    width: 100%;
    height: auto;
  }
</style>
