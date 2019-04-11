<template>
    <!-- 结算 -->
	<div class="js_box">
	<!-- 确认订单 -->
		<div class="js_aff">
			<div class="js_back">
				<router-link to="Cart"><img src="../assets/jiantou.png"></router-link>
			</div>
			<p>确认订单</p>
		</div>
		<!-- 收货地址 -->
		<div class="js_address">
			<div class="js_addre">
				<i class="js_icon"></i>
				<div class="js_infor">    
				    <span class="js_name">齐先生</span> <span class="js_tele">18838975615</span>  
				    <span class="js_tag">公司</span>  
				   <p class="js_currentaddr">北京北京市昌平区回龙观街道北京市昌平区回龙观街道物美大卖场(三旗百汇店) </p>
				</div>
			</div>
		</div>
		<div class="js_border"></div>
		<div class="js_pac">
			<div class="js_package">
				<p>包裹1<span class="js_tag" style="background:#ff8000;color:#fff">明日达</span></p>
				<p>3件商品，重5.42kg</p>
			</div>
			<div class="js_send">
				<p>送达时间</p>
				<p>12月14日|周四&nbsp;&nbsp;09:00-18:00</p>
			</div>
			<ul class="js_fruits">
				<li v-for="item in ordeList">
					<div class="js_fruit"><img :src="item.image"></div>
					<div class="js_fr">
						<strong>{{item.title}}</strong>
						<p><span class="js_fru">{{tol1}}个</span><span class="js_fru">2.28kg</span></p>
					</div>
					<p class="js_tagg"><span class="js_fru">×1</span><span style="font-size:0.12rem">￥{{total1}}</span></p>
				</li>
				
			</ul>
		</div>
		<div class="js_sto">
			<p class="js_mon"><span>配送费<b></b></span><span>￥0.00</span></p>
			<p class="js_yh"><span>优惠券<b class="js_tag js_taggg">一张可用</b></span><span>未使用＞</span></p>
			<p class="js_jfdk"><span>积分抵扣</span><b class="js_col" style="font-weight: normal;">￥0.00</b><i style="font-style:normal"></i><span class="js_close"><img src="../assets/js_close1.png"></span></p>
			<p class="js_zg">共<span>{{tol1}}</span>件商品,<span>5.42kg</span>,合计：<span class="js_col">￥{{total}}<i style="font-style:normal;font-size: 0.12rem"></i></span></p>
		</div>
		<div class="js_invoice">
			<p>发票<span>不需要＞</span></p>
			<p>签收单不显示金额<span class="js_close"><img src="../assets/js_close1.png"></span></p>
		</div>
		<div class="js_blank"></div>
		<div class="js_tj">
			<p><span>待支付：</span><span>￥<i style="font-style:normal;font-size: 0.14rem;">{{total}}</i></span></p>
			<p class="js_tjd">提交订单</p>
		</div>
	</div>
</template>

<script>
export default {
    name: 'JieSuan',
    data () {
        return {
           ordeList:[]
        }
    },
    created(){
    	this.ordeList=this.$store.state.ordeList;
    },
    computed:{
    	total(){
    		return this.$store.getters.total;
    	},
    	tol(){ 		
    	    return this.$store.getters.tol;  		
    	},
    	total1(){
    		return this.$store.getters.total1;
    	},
    	tol1(){ 		
    	    return this.$store.getters.tol1;  		
    	},
    	tolNmae(){
    		return this.$store.getters.tolNmae;
    	}
    }
}
</script>
<style scoped>
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
/*--------------结算---------------*/
.js_aff{
	width:100%;
	height:0.46rem;
	line-height: 0.46rem;
	text-align: center;
	background:#fff;
	border-bottom:1px solid #d8d8d8;
	color:#75a739;
	font-size: .17rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position:fixed;
    top:0;
    left:0;
    z-index:2;
}
.js_back{
	width:0.4rem;
	height:0.43rem;
	float:left;
	line-height: 0.56rem;
}
.js_back a{
	width:0.4rem;
	height:0.43rem;
    display: inline-block;
    text-decoration: none;
}
.js_back img{
	width:50%;
	height:50%;
	background-size: 100% 100%;
}
/*-----------------------------deo -------------------*/
.js_address{
	width:100%;
	height:0.84rem;
	background: url(../assets/border.png) repeat-x,#fff;
	margin-top:0.47rem;
}
.js_addre{
	min-height: .4rem;
    padding: .2rem 0;
    display: -webkit-box;
    position: relative;
}
.js_addre i{
	width: 0.15rem;
    height: 0.18rem;
    position: absolute;
    left:0.16rem;
    top:37%;
    display: inline-block;
    background: url(../assets/mapicon.jpg)no-repeat;
    background-size: 100% 100%;
}
.js_infor{
	color: #3a3a3a;
	width: 3.05rem;
	height: 0.43rem;
	margin:0 0 0 0.44rem;
	text-align:left!important;
}
.js_name{
    color: #4b4b4b;
    line-height: .22rem;
    font-size: 0.15rem;
    font-weight:600;
}
.js_tele{
	font-size: 0.15rem;
    color: #4b4b4b;
    line-height: .22rem;

}
.js_tag{
	padding: 0 .05rem;
    font-size: .1rem;
    color: #ff8000;
    border: .01rem solid #ff8000;
    height: .14rem;
    line-height: .16rem;
    border-radius: .04rem;
    position: relative;
    top: -.02rem;
}
.js_infor p{
    color: #878787;
    font-size: .14rem;
    line-height: .16rem;
    margin-top: .05rem;
}
.js_border{
	height:0.02rem;
	width:100%;
	background: url(../assets/border.png) repeat-x,#fff;
	margin-bottom:0.1rem;
}
.js_currentaddr{
	text-align: justify;
}
.js_package{
	padding: .09rem .1rem;
    background: url(../assets/order-bg.png) no-repeat 0 0,#fff;
    webkit-background-size: .69rem .44rem;
    background-size: .69rem .44rem;
    border-bottom: .01rem solid #eee;
}
.js_package p:first-child{
	font-size: 0.18rem;
	float:left;
}
.js_package p:last-child{
	font-size: 0.12rem;
	color:#bfbfbf;
	line-height: 0.25rem;
	margin-left:2.4rem;
}
.js_send{
	border-bottom: 1px solid #eee;
	font-size: 0.15rem;
	padding:0 0.1rem;
	line-height: 0.46rem;
	background:#fff;
	height: 0.46rem;
}
.js_send p:first-child{
	float:left;
}
.js_send p:last-child{
	float:right;
	color:#ff8000;
}
.js_fruits{
	background:#fff;
	margin-bottom: 0.1rem;
}
.js_fruits li{
	padding:0.12rem .1rem;
	height:0.7rem;
	width:3.55rem;
	border-bottom: 1px solid #eee;
}
.js_fruit{
	width:0.7rem;
	height:0.7rem;
	float:left;
}
.js_fruit img{
	width:100%;
	height:100%;
	background-size: 100% 100%;
}
.js_fr{
	margin:0 .15rem 0 0.1rem;
	width:1.78641rem;
	height:0.7rem;
	line-height: 0.35rem;
	float:left;
	text-align:left!important;
}
.js_fr strong{
	overflow: hidden;
    text-overflow: ellipsis;
    font-size: .15rem;
    font-weight: 400;
}
.js_fru{
	color:#bfbfbf;
	font-size: 0.12rem;
	margin-right: 0.05rem;
}
.js_tagg{
	float:left;
	width:0.8136rem;
	line-height: 0.35rem;
}
.js_sto,.js_invoice{
	background-color: #fff;
    margin-bottom: 0.1rem;
    color: #3a3a3a;
    padding-left: 0.16rem;
}
.js_sto>p,.js_invoice p{
	width:;
	height:0.44rem;
	line-height: 0.44rem;
	border-bottom: 1px solid #eee;
	color:#3a3a3a;
	font-size: 0.14rem;
	text-align:left!important;
}
.js_blank{
	width:100%;
	height:0.45rem;
}
/*.js_tagg{
	padding: 0 .05rem;
    font-size: .1rem;
    color: #ff8000;
    height: .14rem;
    line-height: .16rem;
}*/
@font-face {
	font-family:iconfont;
	src:url(../assets/iconfont.woff) format("woff");
}
.js_mon b,.js_jfdk i{
	display: inline-block;
    border: .01rem solid #d8d8d8;
    color: #bfbfbf;
    width: .12rem;
    height: .12rem;
    line-height: .1rem;
    text-align: center;
    font-size: .1rem;
    border-radius: 50%;
    position: relative;
    bottom: .02rem;
    margin-left: .05rem;
    color:#bfbfbf;
    font-family: iconfont!important;
}
.js_mon b:before,.js_jfdk i:before{
	content: "\e60f";
}
.js_mon span:last-child{
	float:right;
	margin-right:0.1rem;
}
.js_taggg{
	font-weight: normal;
	margin-left: 0.1rem;
}
.js_yh span:last-child,.js_invoice p span{
	float:right;
	margin-right:0.1rem;
	color:#bfbfbf;
}
.js_invoice p span{
	color:#878787;
	font-size: 0.15rem;
}
.js_col{
	color: #ff7e05;
    margin: 0 .03rem;
}
.js_sto .js_zg{
	font-size: 0.12rem;
	text-indent: 0.1rem;
}
.js_close{
	width:0.55rem;
	height:0.32rem;
	display: inline-block;
	overflow:hidden;
	margin-left: 1.64rem;
}
.js_close img{
	width:50%;
	margin-top:0.1rem;
	height:80%;
}
.js_tj{
	position: fixed;
	bottom:0;
	left:0;
	z-index:2;
	width:100%;
	height:0.45rem;
	line-height: 0.45rem;
	box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
	background-color:#fff;
	box-sizing: border-box;
}
.js_tj p:first-child{
	color:#ff7e05;
	text-indent: 0.1rem;
}
.js_tjd{
	width: 1rem;
    text-align: center;
    background: #ff7e05;
    line-height: .45rem;
    float:right;
    color: #fff;
}
.js_tj p:first-child{
	font-size:0.12rem;
	width:2.5rem;
	float:left;
}
</style>