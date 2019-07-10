<template>
  <div class="carousel">
    <Navbar></Navbar>
    <Navlist></Navlist>
    <div class="container">
      <div class="main"
           ref="main">
        <!--图片盒子-->
        <div class="banner">
          <a href="javascript:"
             v-for=" (item, index) in images"
             :key="index">
            <!--设置div背景图片实现插入图片效果，而不是img标签，提高浏览器性能-->
            <div class="banner-slide"
                 :style="{ backgroundImage: `url(${item})`}"
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
      <div class="right">
        <h3>{{ goods_name }}</h3>
        <p>
          <font color="#ff4a00">「购Redmi Note 7 Pro 赠活塞耳机」 </font>
          索尼4800万超清拍照 / 6GB+128GB大存储 / 骁龙675处理器 / <br>大电量 / 18个月超长质保 / 6.3"水滴屏 / P2i整机防泼溅处理 / 标配18W充电器 / 德国莱茵 TÜV 认证<br>护眼屏
        </p>
        <p>
          <font color="#ff4a00">小米自营</font>
        </p>
        <p><strong>
            <font color="#ff4a00">{{ goods_price }}元</font>
          </strong></p>
        <hr class="hrhr" />
        <div class="present">赠品</div><span class="present1">赠小米活塞耳机清新版</span>
        <hr class="hrhr1" />
        <p></p>
        <div class="card">
          <font color="#333"> 四川&nbsp;&nbsp;&nbsp;&nbsp;成都市&nbsp;&nbsp;&nbsp;&nbsp;锦江区
            &nbsp;&nbsp;&nbsp;&nbsp;成龙路街道 &nbsp;&nbsp;&nbsp;&nbsp;<font color="#ff4a00">修改</font>
            <br />
            <font color="#ff4a00">有现货</font>
          </font>
        </div>
        <div class="choosecolor">
          <span>选择颜色</span>
          <p></p>
          <div class="aa">
            <font color="#FF6700">梦幻蓝</font>
          </div>
          <div class="bb">
            <font color="#333">亮黑色</font>
          </div>
          <p></p>
          <div class="cc">
            <font color="#333">暮光金</font>
          </div>
        </div>
        <div class="choosecapacity">
          <span>选择容量</span>
          <p></p>
          <div class="aa">
            <font color="#FF6700">125GB</font>
          </div>
        </div>
        <div class="buy">
          <div class="dd">加入购物车</div>
          <div class="ee">喜欢</div>
        </div>
      </div>
    </div>
    <Footerfix></Footerfix>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Navlist from '../components/Navlist'
import Footerfix from '../components/Footer'
export default {
  name: "carousel",
  components: {
    Navbar,
    Navlist,
    Footerfix
  },
  data() {
    return {
      index: 0,
      timer: null,
      images: [],
      dots: [0, 1, 2],
      dots_active: true,
      goods_price: 2599,
      goods_name: ''
    };
  },
  created() {
    this.mouseOut(this.index);
    let goodsId = this.$route.query.goods_id
    let that = this
    this.$http.get('/goods/one?goods_id=' + goodsId)
      .then(function (res) {
        console.log(res.data.data.goods_name)
        console.log(res.data.data)
        that.images = res.data.data
        that.goods_name = res.data.data.goods_name
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    changeImg(index) {
      for (let i = 0; i < this.images.length; i++) {
        this.$refs.slide_img[i].style.display = "none";
        this.$refs.dots[i].className = " ";
      }

      this.$refs.slide_img[index].style.display = "block";
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
        this.$refs.dots[i].className = " ";
      }
      this.changeImg(index);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.foot {
  margin-top: 200px;
}
.container {
  width: 1226px;
  height: 800px;
  margin: 0 auto;
}
.main {
  width: 560px;
  height: 560px;
  margin: 30px auto;
  overflow: hidden;
  position: relative;
  margin-left: 30px;
  float: left;
  display: inline;
}
.banner {
  width: 560px;
  height: 560px;
  position: relative;
}
.banner-slide {
  width: 560px;
  height: 560px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 90% 90%;
  position: absolute;
}
.button {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -40px;
  background: url("../assets/left_button.png") no-repeat center center;
  background-size: 100% 100%;
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
.right {
  width: 605px;
  height: 900px;
  display: inline;
  position: relative;
  top: 100px;
  text-align: left;
}

.right p {
  position: relative;
  font-size: 14px;
  color: #b0b0b0;
  margin: 0;
  padding: 0;
  padding-top: 8px;
}
.hrhr {
  opacity: 0.5;
  color: #e0e0e0;
  width: 500px;
  margin-top: 20px;
}
.hrhr1 {
  opacity: 0.5;
  color: #e0e0e0;
  width: 500px;
  margin-top: 30px;
}
.present {
  width: 80px;
  font-size: 12px;
  float: left;
  position: relative;
  top: 105px;
  color: white;
  padding: 2px 0;
  text-align: center;
  background: #ff6700;
}
.present1 {
  float: left;
  position: relative;
  top: 106px;
  font-size: 12px;
  color: black;
  margin-left: 10px;
}
.card {
  width: 470px;
  height: 70px;
  border: 1px solid #e0e0e0;
  float: left;
  padding-left: 25px;
  font-size: 12px;
  position: relative;
  top: 130px;
  padding-top: 15px;
  background-color: #fafafa;
}
.choosecolor {
  width: 600px;
  height: 150px;
  position: relative;
  top: 150px;
  float: left;
  left: 0px;
  display: block;
}
.aa {
  border: 1px solid #ff6700;
  width: 240px;
  height: 35px;
  text-align: center;
  padding-top: 10px;
  float: left;
  display: inline;
  font-size: 14px;
}
.bb {
  border: 1px solid #b0b0b0;
  width: 240px;
  height: 35px;
  text-align: center;
  padding-top: 10px;
  float: left;
  display: inline;
  margin-left: 10px;
  font-size: 14px;
}
.cc {
  border: 1px solid #b0b0b0;
  width: 240px;
  height: 35px;
  text-align: center;
  padding-top: 10px;
  float: left;
  display: inline;
  margin-top: 10px;
  font-size: 14px;
}
.choosecapacity {
  width: 600px;
  height: 150px;
  position: relative;
  top: 150px;
  float: left;
  left: 0px;
  display: block;
}
.buy {
  width: 600px;
  height: 150px;
  position: relative;
  top: 100px;
  float: left;
  left: 0px;
  display: block;
}
.dd {
  background-color: #ff6700;
  width: 240px;
  height: 35px;
  text-align: center;
  color: white;
  padding-top: 10px;
  float: left;
  display: inline;
  font-size: 14px;
}
.ee {
  background-color: #b0b0b0;
  width: 240px;
  height: 35px;
  text-align: center;
  color: white;
  padding-top: 10px;
  float: left;
  display: inline;
  font-size: 14px;
  margin-left: 10px;
}
</style>
