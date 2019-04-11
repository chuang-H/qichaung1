<template>
<!-- 在线客服 -->
	<div class="o_box">
		<div class="o_ol">
			<div class="o_nav">
				<router-link to="Mine" class="o_img"><img src="../assets/jiantou.png"></router-link>
				<p>在线客服</p>
			</div>
			<div class="o_search">
				<span><img src="../assets/heijing.jpg"></span>
				有问题就搜一搜
			</div>
		</div>
		<div class="o_question">
			<p class="o_que">问题分类</p>
			<ul>
				<li class="o_list">
					<div class="o_imgg"><img src="../assets/odingdan.png"></div>
					<div>
						<p>订单&amp;活动</p>
						<p>订单、物流、活动等</p>
					</div>
				</li>
				<li class="o_list">
					<div class="o_imgg"><img src="../assets/ohou.png"></div>
					<div>
						<p>售后&amp;合作</p>
						<p>售后、退款、合作等</p>
					</div>
				</li>
				<li class="o_list">
					<div class="o_imgg"><img src="../assets/otuan.png"></div>
					<div>
						<p>券卡&amp;团购</p>
						<p>券卡、充值卡、团购等</p>
					</div>
				</li>
				<li class="o_list">
					<div class="o_imgg"><img src="../assets/ohuiyuan.png"></div>
					<div>
						<p>会员&amp;福利</p>
						<p>会员、福利、积分等</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="o_hq">
			<p class="o_que">热门问题</p>
			<div class="o_quelis">
				<div class="o_quelis2">
					<p style="border:none;">退款多久能到账？<span class="o_po"><img src="../assets/oxiangxia.png"></span></p>
					<p> 亲亲，不同的支付方式到账时间会有所不同哦~~取消订单：账户余额/积分会在取消订单后的1-2天内到账（最快当天可到账）哦，支付宝/微信等网上支付方式会在取消订单后的5个工作日内到账哦~~退货退款：退款会在退货完成后的5个工作日内到账哦~~</p>
				</div>
				<div class="o_quelis2">
					<p>订单支持修改地址？配送时间吗？<span class="o_po"><img src="../assets/oxiangxia.png"></span></p>
					<p> 亲亲，不同的支付方式到账时间会有所不同哦~~取消订单：账户余额/积分会在取消订单后的1-2天内到账（最快当天可到账）哦，支付宝/微信等网上支付方式会在取消订单后的5个工作日内到账哦~~退货退款：退款会在退货完成后的5个工作日内到账哦~~</p>
				</div>
				<div class="o_quelis2">
					<p>补开发票<span class="o_po"><img src="../assets/oxiangxia.png"></span></p>
					<p> 亲亲，不同的支付方式到账时间会有所不同哦~~取消订单：账户余额/积分会在取消订单后的1-2天内到账（最快当天可到账）哦，支付宝/微信等网上支付方式会在取消订单后的5个工作日内到账哦~~退货退款：退款会在退货完成后的5个工作日内到账哦~~</p>
				</div>
				<div class="o_quelis2">
					<p>果实卡怎么使用？<span class="o_po"><img src="../assets/oxiangxia.png"></span></p>
					<p> 亲亲，不同的支付方式到账时间会有所不同哦~~取消订单：账户余额/积分会在取消订单后的1-2天内到账（最快当天可到账）哦，支付宝/微信等网上支付方式会在取消订单后的5个工作日内到账哦~~退货退款：退款会在退货完成后的5个工作日内到账哦~~</p>
				</div>
			</div>
		</div>
		<div class="o_onli">
			<p>电话客服</p>
			<p>09:00-22:00为您服务</p>
		</div>
	</div>
</template>

<script>
export default {
    name: 'ZaiXian',
    data () {
        return {

        }
    }
}
</script>
<style>
@charset "utf-8";
*{
	margin:0;
	padding:0;
}
html{
	font-size: 100px;
}
body{
	font-size: 16px;
	background:#f5f5f5;
}
li{
	list-style:none;
}
a{
	text-decoration:none;
}
/*-------------在线客服------------*/
.o_ol{
	position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #F9F9F9;
    padding-bottom: .1rem;
}
.o_nav{
	height:0.45rem;
	line-height: 0.45rem;
}
.o_img{
	width: 0.4rem;
    height: 0.33rem;
    padding-top: 0.05rem;
    margin-left:0.1rem;
    float: left;
    display: inline-block;
}
.o_img>img{
	width:48%;
	height:60%;
}
.o_nav p{
	width:2.15rem;
	text-align: center;
	color:#75A739;
	margin-left:0.4rem;
	font-size: 0.17rem;
	float:left;
}
.o_search{
	width:3.55rem;
	height:0.3rem;
	line-height:0.3rem;
	margin:0 0.1rem;
	color:#878787;
	background-color: #eee;
	border-radius: 0.04rem 0.04rem 0.04rem 0.04rem;
	font-size:0.14rem;
	text-align: center;
	position: relative;
}
.o_search span{
	width:0.2rem;
	display: inline-block;
	height:0.2rem;
	/*margin-top:0.05rem;*/
	position: absolute;
	left:1.02rem;
	top:0.05rem;
}
.o_search span img{
	width:100%;
	height:100%;	
}
.o_question{
	margin-top:0.85rem;
}
.o_que{
	height:0.45rem;
	line-height: 0.45rem;
	margin-left: 0.1rem;
	font-weight: 300;
	font-size: 0.14rem;
}
.o_question ul{
	width:100%;
	height:1.6rem;
	background-color: #fff;
}
.o_list{
	float:left;
	width:50%;
	height:0.8rem;
	border-bottom: 0.01rem solid #eee;
	border-right: 0.01rem solid #eee;
	box-sizing: border-box;
	padding:0.2rem 0;
}
.o_imgg{
	float:left;
	width:0.32rem;
	height:0.32rem;
	margin-left:0.1rem;
	margin-right:0.1rem;
}
.o_imgg img{
	width:100%;
	height:100%;
}
.o_list div:last-child{
	float:left;
}
.o_list div:last-child p:first-child{
	font-size: .15rem;
    text-align: left;
    color: #3a3a3a;
}
.o_list div:last-child p:last-child{
	font-size: 0.1rem;
    color: #bfbfbf;
}
.o_quelis2{
	width:100%;
	background-color: #fff;
	height:0.5rem;
	line-height: 0.5rem;
}
.o_quelis2 p:nth-of-type(1){
	width:3.55rem;
	margin-left:0.1rem;
	font-size: 0.15rem;
	border-top: 0.01rem solid #eee;
	position:relative;
}
.o_po{
	width:0.15rem;
	height:0.15rem;
	display: inline-block;
	position:absolute;
	right:0.1rem;
	top:45%;
}
.o_po img{
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
}
.o_quelis2 p:nth-of-type(2){
	color: #ff8000;
    background-color: #f5f5f5;
    padding: .2rem .15rem;
    display: none;
}
.o_onli{
	position:fixed;
	left:0;
	right:0;
	bottom:0;
	height:0.54rem;
	background-color: #eee;
	box-sizing: border-box;
    text-shadow: 0.01rem 0.01rem 0.01rem #fff;
}
.o_onli p:first-child{
	color:#3a3a3a;
	font-size: 0.15rem;
	text-align: center;
	margin-top:0.1rem;
	background:url(../assets/ophoneee.png) no-repeat 1.2rem;
	background-size: 10% 100%;
}
.o_onli p:last-child{
	font-size: .1rem;
    color: #878787;
    text-align: center;
}

</style>