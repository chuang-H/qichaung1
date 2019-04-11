<template>
    <div>
    	<div class="nav">
    	<router-link to="Mine"><img src="../assets/jiantou.png"></router-link>
    	<div class="c_text">退换货</div>
	    </div>
	    <div class="ation">
	    	<ul class="tab">
	    		<li>可申请</li>
	    		<li>以申请</li>
	    	</ul>
	    	<div id="np-1" class="nextpage disabled">
	    	    <p data-v-6f727901="">没有可申请售后服务的订单 
	    	        <br data-v-6f727901="">我们会竭尽全力给您最好的服务
	            </p>
	    	</div>
	    </div>
    </div>
</template>
<!-- vue 单页面返回上一步  @click="$router.back(-1)" -->
<script>

export default {
    name: 'TuiKuan',
    components:{
    
    },
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
}
.#np-1 div{
	width: 100%;
    padding: .08rem 0;
    text-align: center;
}
</style>