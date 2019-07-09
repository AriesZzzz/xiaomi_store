<template>
  <div class="banner">
    <div class="site-category">
      <ul>
        <li class="category-item">
          <a>
            手机 电话卡
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            电视 盒子
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            笔记本 平板
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            家电 插线板
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            出行 穿戴
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            智能 路由器
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            电源 配件
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            健康 儿童
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            耳机 音箱
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
        <li class="category-item">
          <a>
            生活 箱包
            <span>></span>
          </a>
          <div class="nav-children">
            <div class="item" v-for="item in lists" :key="item.goods_id">
              <a href="#">
                <img :src="item.thumb_url" alt />
                <span class="brand">{{ item.brand }} {{ item.goods_name }}</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>

export default {
  name: "banner",
  data() {
    return {
      lists: []
    };
  },
  created() {
    let that = this;
    this.$http
      .get("/goods/category")
      .then(function(res) {
        that.lists = res.data.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 1226px;
  margin: 0 auto;
  font-size: 14px;
  margin-top: -518px;
}
.site-category {
  width: 234px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 0;
  box-sizing: border-box;

  ul {
    padding-left: 0;
    position: relative;
    li {
      height: 42px;
      list-style: none;
      text-align: left;
      padding-left: 30px;
      line-height: 42px;
      cursor: pointer;

      &:hover {
        background-color: #ff6700;
        .nav-children {
          display: block;
        }
      }

      > a {
        text-decoration: none;
        color: #fff;

        > span {
          position: absolute;
          right: 15px;
        }
      }
    }
  }
}
.nav-children {
  width: 992px;
  height: 488px;
  border: 1px solid #ccc;
  position: absolute;
  top: -34px;
  left: 234px;
  padding: 18px 0;
  box-sizing: border-box;
  display: none;
  .item {
    width: 240px;
    float: left;
    padding: 18px 20px;
    box-sizing: border-box;
    img {
      height: 40px;
    }
    .brand {
      color: #000;
    }
    a {
      display: block;
      text-decoration: none;
    }
  }
}
</style>

