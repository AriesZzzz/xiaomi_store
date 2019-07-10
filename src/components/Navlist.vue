<template>
  <div class="nav">
    <div class="nav-right">
      <img class="nav-icon"
           src="../../public/icon.png"
           alt="icon" />
    </div>

    <div class="nav-center">
      <ul class="nav-list">
        <li class="nav-item">
          <a class="link">
            <span class="text">小米手机</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
            <span class="text">电视</span>
          </a>
          <div class="item-children">
            <ul class="children-list">
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
              <li class="children-item"
                  v-for="i in goods"
                  :key="i.goodsId">
                <div class="thumb">
                  <a href="#">
                    <img :src="i.url"
                         alt="小米cc" />
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
    <div class="nav-search">
      <form class="search-form"
            action="#"
            method="get">
        <input type="search"
               class="search-text box-color"
               autocomplete="off" />
        <div class="icon-submit">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import goods from "../data/goods.js";
export default {
  name: "navlist",
  data() {
    //数据中心
    return {
      //必须返回一个对象
      //默认情况下，设置为空数据
      goods: []
    };
  },
  //生命周期：代表当组件进入到某一个阶段时会执行的函数
  created() {
    //初始化，一般在这个阶段获取服务器的数据

    //模拟获取数据
    this.goods = goods;
  },
  methods: {}
};
</script>

<style scoped>
li,
a {
  text-decoration: none;
  list-style: none;
}
.nav {
  width: 100%;
  height: 100px;
  position: relative;
  background-color: white;
  margin-bottom: 34px;
}
.nav-right {
  float: left;
  width: 62px;
  padding-left: 138px;
  padding-top: 16px;
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
  font-size: 16px;
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
  line-height: 52px;
}
.search-form {
  width: 271px;
  height: 50px;
  float: left;
  top: 20px;
  position: relative;
}
.search-text {
  width: 218px;
  height: 50px;
  outline: none;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  float: left;
  box-sizing: border-box;
  padding-left: 15px;
}
.search-icon {
  width: 200px;
  /* height: 200px; */
  /* right: 0; */
  outline: none;
  padding: 0;
  background-color: rgba(255, 255, 255, 0);
  /* position: relative; */
  z-index: 10;
}
.icon-submit {
  width: 50px;
  height: 50px;
  float: left;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  box-sizing: border-box;
  padding: 10px;
}
.icon-submit:hover {
  background-color: #ff6700;
  color: #fff;
}
.icon-submit i {
  font-size: 28px;
}
.box-color:hover {
  border: 1px solid darkgray;
}

.box-color:focus {
  border: 1px solid orangered;
}
.item-children {
  display: none;
  position: absolute;
  height: 230px;
  width: 100%;
  top: 100px;
  left: 0;
  background-color: white;
  box-sizing: border-box;
  border-top: 1px solid #e0e0e0;
  z-index: 12;
}
.children-list {
  width: 1224px;
  height: 200px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 auto;
  padding-inline-start: 0;
}
.children-list li:first-child .thumb {
  border-left: 0;
}
.children-item {
  width: 204px;
  height: 201px;
  padding: 35px 0 0 0;
  float: left;
  margin: 0 auto;
  box-sizing: border-box;
}
.thumb {
  width: 204px;
  height: 115px;
  margin: 0 auto;
  border-left: 1px solid #e0e0e0;
  /* border-right: 1px solid darkgray */
}
.nav-item img {
  width: 120px;
  height: 115px;
}
.link:hover {
  color: orangered;
}
.nav-item:hover .item-children {
  display: block;
}
</style>
