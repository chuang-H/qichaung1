<template>
 <!-- 分类全部 -->
	<div class="q_box">
		<!-- 头部 -->
		<div class="q_head">
			<div class="q_nav">
				<div class="q_back"><router-link to="Shop" class="iconfont icon-morehome">
					<img src="../assets/jiantou.png">
				</router-link></div>
				<div class="q_text">果园优选</div>
				<a href="###" class="a_next"><img src="../assets/sousuo.png"></a>
			</div>
			<div class="q_banner">
				<div class="q_banner1">
					<div class="q_ban" :class="{red: index==curIndex}" @click="curIndex=index" v-for="(item,index) in porList">
						<span class="q_color">{{item.name}}</span>
					</div>
				</div>
			</div>
			<div class="q_main">
				<ul class="q_m1">
					<li class="q_m2">综合</li>
					<li class="q_m3">销量</li>
					<li class="q_m4">价格</li>
				</ul>
			</div>
		</div>
		<!-- 中间部分 -->
		<div class="q_div" :class="['content', {curContent: 0==curIndex}]"> 
			<div class="q_left" v-for="item in pro">
				<div class="q_item">               
				<a @click="pushInfo(item.title,item.image,item.price,item.volume,item.product_desc,item.num)">
					<img :src=item.image>
				</a>
					<dl class="q_good"> 
						<dt>{{item.title}}</dt> 
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd> 
						<div class="q_gg"> 
							<small>￥</small>
							<big>{{item.price}}</big>
							<small></small>  
							<span style="background: #FF8000">明日达  </span>
						</div> 
					</dl>
				
					<div class="q_count">                      
						<span @click="addPro(item)">
						   <img src="../assets/jia.jpg">
						</span>
					</div>              
				</div>
			</div>
		</div>
		<!-- div1 -->
		<div class="q_div" :class="['content', {curContent: 1==curIndex}]"> 
			<div class="q_left" v-for="item in prot">
				<div class="q_item">
				<a @click="pushInfo(item.title,item.image,item.price,item.volume,item.product_desc,item.num)">
					<img :src=item.image>
				</a>
					<dl class="q_good"> 
						<dt>{{item.title}}</dt> 
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd> 
						<div class="q_gg"> 
							<small>￥</small>
							<big>{{item.price}}</big>
							<small></small>  
							<span style="background: #FF8000">明日达  </span> 
						</div> 
					</dl>
					<div class="q_count">                      
						<span @click="addPro(item)">
						   <img src="../assets/jia.jpg">
						</span>
					</div>
				
				</div>
			</div>
		</div>
		<!-- div2 -->
		<div class="q_div" :class="['content', {curContent: 2==curIndex}]"> 
			<div class="q_left" v-for="item in prot1">
				<div class="q_item">                                 
				<a @click="pushInfo(item.title,item.image,item.price,item.volume,item.product_desc,item.num)">
					<img :src=item.image>
				</a>
					<dl class="q_good"> 
						<dt>{{item.title}}</dt> 
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd> 
						<div class="q_gg"> 
							<small>￥</small>
							<big>{{item.price}}</big>
							<small></small>  
							<span style="background: #FF8000">明日达  </span> 
						</div> 
					</dl>
					<div class="q_count">                      
						<span @click="addPro(item)">
						   <img src="../assets/jia.jpg">
						</span>
					</div>               
				</div>
			</div>
		</div>
		<!-- div3 -->
		<div class="q_div" :class="['content', {curContent: 3==curIndex}]"> 
			<div class="q_left" v-for="item in prot2">
				<div class="q_item">
				<a @click="pushInfo(item.title,item.image,item.price,item.volume,item.product_desc,item.num)">
					<img :src=item.image>
				</a>
					<dl class="q_good"> 
						<dt>{{item.title}}</dt> 
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd> 
						<div class="q_gg"> 
							<small>￥</small>
							<big>{{item.price}}</big>
							<small></small>  
							<span style="background: #FF8000">明日达  </span> 
						</div> 
					</dl>
					<div class="q_count">                      
						<span @click="addPro(item)">
						   <img src="../assets/jia.jpg">
						</span>
					</div>
				
				</div>
			</div>
		</div>
		 <!-- div4 -->
		<div class="q_div" :class="['content', {curContent: 4==curIndex}]"> 
			<div class="q_left" v-for="item in prot3">
				<div class="q_item">
				<a @click="pushInfo(item.title,item.image,item.price,item.volume,item.product_desc,item.num)">
					<img :src=item.image>
				</a>
					<dl class="q_good"> 
						<dt>{{item.title}}</dt> 
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd> 
						<div class="q_gg"> 
							<small>￥</small>
							<big>{{item.price}}</big>
							<small></small>  
							<span style="background: #FF8000">明日达  </span> 
						</div> 
					</dl>
					<div class="q_count">                      
						<span @click="addPro(item)">
						   <img src="../assets/jia.jpg">
						</span>
					</div>                
				</div>
			</div>
		</div>
		   <!-- div5 -->
		<div class="q_div" :class="['content', {curContent: 5==curIndex}]"> 
			<div class="q_left"  v-for="item in prot4">
				<div class="q_item">
				<a @click="pushInfo(item.title,item.image,item.price,item.volume,item.product_desc,item.num)">
					<img :src=item.image>
				</a>
					<dl class="q_good"> 
						<dt>{{item.title}}</dt> 
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd> 
						<div class="q_gg"> 
							<small>￥</small>
							<big>{{item.price}}</big>
							<small></small>  
							<span style="background: #FF8000">明日达  </span> 
						</div> 
					</dl>
					<div class="q_count">                      
						<span @click="addPro(item)">
						   <img src="../assets/jia.jpg">
						</span>
					</div>
				</div> 
			</div>
		</div>
		<router-link to="Cart" class="q_dong">
			<img src="../assets/car.jpg">
			<strong>{{tol}}</strong>
		</router-link>
	</div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
	name: 'Shop',
	components:{
		Footer
	},
	data () {
		return {
			ppo:this.$route.query,
			pro:[],
			porList:[],
			prot:[],
			prot1:[],
			prot2:[],
			prot3:[],
			prot4:[],
			curIndex: 0
		}
	},
	created(){
		//使用axios插件请求数据
		this.$http("../../static/allFruits.json").then((res)=>{
			this.porList=res.data.data.brotherClass;
			this.pro=res.data.data.productGroup;
			var ordeList=this.$store.state.ordeList;
			for(var n=0;n<ordeList.length;n++){
				for(var m=0;m<this.pro.length;m++){
					if(ordeList[n].title===this.prot[m].title){
						this.pro[m].num=ordeList[n].num;
					}
				}
			}      
		});
		//使用axios插件请求数据
		this.$http("../../static/allFruits1.json").then((res)=>{
			this.prot=res.data.data.productGroup1;
			this.prot1=res.data.data.productGroup2;
			this.prot2=res.data.data.productGroup3;
			this.prot3=res.data.data.productGroup4;
			this.prot4=res.data.data.productGroup5;
			console.log(this.prot3);
			var ordeList=this.$store.state.ordeList;
			for(var n=0;n<ordeList.length;n++){
				for(var m=0;m<this.prot.length;m++){
					if(ordeList[n].title===this.prot[m].title){
						this.prot[m].num=ordeList[n].num;
					}
				}
			}      
		});
	},
	computed:{
		num(){
			 return this.$store.state.num;       
		},
		tol(){
			return this.$store.getters.tol;
			console.log(this.$store.getters.tol)
		}       
	},
	methods:{
		addPro(item){
			// item.num++;
			// 添加到订单
			this.$store.dispatch("add_Pro",item);         
		},
		subPro(item){
			if(item.num>0){
				item.num--;
			}               
			
		},
		pushInfo(title,image,price,volume,product_desc,num) {
			this.$router.push({
				path: '/ShangPin/',
				query: {
					title:title,
					product_desc:product_desc,
					price:price,
					volume:volume,
					image:image,
					num:num
				}
			})
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
.q_box{
	width: 100%;
	height: 100%;
	font-size: .14rem;
	font-weight: 300;
}
/*--------------头部-----------------*/
.red{
   color:#65a032;
   border-bottom:2px solid #65a032;
}
.content{
	display: none;
}
.curContent{
	display: block;
	color: #333;
	border:none;
}
.q_dong strong{
	width: 0.2rem;
	display: inline-block;
	height: 0.2rem;
	line-height: 0.2rem;
	position: absolute;
	left: 0.32rem;
	top: 2px;
	color:#fff;
	border-radius: 50%;
	background-color:#ff8000;
	text-align: center;
	font-weight: normal;
}
.q_head{
	display: block;
	height: 1.1rem;
	background: rgba(248,248,248,.95);
	box-shadow: inherit;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	padding: .08rem 0;
	z-index: 8;
}
.q_nav{
	color: #75a739;
	height: .45rem;
	line-height: .43rem;
	background: 0 0;
	border-bottom: .01rem solid #d8d8d8;
	top: 0;
	left: 0;
	width: 100%;
	position: relative;
}
.q_back{
	width: .88rem;
	color: #76a741;
	float: left;
	text-align: left;
}
.q_back a{
	text-align: center;
	padding-left: .07rem;
	width: .4rem;
	color: #75a739;
	display: inline-block;
	font-size: .22rem;
}
.q_back a img{
   width:0.22rem;
   height: 0.22rem;
}
.q_text{
	width: 1.99rem;
	height: 0.45rem;
	text-align: center;
	font-size: .17rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-box-flex: 1;
	color: #75a739;
	float: left;
}
.a_next{
	width: .8rem;
	line-height: 0.46rem;
	margin-right: .08rem;
	text-align: right;
	color: #75a739;
	float: right;
	text-decoration: none;
	position: absolute;
	right: 0;
	top:0.07rem;
}
.a_next img{
	width: 0.22rem;
	height: 0.23rem;
}
.q_banner{
	width: 100%;
	height: 0.36rem;
	line-height: .36rem;
	background: #fff;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	z-index: 0;
	text-align: center;
	overflow-x: scroll;
}
.q_banner::-webkit-scrollbar{width:0px; height: 0px;}
.q_banner1{
	position: relative;
	width: 300%;
	height: 0.36rem;
	z-index: 1;
	display: flex;
	transform: translate3d(0, 0, 0);
}
.q_ban{
	width: 0.6675rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin:0 0.05rem 0 0.075rem;
	position: relative; 
}
/*.q_ban:first-child{
	border-bottom: 2px solid #65a032;
	color:#65a032;
}*/
.q_ban span{
	white-space: nowrap;
	line-height: .36rem;
	font-size: .14rem;
	font-weight: 300;
	text-align: center;
}
.q-main{
	width: 100%;
	height: 0.36rem;
}
.q_m1{
	background: #f5f5f5;
	text-align: center;
	line-height: .36rem;
	width: 100%;
	display: flex;
	list-style: none;
}
.q_m1 li{
	flex: 1;
	height: 0.36rem;
}
.q_m2{
	color: #65a032;
}
/*--------------中间部分--------------------*/
.q_div{
	padding-top: 1.25rem;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	z-index: 0;
	text-align: center;
	background-color: #fff;
}
.q_left{
	width: 100%;
	height: 500%;
}
.q_item{
	text-decoration: none;
	padding: .1rem;
	position: relative;
	border-bottom: .01rem solid #d8d8d8;
	color: #3a3a3a;
	height: 1.05rem;
	display: inline-block;
	width: 94%;
	display: -webkit-box;
}
.q_item img{
	width: 1.05rem;
	height: 1.05rem;
	margin-right: .1rem;
	border-radius: .04rem;
	border: 0;
	display: block;
}
.q_good{
	position: relative;
	width: calc(100% - 1.15rem);
	text-align: left;
	height: 1.05rem;
	width: 1%;
	-webkit-box-flex: 1;
}
.q_good dt{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-moz-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;
}
.q_good dd{
	height: .2rem;
	font-size: .12rem;
	color: #878787;
	line-height: 1.8;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.q_good dd:last-of-type{
	top: .6rem;
	right: 0;
	bottom: auto;
	left: 0;
	position: absolute;
}
.q_gg{
	margin-top: .05rem;
	color: #ff8000;
	line-height: 1;
	top: auto;
	right: 0;
	bottom: 0;
	left: 0;
	position: absolute;
	display: block;
}
.q_gg big{
	font-size: .2rem;
}
.q_gg span{
	position: relative;
	top: -.03rem;
	border-radius: .02rem;
	padding: .02rem .02rem;
	line-height: 1;
	margin-left: .08rem;
	font-size: .08rem;
	color: #fff;
}
.q_count{
	position: absolute;
	width: .74rem;
	line-height: .22rem;
	right: .1rem;
	bottom: 0;
	height: .43rem;
	display: block;
}
.q_count span{
	right: -.1rem;
	text-align: right;
	padding: .1rem;
	position: absolute;
	top: -0.04rem;
	width: 0.3rem;
	height: 0.28rem;
}
.q_count span img{
	width: 0.3rem;
	height: 0.28rem;
}
.q_dong{
	bottom: .05rem;
	left: .05rem;
	position: fixed;
	background: #65a032;
	text-align: center;
	color: #fff;
	width: .5rem;
	height: .5rem;
	line-height: .5rem;
	border-radius: 100%;
	display: inline;
	text-decoration: none;
}
.q_dong img{
	width: 0.3rem;
	height: 0.25rem;
	margin: 0.13rem 0 0 0;
}
</style>