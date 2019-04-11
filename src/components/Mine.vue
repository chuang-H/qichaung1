<template>
 <!-- 我的果园 -->
<div class="box3" code="4">
    <!--头部 -->
	<div class="w_top">
		<div class="w_left">
			<div class="w_left1">
				<router-link to="GeRen"><img src="../assets/old_v0.png" alt=""></router-link>
			</div>
			<div class="w_left2">
				<h2>小白</h2>
				<a href="##">今日已签到</a>
			</div>
			<div class="w_left3">
				<i></i> 
				<span>会员码</span>
			</div>
		</div>
		<ul class="w_right">
			<li>
				<a href="##">
					<span class="w_name">积分</span>
					<span class="w_vlue">1</span>
				</a>
			</li>
			<li>
				<a href="##">
					<span class="w_name">余额</span>
					<span class="w_vlue">0</span>
				</a>
			</li>
			<li>
				<a href="discounts/discounts.html">
					<span class="w_name">优惠券</span>
					<span class="w_vlue">3</span>
				</a>
			</li>
			<li>
				<a href="##">
					<span class="w_name">礼品</span>
					<span class="w_vlue">0</span>
				</a>
			</li>
		</ul>
	</div>
	<!-- 中间部分 -->
	<div class="w_main">
		<div class="w_main1">
		    <router-link to="DingDan">
				<i></i>
				<span class="w_tle">我的订单</span>
				<span class="w_tle2">全部订单</span>
				<strong></strong>
			</router-link>
		</div>
		<!-- 我的订单 -->
		<ul class="w_main2">
			<li>
			    <router-link to="DingDan">
				    <span class="w_text"></span>
					<span class="w_text1">待付款</span>
			    </router-link>
			</li>
			<li>
			    <router-link to="DingDan">
				    <span class="w_text"></span>
					<span class="w_text1">待发货</span>
				</router-link>
			</li>
			<li>
			    <router-link to="DingDan">
				    <span class="w_text"></span>
					<span class="w_text1">待收货</span>
			    </router-link>
			</li>
			<li>
			    <router-link to="DingDan">
				    <span class="w_text"></span>
					<span class="w_text1">待评价</span>
				</router-link>
			</li>
			<li>
			    <router-link to="TuiKuan">
			    	<span class="w_text"></span>
				    <span class="w_text1">退换货</span>
			    </router-link>
			</li>
		</ul>
		<div class="kongbai"></div>
		<!-- 会员中心 -->
		<div class="w_main3">
		    <router-link to="QiYe">
			    <i></i>
			    <span class="w_te">会员中心</span>
				<span class="w_pull">享等级特权</span>
				<strong></strong>
			</router-link>
		</div>
		<div class="w_main3">
		    <router-link to="QiYe">
			    <i></i>
			    <span class="w_te">企业购</span>
			    <strong></strong>
		    </router-link>				
		</div>
		<div class="w_main3">
		    <router-link to="ZaiXian">
			    <i></i>
			    <span class="w_te">在线客服</span>
			    <strong></strong>
		    </router-link>
		</div>
	</div>
	 <Footer></Footer>
</div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    name: 'Mine',
    components:{
        Footer
    },
    data () {
        return {

        }
    }
}
</script>
<style>

</style>