<template>
  <div class="nav">
    <div class="nav-right">
      <img class="nav-icon" src="../assets/logo.jpg" alt="icon" />
    </div>

    <div class="nav-center">
      <ul class="nav-list">
        <li class="nav-item">
          <a class="link">
            <span class="text">小米手机</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in goods" :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goodsName}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">Redmi红米</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in lists" :key="i.goods_id">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.thumb_url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goods_name}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">电视</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in goods" :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goodsName}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">笔记本</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in goods" :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goodsName}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">家电</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in goods" :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goodsName}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">路由器</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in goods" :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goodsName}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">智能硬件</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item" v-for="i in goods" :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url" alt="小米cc" />
                  </a>
                </div>
                <div class="title">
                  <a href="#">{{i.goodsName}}</a>
                </div>
                <p class="price">{{i.price}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">服务</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="link">
            <span class="text">社区</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    //数据中心
    return {
      //必须返回一个对象
      //默认情况下，设置为空数据
      lists: []
    };
  },
  //生命周期：代表当组件进入到某一个阶段时会执行的函数
  created() {
    //初始化，一般在这个阶段获取服务器的数据

    let that = this;
    this.$http
      .get("/goods/recommend")
      .then(function(res) {
        that.lists = res.data.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<style>
li,
a {
  text-decoration: none;
  list-style: none;
}
.nav {
  width: 100%;
  height: 100px;
  position: relative;
  /* padding-left:146.6px; */
}
.nav-right {
  float: left;
  width: 62px;
  margin: 22px 146.6px;
}
.nav-icon {
  /* position: relative; */
  display: block;
  width: 55px;
  height: 55px;
  overflow: hidden;
  _zoom: 1;
}
.nav-center {
  float: left;
  width: 850px;
  height: 100px;
}
.nav-list {
  width: 820px;
  height: 100px;
  float: left;
  box-sizing: border-box;
  padding: 0 0 0 30px;
  front-size: 16px;
}
.nav-item {
  width: 86px;
  height: 100%;
  float: left;
  list-style: none;
  cursor: pointer;
  /* text-align: center; */
  margin: 0px auto;
}
.link {
  display: block;
  padding: 19px 0px 40px;
  color: #333;
  text-decoration: none;
}
.item-children {
  display: none;
  position: absolute;
  height: 300px;
  width: 100%;
  top: 100px;
  left: 0;
  padding: 12px 0 0 0px;
  box-sizing: border-box;
  border-top: 1px solid #5e5e5e;
  /* padding: 10px 0 0 50px; */
}
.children-list {
  width: 1000px;
  height: 200px;
  margin: 0px auto;
}
.children-item {
  width: 160px;
  height: 160px;
  float: left;
  box-sizing: border-box;
}
.thumb {
  width: 160px;
  height: 100px;
  border-right: 1px solid darkgray;
}
.nav-item img {
  width: 110px;
  height: 100px;
}
.title,
.children-item p {
  margin: 5px auto;
}
.link:hover {
  color: orangered;
}
.nav-item:hover .item-children {
  display: block;
}
</style>
