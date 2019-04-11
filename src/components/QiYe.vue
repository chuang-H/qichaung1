<template>
<div class="v_box">
		<div class="v_header">会员中心
    		<router-link to="Mine"><img src="../assets/jiantou.png"></router-link>
        </div>		
		<a href="###" class="v_headers">
			<div class="v_grade">
                <div class="v_grades">
	                <!-- 购买次数 -->
	                <div class="v_buynum">
	                    <img src="../assets/vicon_num.png">
	                    <div class="v_num">已购买0次</div>
	                </div>
                    <!-- clas= v0,v1,v2,v3,v4,v5分别对应v0-v5各等级的图片 -->
                    <div class="v_avart v0">
                    	<div class="v_imggg">
                    		<img src="../assets/vv0.png">
                    	</div>
                        <span class="v_name">17839166817</span>
                    </div>
                    <span class="v_text">还需消费<em>2</em>次, <em>¥200</em>可升级</span>
                </div>
                <!-- 消费金额 -->
                <div class="buy_price">
                    <img src="../assets/vicon_price.png">
                    <div class="v_price">已消费¥0</div>
                </div>
                <!-- 总积分 -->
                <div class="v_points">1<i style="font-style:normal">积分</i></div>
            </div>
        </a>
        <div class="v_pri">
        	<a href="###" class="v_aa">
        		<p>会员特权</p>
        		<div class="v_ull">
	        		<ul class="v_listimg">
		        		<li class="v_imgs">
		        			<div><img src="../assets/couponson.png"></div>
		        			<p>每月领券</p>
		        			<p>0元优惠券</p>
		        		</li>
		        		<li class="v_imgs v_posi">
		        			<div><img src="../assets/cake_on.png"></div>
		        			<p>生日大礼</p>
		        			<p>价值20元礼品</p>
		        			<span>未设生日</span>
		        		</li>
		        		<li class="v_imgs">
		        			<div><img src="../assets/points_on.png"></div>
		        			<p>积分奖励</p>
		        			<p>1倍积分</p>
		        		</li>
		        		<li class="v_imgs">
		        			<div><img src="../assets/trytoeat_on.png"></div>
		        			<p>免费试吃</p>
		        			<p>申请即有机会</p>
		        		</li>
		        		<li class="v_imgs">
		        			<div><img src="../assets/prefer_on.png"></div>
		        			<p>等级特惠</p>
		        			<p>专项特惠商品</p>
		        		</li>
	        		</ul>
	        	</div>
        	</a>
        </div>
        <ul class="v_xy">
        	<li><a href="#"><img src="../assets/vactive_59509dfea7708.png"></a></li>
        	<li><a href="#"><img src="../assets/vactive_595087bea9633.gif"></a></li>
        </ul>
        <div class="v_imggs">
        	<a href="#"><img src="../assets/vactive_5a30d713b6b56.jpg"></a>
        </div>
        <div class="v_fl">
        	<div><a href="#"><img src="../assets/vactive_595b3b3574961.png"></a></div>
        	<div><a href="#"><img src="../assets/vactive_5a200df2218b1.jpg"></a></div>
        </div>
        <footer class="v_fleximg">
        	<img src="" alt="">
	    </footer>
	    <div class="v_simg"><router-link to="Cart"></router-link></div>
	    <div class="v_backto"></div>
	</div>
</template>

<script>

export default {
    name: 'QiYe',
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
	color:#666;
}
/*----------会员中心---------------*/
.v_header{
	height:0.51rem;
	line-height: 0.51rem;
	width:100%;
	position:fixed;
	left:0;
	top:0;
	text-align: center;
	font-size: 0.17rem;
	color:#76ac41;
	border-bottom:1px solid #d8d8d8;
	background-color: #fff;
	z-index:2;
	box-sizing: border-box;
}
.v_header a{
	width: 0.26rem;
	height:0.26rem;
	display: inline-block;
	text-decoration: none;
	position:absolute;
	left:0.1rem;
	top:0.08rem;
}
.v_header a img{
	width: 0.26rem;
	height:0.26rem;
}
.v_headers{
	display: block;
	width:100%;
	height:2.1852rem;
	margin-top:0.51rem;
}
.v_grade{
	width:100%;
	height:2.1852rem;
	background:url(../assets/vmembers.png) no-repeat;
	background-size:100% 100%;
	position:absolute;
} 
.v_grades{
	position:relative;
	left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.v_buynum,.v_price{
	position:absolute;
	left:14%;
	top:36%;
	width:0.5505rem;
	height:0.5386rem;
	margin-top:-0.1rem;
}
.v_buynum img,.buy_price img{
	width:0.28rem;
	margin:0 auto;
	display: block;
	height:auto;
}
.v_num,.v_price{
	padding-top:0.06rem;
	font-size: 0.1rem;
	color:#acacac;
	text-align: center;
}
.v_avart{
	width:1.3766rem;
	height:1.26rem;
	position:absolute;
	top:10%;
	left:38%;
	margin-top:-0.1rem;
}
.v_imggg{
	width:1rem;
	height:1rem;
	margin:0.18828rem 0;
}
.v_imggg img{
	width:100%;
	height:100%;
	background-size: 100% auto;
}
.buy_price{
	position: absolute;
	left:75%;
	width: 0.5505rem;
    height: 0.5386rem;
	top:36%;
	margin-top:-0.1rem;
}
.v_name{
	position: absolute;
    left: -3%;
    bottom: 9.3%;
    height: 17.3%;
    width: 75%;
    line-height: 0.17rem;
    text-align: center;
    font-size: 0.08rem;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.v_text{
	/*padding-top: 10px;*/
    text-align: center;
    font-size: 0.12rem;
    color: #acacac;
    display: block;
    position: absolute;
    top:66%;
    left:50%;
    transform: translate(-50%,-50%);
}
.v_price{
	margin-top:0.15rem;
	margin-left:-0.1rem;
}
.v_points{
	position: absolute;
    left: 40%;
    bottom: 0;
    height: 32px;
    padding: 0 12px;
    line-height: 32px;
    font-size: 20px;
    color: #fff;
    border-radius: 12px 12px 0 0;
    background: #5f584d;
}
.v_text em{
	 font-style: normal;
	 color: #fd8023;
}
.v_pri{
	width:100%;
	height:1.41rem;
	padding: 0.2rem 0;
    border-top: 0.1rem solid #eeeeee;
    border-bottom: 0.1rem solid #eeeeee;
    background-color:#fff;
}
.v_pri .v_aa>p{
	height:0.26rem;
	line-height: 0.26rem;
	font-size: 0.17rem;
	color:#666;
	text-align: center;
}
.v_ull{
	width:100%;
	height:0.95rem;
	padding-top:0.1rem;
	overflow-x: scroll;
/*	overflow:hidden;*/
}
.v_ull::-webkit-scrollbar{width:0px; height: 0px;}
.v_listimg{
	width:300%;
	
}
.v_imgs{
	width:0.84375rem;
	height:0.95rem;
	float:left;
	text-align: center;
}
.v_imgs>div{
	width:0.53rem;
	height:0.53rem;
	margin:auto;
}
.v_imgs>div img{
	width:100%;
	height:100%;
	background-size:100% 100%;
}
.v_imgs p:first-child{
	padding-top: 0.08rem;
    font-size: 0.12rem;
    color: #3a3a3a;
    display: block;
}
.v_imgs p:nth-of-type(2){
	line-height: 1.5;
    font-size: 0.1rem;
    color: #878787;
}
.v_posi{
	position:relative;
}
.v_posi span{
	position: absolute;
    top: 1px;
    left: 24%;
     min-width: 36px; 
    width: 0.4219rem;
    padding: 1px 1px;
    text-align: center;
    font-size: 0.08rem;
    color: #fff;
    border-radius: 10px;
    background: #93774c;
}
.v_xy{
	width:100%;
	height:1.0156rem;
}
.v_xy li{
	width:50%;
	float:left;
}
.v_xy li img{
	width:100%;
	height:100%;
	background-size:100% 100%;
}
.v_imggs{
	background-color: #fff;
	width:100%;
	height:1.6rem;
}
.v_imggs img{
	width:100%;
	height:100%;
	background-size:100% 100%;
}
/*img{
	 font-size: 0;
}*/
.v_fl{
	width:100%;
}
.v_fl>div:first-child{
	width:100%;
	height:0.6666rem;
}
.v_fl>div:last-child{
	width:100%;
	height:1.5953rem;
}
.v_fl>div:first-child img,.v_fl>div:last-child img{
	width:100%;
	height:100%;
	background-size: 100% 100%;
}
.v_fleximg{
	width:100%;
	height:0.16rem;
}
.v_fleximg img{
	width:1%;
	height:1%;
	background-size:100% 100%;
	margin-left:5px;
}
.v_simg{
	position: fixed;
    left: 5px;
    bottom: 5px;
    width: 0.6239rem;
    height: 0.6239rem;
    background: url(../assets/vcartgreen.png) no-repeat center 0 #65a032;
    background-size: 100% auto;
    border-radius: 50%;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,.3), -1px -1px 5px 1px rgba(0,0,0,.3);
    z-index: 2;
}
.v_simg a{
	width: 0.6239rem;
    height: 0.6239rem;
    display: inline-block;
    text-decoration: none;
    border-radius: 50%;
}
.v_backto{
	position: fixed;
    right: 0.24rem;
    bottom: 0.156rem;
    width: 0.3839rem;
    height: 0.3839rem;
    background: url(../assets/vbacktop.png) no-repeat center 0;
    background-size: 100%;
    z-index: 2;
}
</style>