<template>
  <div class="carousel">
    <div class="cmain"
         ref="main">
      <!--图片盒子-->
      <div class="cbanner">
        <a href="javascript:"
           v-for=" (item, index) in images"
           :key="index">
          <!--设置div背景图片实现插入图片效果，而不是img标签，提高浏览器性能-->
          <div class="cbanner-slide"
               :style="{ backgroundImage: `url( ${item} )`}"
               @mouseover="mouseOver()"
               @mouseout="mouseOut(index)"
               ref="slide_img"></div>
        </a>
      </div>
      <!--切换按钮-->
      <a href="javascript:void(0)"
         class="button prev"
         ref="prev"
         @click="toPrev"></a>
      <a href="javascript:void(0)"
         class="button next"
         ref="next"
         @click="toNext"></a>
      <div class="dots">
        <span v-for=" (item, index) in dots"
              :key="index"
              @click="dotsChecked(index)"
              ref="dots"
              :class="index === 0 ? { dots_active } : '' "></span>
      </div>
    </div>
    <div class="banner">
      <div class="site-category">
        <ul>
          <li class="category-item"
              v-for="i in category"
              :key="i.category_id"
              @mouseover="httpRequest(i.category_id)">
            <a>
              {{ i.category_name }}
              <span>></span>
            </a>
            <div class="nav-children">
              <div class="item"
                   v-for="item in lists"
                   :key="item.goods_id">
                <router-link :to="'/detailleaf?goods_id=' + item.goods_id">
                  <img :src="item.images_url"
                       alt />
                  <span class="brand">{{ item.goods_name }}</span>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      index: 0,
      timer: null,
      images: [
        "https://i1.mifile.cn/a4/xmad_1562317906034_yYDfN.jpg",
        "https://i1.mifile.cn/a4/xmad_15625789613185_yOkET.jpg",
        "https://i1.mifile.cn/a4/xmad_15623260229891_iSOkA.jpg"
      ],
      dots: [0, 1, 2],
      dots_active: true,
      lists: [],
      slide_active: false,
      category: []
    };
  },
  created() {
    this.mouseOut(this.index)
    let that = this

    this.$http
      .get("/goods/categorylist")
      .then(function (res) {
        that.category = res.data.data
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    changeImg(index) {
      for (let i = 0; i < this.images.length; i++) {
        this.$refs.slide_img[i].className = "cbanner-slide"
        this.$refs.dots[i].className = " "
      }

      this.$refs.slide_img[index].className = "cbanner-slide slide_active";
      this.$refs.dots[index].className = "dots_active";
    },
    mouseOver() {
      if (this.timer) clearInterval(this.timer);
    },
    mouseOut(index) {
      let that = this;
      this.timer = setInterval(function () {
        index++;
        if (index >= that.images.length) {
          index = 0;
        }
        that.index = index;
        that.changeImg(index);
      }, 2000);
    },
    toPrev() {
      this.index--;
      if (this.index < 0) this.index = this.images.length - 1;
      this.changeImg(this.index);
    },
    toNext() {
      this.index++;
      if (this.index >= this.images.length) this.index = 0;
      this.changeImg(this.index);
    },
    dotsChecked(index) {
      for (let i = 0; i < this.images.length; i++) {
        this.$refs.dots[i].className = " "
      }
      this.changeImg(index)
    },
    httpRequest(id) {
      let that = this
      this.$http
        .get("/goods/category?category_id=" + id)
        .then(function (res) {
          that.lists = res.data.data
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.carousel {
  position: relative;
}
.cmain {
  width: 1226px;
  height: 488px;
  margin: 30px auto;
  overflow: hidden;
  position: relative;
}
.cbanner {
  width: 1200px;
  height: 488px;
  position: relative;
}
.cbanner-slide {
  width: 1226px;
  height: 488px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  position: absolute;
  display: none;
}
.slide_active {
  display: block;
}
.button {
  width: 40px;
  height: 80px;
  position: absolute;
  left: 244px;
  top: 50%;
  margin-top: -40px;
  background: url("../assets/left_button.png") no-repeat center center;
  &:hover {
    background-color: #dcdcdc;
    opacity: 0.8;
  }
}
.next {
  left: auto;
  right: 0;
  transform: rotate(180deg);
}
.dots {
  position: absolute;
  right: 20px;
  bottom: 10px;
  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(7, 17, 27, 0.4);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.8) inset;
    margin-left: 10px;
    cursor: pointer;
  }
}
.dots_active {
  box-shadow: 0 0 4px rgba(7, 17, 27, 0.4) inset !important;
  background-color: #ffffff !important;
}

.banner {
  height: 488px;
  margin: 0 auto;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 147px;
}
.site-category {
  width: 234px;
  height: 100%;
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
  position: absolute;
  top: -20px;
  left: 234px;
  padding: 18px 0;
  box-sizing: border-box;
  display: none;
  background-color: #fff;
  box-shadow: 6px 0 10px #ccc;
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
