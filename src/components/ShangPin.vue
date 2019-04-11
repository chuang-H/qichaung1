<template>
    <!-- 商品详情 -->
    <div class="H_box">      
	    <!-- 头部 -->
	    <div class="H_nav">
    		<div class="H_back"><a href="###" @click="$router.back(-1)"><</a></div>
    		<div class="H_tab">
    			<ul class="H_tab-menu">
    				<li class="H_active" :class="{curTab: 0==curIndex}" @click="curIndex=0">商品</li>
    				<li :class="{curTab: 1==curIndex}" @click="curIndex=1">详情</li>
    				<li :class="{curTab: 2==curIndex}" @click="curIndex=2">评价</li>
    			</ul>			
    		</div>
        </div>
        <!-- 商品 -->
        <div class="h-box1" :class="['content', {curContent: 0==curIndex}]">
            <div class="H_more">
                <i class="H_more-inicon"></i>
                <div></div>
                <div></div>         
            </div>       
            <!-- 身体 -->
            <div class="H_main">
                <!-- 商品轮播图 -->              
                <div class="h4_box">
                    <img :src=pto.image>
                     <!-- <LunBo></LunBo> -->
                </div>
                <!-- 商品价格 -->
                <div class="H_info-item">
                    <h3>{{pto.title}}</h3>
                    <h4>{{pto.subtitle}}</h4>
                    <div class="H_price">
                        <small>￥</small><em>{{pto.price}}</em><small></small>
                    </div>
                    <div class="H_size">
                        <span>
                            <strong>1个白心+1个红心</strong>
                            <small>明日达</small>
                        </span>
                        <em>最快明天09:00-18:00送达</em>
                    </div>
                    <h5>单重300g以上</h5>           
                </div>
                <!-- 送货至 -->
                <div class="H_address-item">
                    <span>送至</span>
                    <h4><i></i><em>回龙观街道</em></h4>
                </div>
                <!-- 48小时退换货全程冷链部分 -->
                <div class="H_tips-item">
                    <span><i></i><em>48小时退换货</em></span>
                    <span><i></i><em>全程冷链</em></span>
                    <span><i></i><em>果园标准</em></span>
                    <span><i></i><em>全球直采</em></span>           
                </div>
            </div>  
        </div>
        <!-- 详情 -->
        <div :class="['content', {curContent: 1==curIndex}]" class="h-box">
            <div class="H_app-detail">
                <img :src=pto.image>
                <img src="../assets/pic3.jpg">
                <img src="../assets/pic4.jpg">
                <img src="../assets/pic5.jpg">
                <img src="../assets/pic6.jpg">
                <img src="../assets/pic7.jpg">
                <img src="../assets/pic8.jpg">     
            </div>  
        </div>
        <!-- 评价 -->
        <div class="h-box2" :class="['content', {curContent: 2==curIndex}]">
            <!-- 身体 -->
            <div class="H_main">
                <div class="H_good-comment-star">
                    <dl>
                        <dt>
                            <span>97%</span>
                            <span>好评</span>
                        </dt>
                        <dd>
                            <div>
                                <span>口感</span>
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing2.png">
                            </div>
                            <div>
                                <span>颜值</span>
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing1.png">
                                <img src="../assets/wujiaoxing2.png">
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="H_comment-tab-menu">
                    <ul>
                        <li class="H_active1" :class="{red4: 0==curIndex4}" @click="curIndex4=0">评价 6392</li>
                        <li :class="{red4: 1==curIndex4}" @click="curIndex4=1">晒图 1537</li>
                    </ul>
                </div>
                
                <!-- 商品评价部分 -->
                <div class="H_comment-item" :class="['content4', {curContent4: 0==curIndex4}]">
                    <div class="tips">
                        <i></i>
                        <p>只看有内容的评价</p>
                    </div>          
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-10</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,快递速度很快，和好点赞</p>
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-11</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,店家服务态度很好,东西很干净,安全,好评下次还来这家买，</p>
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/pic1.jpg">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-12</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">必须好评，这个价格没的说，口感更是没的说</p>
                    </div>
                    <div class="tips">
                        <i></i>
                        <p>只看有内容的评价</p>
                    </div>          
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-10</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,快递速度很快，和好点赞</p>
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-11</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,店家服务态度很好,东西很干净,安全,好评下次还来这家买，</p>
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/pic1.jpg">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-12</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">必须好评，这个价格没的说，口感更是没的说</p>
                    </div>
                </div>
                <div class="H_comment-item" :class="['content4', {curContent4: 1==curIndex4}]">         
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-12</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,快递速度很快，和好点赞</p>
                        <img src="../assets/photo0.jpg">
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-13</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,店家服务态度很好,很甜,安全,，</p>
                        <img src="../assets/orange.jpg">
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/pic1.jpg">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-13</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">必须好评，这个价格没的说，口感更是没的说</p>
                        <img src="../assets/SPbanner-3.jpg">
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-12</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,快递速度很快，和好点赞</p>
                        <img src="../assets/photo0.jpg">
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/default_userpic.png">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-13</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">回购了两次，还可以,店家服务态度很好,很甜,安全,，</p>
                        <img src="../assets/orange.jpg">
                    </div>
                    <div class="H_comment-con-chief">
                        <div class="H_comment-info">
                            <img src="../assets/pic1.jpg">
                            <span class="H_user">137****7715</span><i></i>
                            <span class="H_date">2017-12-13</span>
                        </div>
                        <div class="H_comment-level">
                            <span>口感 5</span>
                            <span>颜值 5</span>
                        </div>
                        <p class="H_comment-msg">必须好评，这个价格没的说，口感更是没的说</p>
                        <img src="../assets/SPbanner-3.jpg">
                    </div>
                </div>
            </div>  
        </div>
	    <!-- 脚部 -->
	    <div class="H_footer">
		<router-link to="/Cart" class="H_cart-btn">
			<i></i>
			<span>{{tol}}</span>
		</router-link>
		<a href="###" class="H_add-cart" @click="addPro(pto)">
			<span>明日达</span>
			<em>加入购物车</em>
		</a>
		
	    </div> 	
    </div>

</template>

<script>
export default {
    name: 'ShangPin',
    components:{

    },
    data () {
        return {
            curIndex: 0,
            curIndex4: 0,         
            pto1:[],
            pto:this.$route.query
        }        
    },
    created(){
        console.log(this.$route.query);
        var ordeList=this.$store.state.ordeList;
        for(var n=0;n<ordeList.length;n++){            
            if(ordeList[n].title===this.$route.query.title){
                this.$route.query.num=ordeList[n].num;
            }

        }      
    },
    methods:{
        addPro(item){
            // item.num++;
            // 添加到订单
            this.$store.dispatch("add_Pro",item);         
        }
    },
    computed:{
        tol(){
            return this.$store.getters.tol;            
        }
    }
}
</script>
<style>

body {
    margin: 0;
    font-size: .14rem;
    background: #f5f5f5;
    font-weight: 300;
}
.red4{
   color:#333;
   background: #ff8000;
}
.content4{
    display: none;
}
.curContent4{
    display: block;
    color: #333;
    border:none;
}
.curTab{
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
.H_box{
    width: 100%;
    height: 100%;
}
.h-box,.h-box1,.h-box2{
    width: 100%;
    height: 100%;
}
/*头部*/
.H_nav{
	background: #fff;
    color: #75a739;
    position: fixed;
    height: 0.46rem;
    line-height: 0.43rem;
    top: 0;
    left: 0;
    width: 100%;
    display: -webkit-box;    
    display: box;
    border-bottom: .01rem solid #d8d8d8;
    z-index: 1;
}
.H_active1{
    /*background-color: #ff8000;*/
}
.H_back{
    width: .88rem;
    display: inline-block;
    position: absolute;
    left:0;
    top: auto;
    z-index:100;
}
.h4_box{
    width: 3.75rem;
    height: 3.75rem;
}
.h4_box img{
    width: 100%;
    height: 100%;
}
.H_back>a{
    text-align: center;
    padding-left: .07rem;
    float: left;
    width: .4rem;
    color: #75a739;
    font-size: .22rem;
    font-family: 宋体;
    font-weight: bold;
    z-index: 100;
    text-decoration: none;
}
.H_tab{
    text-align: center;
    width: 100%;
    position: fixed;
}
.H_tab-menu{
    font-size: .16rem;
    text-align: center;
    color: #3a3a3a;
    width: 100%;
}
.H_tab-menu li{
    margin: 0 .06rem;
    height: .43rem;
    line-height: .45rem;
    display: inline-block;
   
}
.shang1{
    width: 100%;
    height: 100%;
}
.H_tab-menu li a{
	text-decoration: none;
	color:#333;
}
.H_more{
    position: absolute;
    width: .8rem;
    margin-right: .08rem;
    text-align: right;
    right: 0;

}
.H_more-inicon{
    display: inline-block;
    width: .2rem;
    height: .1rem;
    /*background: url(./assets/more.bmp);*/
    background-size: 100% 100%;
}

/*身体*/
.H_main{
    padding-bottom: .45rem;
    margin-top: .46rem;
}
/*身体*/
.H_app-detail{
    padding: .45rem 0 0 0;
}
.H_app-detail img{
    width: 100%;
}
/*商品轮拔图*/
.H_SPbanner{
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 0;
    text-align: center;
    height: 375px;
}
.H_picList li img{
    border: 0;
    width: 100%;
    display: block;
}
.H_picListball{
    bottom: 8px;
    left: 0;
    width: 100%;
    position: absolute;
    text-align: center;
    z-index: 10;
}
.H_picListball span{
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: .4;
    margin: 0 5px;
    cursor: pointer;
}
/**/
/*身体*/
.H_main{
    padding-bottom: .45rem;
    margin-top: .46rem;
}
.H_good-comment-star dl{
    padding: .2rem .1rem;
    height: .56rem;
    background: white;
}
.H_good-comment-star dl dt{
    float: left;
    width: .56rem;
    height: .4rem;
    padding: .08rem 0;
    margin-right: .3rem;
    border-radius: 100%;
    background: #ff8000;
    font-size: .16rem;
    color: #fff;
    text-align: center;
}
.H_good-comment-star dl dt span{
    display: block;
}
.H_good-comment-star dl dd{
    float: left;
    width: 2.05rem;
}
.H_good-comment-star dl dd div{
    height: .24rem;
    line-height: .24rem;
}
.H_good-comment-star dl dd div span{
    float: left;
}
.H_good-comment-star dl dd div:first-child{
    margin-bottom: .08rem;
}
.H_good-comment-star dl dd div img{
    float: left;
    margin-left: .15rem;
    margin-top: .02rem;
    width: .2rem;
    height: .2rem;
}



.H_comment-tab-menu{
    padding: .2rem 0;
    border-top: .01rem solid #d8d8d8;
    border-bottom: .01rem solid #d8d8d8;
    background: #fff;
    display: -webkit-box;
    -webkit-box-pack: center;
}
.H_comment-tab-menu ul{
    border: .01rem solid #ff8000;
    border-radius: .06rem;
}
.H_comment-tab-menu ul li{
    display: inline-block;
    min-width: 1rem;
    height: .32rem;
    line-height: 0.32rem;
    padding: 0 .05rem;
    color: #333;
    text-align: center;
}


/*商品评价部分*/
.H_tips{
    height: .16rem;
    padding: .15rem .1rem;
    font-size: .12rem;
    line-height: .16rem;
    color: #878787;
}
.H_tips i{
    display:inline-block;
    width: .17rem;
    height: .17rem;
    background: url(../assets/duihao.png);
    background-size: 100% 100%;
    margin: 0 .04rem 0 .02rem;
    float: left;
}
.tips{
    position: relative;
    text-align: left;
    height: .16rem;
    padding: .15rem .1rem;
    font-size: .12rem;
    line-height: .16rem;
    color: #878787;
}
.tips p{
    margin:0 0 0  0.4rem;
}
.tips i{
    display:inline-block;
    width: .17rem;
    height: .17rem;
    background: url(../assets/duihao.png);
    background-size: 100% 100%;
    margin: 0 .04rem 0 .02rem;
    float: left;
    position: absolute;
    left:0.12rem;
    top:0.12rem;
}
.H_comment-item{
    padding: .1rem 0;
    margin-bottom: .1rem;
    background: #fff;
}
.H_comment-con-chief{
    margin-left: .1rem;
    padding: .15rem .1rem .15rem 0;
    color: #3a3a3a;
    clear: both;
    border-bottom:1px solid #f8f8f8;
}
.H_more{
    position: absolute;
    width: .8rem;
    margin-right: .08rem;
    text-align: right;
    right: 0;

}
.H_more-inicon{
    display: inline-block;
    width: .2rem;
    height: .1rem;
    background-size: 100% 100%;
}
.H_top{
    padding: 0 .1rem .15rem 0;
}
.H_comment-con-chief img{
    float: left;
    width: .56rem;
    height: .56rem;
    margin: .08rem .08rem 0 0;
}
.H_comment-info{
    height: .36rem;
    line-height: .36rem;
    text-align: left;
}
.H_comment-info>img{
    float: left;
    width: .36rem;
    height: .36rem;
    margin-right: .15rem;
    border-radius: 100%;
}
.H_comment-info .user{
    float: left;
    margin-right: .05rem;
    font-size: .14rem;
}
.H_comment-info i{
    width: .14rem;
    height: .16rem;
    display: inline-block;
    background: url(../assets/v2.jpg);
    background-size: 100% 100%;
    margin: .11rem 0 0 0;
}
.H_comment-info .H_date{
    float: right;
    font-size: .13rem;
    color: #878787;
}
.H_comment-level{
    height: .3rem;
    font-size: .13rem;
    line-height: .3rem;
    color: #878787;
    text-align: left;
}
.H_comment-level span{
    display: inline-block;
    margin-right: .3rem;
}
.H_comment-msg{
    font-size: .15rem;
    line-height: .2rem;
    text-align: left;
}
/*商品价格*/
.H_info-item{
    padding: .1rem;
    margin-bottom: .1rem;
    background: #fff;
    text-align: center;
}
.H_info-item h3,.H_info-item h4,.H_info-item h5{
    margin: 0 0 .05rem;
    font-weight: 400;
    line-height: 1;
}
.H_info-item h3{
    font-size: .18rem;
    color: #3a3a3a;   
}
.H_info-item h4{
    font-size: .14rem;
    color: #878787;   
}
.H_price{
    color: #ff8000;
    margin-bottom: .1rem;
    position: relative;
}
.H_price em{
    font-size: .3rem;
}
.H_size span{
    display: inline-block;
    min-width: .5rem;
    border: .01rem solid #dcdcdc;
    border-radius: .04rem;
    padding: .08rem .1rem;
    margin: 0 .05rem;
    font-size: .14rem;
    height: .26rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: .1rem;
    background:  #ff8000;
}
.H_size span>strong{
    font-weight: 300;
    font-size: .14rem;
    color: white;
}
.H_size span>small{
    display: block;
    font-size: .08rem;
    color: white;
}

.H_size em{
    font-size: .1rem;
    display: block;
    color: #ff8000;
}
.H_info-item h5{
        margin-bottom: 0;
    font-size: .1rem;
    color: #878787;
}
/*送货至*/
.H_address-item{
    position: relative;
    padding: .1rem .1rem .1rem .45rem;
    margin-bottom: .1rem;
    background: #fff;
}
.H_address-item span{
    top: .15rem;
    right: auto;
    bottom: auto;
    left: .1rem;
    position: absolute;
    font-size: .12rem;
    color: #878787;
}
.H_address-item h4{
    margin: 0;
    height: .25rem;
    font-size: .13rem;
    line-height: .25rem;
    font-weight: 400;
    color: #3a3a3a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    overflow: hidden;
}
.H_address-item h4 i{
    width: .12rem;
    height: .17rem;
    background: url(../assets/mapicon.jpg);
    background-size: 100% 100%;
    display: inline-block;
    margin:3px 2px 0 0;
    float: left;
}
.H_address-item h4 span{
    display: inline-block;
    float: left;
}
/*48小时退换货全程冷链部分*/
.H_tips-item{
    position: relative;
    padding: .1rem .1rem;
    margin-bottom: .1rem;
    background: #fff;
    overflow: hidden;
}
.H_tips-item span{
    float: left;
    padding: .02rem .05rem .02rem 0;
    font-size: .1rem;
    color: #bfbfbf;
}
.H_tips-item span i{
    width: .15rem;
    height: .15rem;
    display: inline-block;
    float: left;
    background: url(../assets/duihao.jpg);
    background-size: 100% 100%;
}
.H_tips-item span em{
    float: left;
}
/*商品评价部分*/
.H_comment-item{
    padding: .1rem 0;
    margin-bottom: .1rem;
    background: #fff;
}
.H_comment-total{
    margin-left: .1rem;
    padding-right: .1rem;
    height: .25rem;
    border-bottom: .01rem solid #d8d8d8;
    font-size: .12rem;
    color: #878787;
}
.H_comment-total span{
    float: right;
}
.H_comment-total span small{
    color: #ff8000;
}
.H_comment-total span i{
    font-family: 宋体;
    font-size: .12rem;
    color: #bfbfbf;
    margin-left: .05rem;
    font-style: normal;
    font-weight: bold;
}
/*脚部*/
.H_footer{
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
    background: #fff;
    height: .45rem;
    font-size: .18rem;
    line-height: .45rem;
    text-align: center;
}
.H_cart-btn{
    top: auto;
    right: auto;
    bottom: .05rem;
    left: .05rem;
    position: absolute;
    background: #65a032;
    text-align: center;
    color: #fff;
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    border-radius: 100%;
}
.H_cart-btn i{
    width: .43rem;
    height: .4rem;
    background: url(../assets/vcartgreen.png);
    background-size: 100% 100%;
    display: block;
    position: absolute;
    left: .026rem;
    bottom: .05rem;
}
.H_cart-btn span{
    background: #ff8000;
    line-height: .14rem;
    border-radius: .15rem;
    min-width: .14rem;
    padding: 0 .02rem;
    top: .03rem;
    right: auto;
    bottom: auto;
    left: .35rem;
    position: absolute;
    color: #fff;font-size: .12rem;
}
.H_add-cart{
    float: right;
    width: 1.8rem;
    background: #ff8000;
    font-size: .18rem;
    line-height: .46rem;
    color: #fff;
    text-decoration: none;
}
.H_add-cart span{
    display: inline-block;
    font-size: .14rem;
    color: rgba(255,255,255,.8);
    line-height: .46rem;
    padding-right: .1rem;
}
.H_add-cart em{
    font-style: normal;
    font-size: .18rem;
    line-height: .46rem;
    color: #fff;
}
</style>