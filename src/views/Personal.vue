<template>
	<div class="personal">
		<Nav></Nav>
		<div class="history-nav">
			<div class="history">
				<!-- <router-link to="/home" style="color: #000000;">首页</router-link>
				<span> > </span>
				<span href="">个人中心</span> -->
				<div  v-for="(item,index) in levelList" :key="item.path" v-if="item.meta.title">
				  <span   v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
				  <router-link   v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
				</div>
			</div>
		</div>
		<div class="person-container">
				<div class="person-nav-pannel">
					<h3 >订单中心</h3>
					<ul>
						<li><a href="">我的订单</a></li>
						<li><a href="">团购订单a</a></li>
						<li><a href="">评价晒单</a></li>
					</ul>
					<h3>个人中心</h3>
					<ul>
						<li><a href="">我的个人中心</a></li>
						<li><a href="">消息通知</a></li>
						<li><a href="">收货地址</a></li>
						<li><a href="">喜欢的商品</a></li>
					</ul>
					<h3>售后服务</h3>
					<ul>
						<li><a href="">服务记录</a></li>
						<li><a href="">申请服务</a></li>
					</ul>
					<h3>账户管理</h3>
					<ul>
						<li><a href="">个人信息</a></li>
						<li><a href="">修改密码</a></li>
					</ul>
				</div>
				<div class="person-info-pannel">
					<div class="info">
						<div class="person-info">
							<div class="personimg">
								<img :src="userPhoto" alt="" >
							</div>
							<div class="person-name">
								<h3 style="color: #000000;" v-model="userName">{{userName}}账号</h3>
								<p v-model="tips">{{tips}}</p>
								<a href="">修改个人信息</a>
							</div>
						</div>
						<div class="person-account">
							<ul class="account-item">
								<li>账户安全:  <span class="level" v-model="safeLevel">{{safeLevel}}</span>
								<li>绑定手机:  <span class="tel" v-model="telephone">{{telephone}}1222</span></li>
								<li>绑定邮箱:  <span class="email" v-model="userEmail">{{userEmail}}</span></li>
							</ul>
						</div>
					</div>
					<div class="info-list">
						
						<div class="pay-order order-type">
							<div class="type-icon"><img src="../../public/pay-order.png" alt=""></div>
							<h3>待支付的订单：<span class="num">0</span></h3>
							<a href="">查看待支付的订单></a>
						</div>
						<div class="receipt-order order-type">
							<div class="type-icon"><img src="../../public/receipt-order.png" alt=""></div>
							<h3>待收货的商品：<span class="num">0</span></h3>
							<a href="">查看待收货的商品></a>
						</div>
						<div class="elvaluation-goods order-type">
							<div class="type-icon"><img src="../../public/elvalution-order.png" alt=""></div>
							<h3>待评价的商品：<span class="num">0</span></h3>
							<a href="">查看待评价的商品></a>
						</div>
						<div class="like-goods order-type">
							<div class="type-icon"><img src="../../public/like-goods.png" alt=""></div>
							<h3>喜欢的商品：<span class="num">0</span></h3>
							<a href="">查看喜欢的商品></a>
						</div>
					</div>
				</div>
				
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '../components/Footer.vue'
	import Nav from '../components/Nav.vue'
	export default {
	  name: 'personal',
	  components:{
		  Footer,Nav
	  },
	  data() {
	    return {
			levelList:[],
			username:'',
			safeLevel:'普通',
			userEmail:'未绑定',
			userPhoto:'https://account.xiaomi.com/static/img/passport/photo.jpg',
			tips:'这个人很懒~',
			
	    }
	  },
	  created() {
	    this.getBreadcrumb()
		this.getPersonal()
	  },
	  watch:{
	    $route(){
	      this.getBreadcrumb()
	    }
	  },
	  methods:{
	    getBreadcrumb(){
	        let matched=this.$route.matched.filter(item=>item.name)//$route.matched 将会是一个包含从上到下的所有对象 (副本)。
	        const first=matched[0]
	        if(first && first.name !=='home'){//$route.name当前路由名称  ；$route.redirectedFrom重定向来源的路由的名字
	          matched=[{ path: '/home', meta: { title: '首页' }}].concat(matched)
	        }
	        this.levelList=matched
	      }
	  }
	}	
</script>

<style scoped>
	a,li{
		text-decoration: none;
		list-style: none;
		color: darkgray;
	}
	h3{
		color: gray;
	}
	.personal{
		width: 100%;
		height: 2000px;
		background-color: #f5f5f5;
		/* position: relative; */
	}
	.history-nav{
		width: 1226px;
		height: 40.8px;
		margin: 0 135px 0 135px;
	}
	.person-nav-pannel h3{
		margin: 0 48px 2px 48px;
		text-align: left;
	}
	.person-nav-pannel ul{
		padding: 0;
	}
	.person-nav-pannel li{
		width: 100px;
		height: 23.8px;
		
		padding: 6px 48px;
		text-align: left;
	}
	.history{
		padding: 9px 0;
		box-sizing: border-box;
		text-align: left;
	}
	.person-container{
		width: 1240px;
		height: 800px;
		margin: auto 135px;
		padding: -1px 0 0 14px;
	}
	.person-nav-pannel{
		width:234px ;
		height: 677px;
		float: left;
		padding: 36px 0;
		background-color: white;
	}
	.person-info-pannel{
		width: 978px;
		height: 677px;
		float: left;
		padding: 36px 0;
		margin-left:20px;
		background-color: white;
	}
	.info{
		width: 878px;
		height: 200px;
		margin: auto 50px;
		/* padding: 24px 0 0 0px; */
		border-bottom: 1px solid darkgray;
		
	}
	.person-info{
		width: 482px;
		height: 200px;
		padding: 24px 0 0 0px;
		position: relative;
		float: left;
	}
	.personimg img{
		width: 120px;
		height: 120px;
		border-radius: 60px;
		margin: 0 auto;
	}
	.history div a{
		color: gray;
	}
	.personimg{
		width: 120px;
		height: 120px;
		border: 4px solid lightgray;
		border-radius: 74px;
		left: 0;
		float: left;
		position: absolute;
	}
	.person-name{
		margin-left: 170px;
		float: left;
		text-align: left;
	}
	.person-name p{
		color: darkgray;
	}
	.person-name a,.level,.order-type>h3>span{
		color: orangered;
		front-size: 8px;
	}
	.person-account{
		float: left;
		padding:24px 0 0 0 ;
	}
	.account-item li{
		width: 200px;
		height: 32.8;
		padding: 6px 16px;
		color: #000000;
		text-align: left;
	}
	
	.info-list{
		position: ;
		width: 882px;
		height: 380px;
		padding: 20px 0 0 0;
		color: #000000;
	}
	.order-type{
		width: 388px;
		height: 80px;
		margin: 0 0 80px 14px;
		padding: 15px 0 0 112px;
		float: left;
		width: 276px;
		height: 65px;
		position: relative;
	}
	.order-type h3{
		margin: 18.72px auto 10px auto ;
	}
	.type-icon img{
		width: 100px;
		height: 100px;
		border-radius: 50px;
		top: 18px;
		left: 57px;
		position: absolute;
	}
	a:hover{
		color: orangered;
	}
	
	.footer{
		width: 100%;
		height: 500px;
		background-color: #000000;
	}
	.footer-container{
		width: ;
	}
	
</style>
