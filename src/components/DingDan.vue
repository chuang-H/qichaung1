<template>
<div class="box">
	<div class="nav">
    	<router-link to="Mine"><img src="../assets/jiantou.png"></router-link>
    	<div class="c_text">我的订单</div>
    </div>
    <div class="ation">
    	<ul class="tab">
    		<li>全部</li>
    		<li>待付款</li>
    		<li>待发货</li>
    		<li>待收货</li>
    		<li>待评价</li>
    	</ul>
    	<div id="np-1" class="nextpage disabled">
    	    <div class="nodata">没有更多数据。</div>
    	</div>
    </div>
</div>
</template>

<script>

export default {
    name: 'DingDan',
    data () {
        return {

        }
    }
}
</script>
<style>
*{
	margin:0;
	padding:0;
}
html{
	font-size: 100px;
}
body{
	font-size: 16px;
}
.box{
	width: 100%;
	height: 100%;
}
.nav{
	background: #fff;
    color: #75a739;
    height: .45rem;
    line-height: .43rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: -webkit-box;
    border-bottom: .01rem solid #d8d8d8;
}
.nav a{
	margin:0.06rem 0 0 0;
	width: .4rem;
    color: #75a739;
    display: inline-block;
    font-size: .22rem;
    text-align: center;
    padding-left: .07rem;
    transform: rotate(360deg);
    float: left;
}
.nav a img{
	width: 0.22rem;
	height: 0.25rem;
}
.c_text{
	width: 1.99rem;
	text-align: center;
    font-size: .17rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0 0 0 0.5rem;
}
.ation{
	margin-top: .46rem;
	height: 0.96rem;
}
.tab{
	position: fixed;
    top: .46rem;
    left: 0;
    width: 100%;
    display: flex;
    line-height: .36rem;
    background: #fff;
    text-align: center;
    color: #3a3a3a;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    z-index: 8;
    list-style: none;
}
.tab li{
	flex: 1;
	height: 0.36rem;
	font-size: .14rem;
}
.tab li:first-child{
    color: #65a032;
    border-bottom: .02rem solid #65a032;
}
#np-1{
	padding: .08rem 0;
    text-align: center;
    height: 0.35rem;
    font-size: .14rem;
    margin-top: .9rem;
    width: 100%;
}
.#np-1 div{
	width: 100%;
    padding: .08rem 0;
    text-align: center!important;
}
</style>