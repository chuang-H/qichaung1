<template>
<div class="s_box">
	<!-- 购物车 -->
	<div class="s_shoppingCart2" v-if="willShow">
		<div class="s_top2">
			<div class="s_back" ><a href="###" @click="$router.back(-1)"><img src="../assets/jiantou.png"></a></div>
			<span class="s_shopping">购物车</span>
			<span class="s_text">编辑</span>
		</div>
		<!-- 添加地址 -->
		<div class="address">
			<div class="addre">
				<i class="icon"></i>
				<div class="infor">    
				    <span class="name">齐先生</span><span class="tele">18838975615</span>  
				    <span class="tag">公司</span>  
				    <p>西三旗 <span class="current_addr">物美大卖场3楼育知同创 </span> </p>    
				</div>
				<em class="icon2"></em>
			</div>
		</div>
		<div class="s_border"></div>

		<div class="s_sl">
			<p><span>商品清单</span><span>总重约4.00kg</span></p>
			<ul class="s_goodsl">					
				<li class="s_item" v-for="(item,index) in ordeList">
			        <i>√</i>
			        <a href="##" class="s_fl">
			            <div class="s_img">
			                <img :src=item.image>
			            </div>
			            <div class="s_fruits">
			                <p class="s_fruitss">{{item.title}}</p>
			                <p class="weight"><span class="s_weight1">{{item.volume}}</span><span class="s_weight2">0.05g</span></p>
			                <p class="s_moneies"><span>￥{{item.price}}</span><span class="s_moneies1">明日达</span></p>
			            </div>
			        </a>
			        <div class="Cart1 s_gwc">			        
			            <span class="s_add"><i @click="subPro(item,index)"><img src="../assets/minus.jpg"></i></span>
			            <span class="s_num">{{item.num}}</span>
			            <span class="s_minus"><i @click="addPro(item)"><img src="../assets/jia.jpg"></i></span>
			        </div>
			        
			    </li>   			
			</ul>
		</div>
		<div class="kongabai"></div>
		<div class="s_balance">
			<span class="s_sa"><i></i>全选</span>
			<div class="s_hj">
				<span>合计:</span>
				<span style="color:#ff8000;font-weight:normal;"><i style="font-size:0.1rem;font-style: normal;">￥</i><span style="font-size:0.2rem;">{{total}}</span><b style="font-size:0.1rem"></b></span>
			</div>
			<router-link to="JieSuan" class="s_js">结算<i>({{tol}})</i></router-link>
		</div>
		
		 <Footer></Footer>
	</div> 
	<!-- 空购物车 -->
	<div class="s_shoppingCart" v-else="willShow">
	    <div class="sss_back"><router-link to="Home"><img src="../assets/jiantou.png"></router-link></div>
		<p class="s_top">购物车</p>
		<img src="../assets/car.png">
		<div class="s_rightGoods">还没找到心仪的商品吗？</div>
		<router-link to="Home">去逛逛吧</router-link>
	</div>
	<!-- 遮罩 -->
	<div id="zz" v-show ="isShow"></div>
	<div class="t_tanchuang" v-show ="isShow">
	    <div class="t_top">
	    	<p>确定要删除{{tolNmae}}</p>
	    </div>
	    <div class="t_bottom">
	    	<a href="##" class="t_qu" @click ="cancal()">取消</a>
	    	<a href="##" class="t_que" @click ="del()">确定</a>
	    </div>
	</div>
</div>


 
</template>
<!-- vue 单页面返回上一步  @click="$router.back(-1)" -->
<script>
import Footer from '@/components/Footer';

export default {
    name: 'Cart',
    components:{
        Footer,     
    },
    data () {
        return {
            willShow:true,
            ordeList:[],
            willShow1:true,
            isShow:false,
            index1:null
        }
    },
    methods:{
        addPro(item){
            this.$store.dispatch("add_Pro",item);
        },
        subPro(item,index){
        	this.index1 = index;
            if(item.num>1){
                item.num--;
            }else{
                 this.isShow = true
           
            }
            //删除0数量的产品
 			for(var n=0;n<this.$store.state.ordeList.length;n++){
 				if(this.$store.state.ordeList[n].num==1){
 					// this.$store.state.ordeList.splice(n,1);
 				}
            }
        },
        // 弹框显示是否删除
        del(){
        	// 删除的下标是data()里存储的 subPro()函数触发时储存的
        	this.$store.state.ordeList.splice(this.index1,1);
        	// 删除后弹框隐藏
        	this.isShow = false
        },
        cancal(){
        	// 取消后后弹框隐藏
        	this.isShow = false
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
    		if (this.$store.getters.tol==0) {
    			if(this.willShow==true){
		            this.willShow=false;
		        }else{
		            this.willShow=true
		        }
    		}else{
    			return this.$store.getters.tol;
    		}
    		
    	},
    	tolNmae(){
    		return this.$store.getters.tolNmae;
    	}
    }
}

</script>
<style>
.s_box{
	width: 100%;
	height: 100%;
}
.sss_back{

}
.t_tanchuang{
	width: 2.7rem;
	height: 1.5rem;
	position: fixed;
    z-index: 17;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: .06rem .06rem .06rem .06rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    /*display:none;*/
}
.t_top{
	display: table;
    width: 100%;
    height: 1.05rem;
    line-height: 1.05rem;
    color: #000;
    text-align: center;
}
.t_top p{
	padding: .08rem;
    display: table-cell;
    vertical-align: middle;
    line-height: 16px;
    font-size: 14px;
    color:#333;
}
.t_bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: .01rem solid #bfbfbf;
    width: 100%;
    height: 0.47rem;
    display:flex;
}
.t_qu,.t_que{
    color: #008eff;
    height: .46rem;
    line-height: .46rem;
    flex: 1;
    font-size: .17rem;
    display: block;
    text-align: center;
    text-decoration: none;
}
.t_que{
    border-left: .01rem solid #bfbfbf;
}
#zz{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    z-index:16; 
    /*display:none;*/
}
</style>