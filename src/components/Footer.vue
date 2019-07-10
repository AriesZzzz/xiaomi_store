<template>
	<div class="foot">
		<div class="footer-container">
			<div class="secondary-nav">
				<ul>
					<li><router-link to="/home" tag='div'><i class="iconfont icon-weixiu"></i><span>预约维修服务</span></router-link></li>
					<li><router-link to="/home" tag='div'><i class="iconfont icon-7tian"></i><span>7天无理由退换货</span></router-link></li>
					<li><router-link to="/home" tag='div'><i class="iconfont icon-quannianbaohuan"></i><span>15天免费换货</span></router-link></li>
					<li><router-link to="/home" tag='div'><i class="iconfont icon-baoyou"></i><span>满88元包邮</span></router-link></li>
					<li><router-link to="/home" tag='div'><i class="iconfont icon-mendian"></i><span>520余家售后网点</span></router-link></li>
				</ul>
			</div>
			<div class="sec-catergory">
				<div class="category">
					<div class="help-center category-item">
						<h4>帮助中心</h4>
						<ul>
							<li><router-link to="/home">账户管理</router-link></li>
							<li><router-link to="/home">购物指南</router-link></li>
							<li><router-link to="/home">订单操作</router-link></li>
						</ul>
					</div>
					<div class="serv-support category-item">
						<h4>服务支持</h4>
						<ul>
							<li><router-link to="/home">售后政策</router-link></li>
							<li><router-link to="/home">自助服务</router-link></li>
							<li><router-link to="/home">资料下载</router-link></li>
						</ul>
					</div>
					<div class="about-me category-item">
						<h4>关于小米</h4>
						<ul>
							<li><router-link to="/home">了解小米</router-link></li>
							<li><router-link to="/home">加入小米</router-link></li>
							<li><router-link to="/home">投资者关系</router-link></li>
						</ul>
					</div>
					<div class="special-serv category-item">
						<h4>特色服务</h4>
						<ul>
							<li><router-link to="/home">F码通道</router-link></li>
							<li><router-link to="/home">礼物码</router-link></li>
							<li><router-link to="/home">防伪查询</router-link></li>
						</ul>
					</div>
					<div class="contact-us category-item">
						<h2>400-100-5678</h2>
						<p>周一至周日 8:00-18:00 <br>（仅收市话费）</p>
						<router-link to="/home" tag="div"><i class="iconfont icon-lianxidaogou"></i>联系客服</router-link>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	 export default {
        name: 'footer',
        data () {

            return {

            }

        }

    }
</script>

<style scoped>
	li,a{
		color: #000000;
		text-decoration: none;
		list-style: none;
	}
	.foot{
		width: 100%;
		height: 272px;
		background-color: white;
	}
	.footer-container{
		width:1226px ;
		height: 100px;
		margin: 0 auto;
	}
	.secondary-nav{
		width:100% ;
		height: 80px;
	}
	.secondary-nav ul{
		width:95% ;
		height: 90px;
		margin: 0 auto;
		padding: 0;
		border-bottom: 1px solid #e0e0e0;
		box-sizing: border-box;
	}
	.secondary-nav li{
		width: 232px;
		height: 35px;
		float: left;
		text-align: center;
		line-height: 35px;
		box-sizing: border-box;
		border-left: 1px solid #e0e0e0;
		margin: 23px auto;
	}
	.secondary-nav li:first-child {
		border-left: 0;
	}
	.secondary-nav li div i{
		font-size: 30px;
		text-align: center;
		position: relative;
		top: 2px;
	}
	.secondary-nav li div span{
		font-size: 20px;
		position: relative;
		top: -2px;
	}
	.secondary-nav li div{
		width: 232px;
		height: 35px;
		box-sizing: border-box;
	}
	.secondary-nav li div:hover ,a:hover{
		color: orangered;
		cursor: pointer;
	}
	.sec-catergory{
		width: 100%;
		height: 192px;
		padding: 30px 0;
		box-sizing: border-box;
		
	}
	.category{
		width: 95%;
		height: 132px;
		margin: 0 auto;
	}
	.category-item{
		width: 232px;
		height: 132px;
		float: left;
		padding: 11px;
		box-sizing: border-box;
		margin: 0 auto;
	}
	.category-item h4{
		margin: 0 auto;
	}
	.contact-us{
		box-sizing: border-box;
		border-left:1px solid lightgray ;
	}
	.category-item ul{
		width: 100%;
		height: 48.64px;
		box-sizing: border-box;
		padding: 0;
	}
	.category-item ul li{
		width: 100%;
		text-align: center;
		margin: 5px auto;
	}
	.contact-us h2{
		color: orangered;
		margin: 0 auto;
	}
	.contact-us p{
		font-size:14px;
		margin:3px auto 8px auto;
	}
	.contact-us div{
		width: 120px;
		height: 30px;
		font-size: 14px;
		color: orangered;
		line-height: 30px;
		margin: 0 auto;
		background-color: white;
		border: 1px solid orangered;
		transition:ease-out 0.6s;
	}
	.contact-us div:hover{
		cursor: pointer;
		background-color: orangered;
		color: white;
		border: 0;
	}
	
	
	
	
</style>
