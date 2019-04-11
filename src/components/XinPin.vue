<template>
    <div class="a_box">
        <div class="a_top">
            <router-link to="Home" class="a_c"></router-link>
            申请试吃
            <a href="##" class="a_a">试吃规则</a>
        </div>
        <ul class="a_nav">
            <li>
                <a href="###" :class="{color: 0==curIndex}" @click="curIndex=0">本期试吃</a>
            </li>
            <li>
                <a href="###" :class="{color: 1==curIndex}" @click="curIndex=1">往期试吃</a>
            </li>
        </ul>
        <!-- 新品试吃 -->
        <div class="a_zhong" :class="['content', {curContent: 0==curIndex}]"> 
            <div class="a_banner">
                <span class="L_phase">点赞满5得试吃</span>
                <img :src=list.wechat_share_img>
            </div>
            <h2 class="a_name">{{list.product_name}}</h2>
            <h4 class="a_bef">{{list.product_desc}}</h4>
            <!-- 试吃数量，价格，人数 -->
            <section class="a_main">
                <div class="a_left">
                    <div class="a_number">数量：<i id="a_num">{{list.num}}份</i></div>
                    <div class="a_price">原价：<i id="p_price">{{list.product_price}}元</i></div>
                </div>
                <div class="a_right">
                    <h3 class="a_apply">
                        <em class="a_orange">{{list.applycount}}</em><br>人已申请试吃
                    </h3>
                </div>
            </section>
            <!-- 结束时间 -->
            <div class="a_endtime">
                距本期结束 <span id="a_DD" class="a_day">2天</span><span id="HH" class="a_hour">14小时</span><span id="MM" class="a_min">15分</span><span id="SS" class="a_second">3秒</span>
            </div>
            <div class="a_cur">
            <!-- 1、已登录且已申请过 还没有小伙伴 -->
                <h5 class="a_nds">还没有小伙伴来支持过你哟，快去邀请看看吧</h5>
                <i></i>
            </div>
            <div class="a_table"><dl><dt>产地</dt><dd>美国</dd></dl><dl><dt>营养元素</dt><dd>维生素C，果酸，锌，膳食纤维</dd></dl><dl><dt>储藏方法</dt><dd>0°冷藏</dd></dl><dl><dt>水果甜度</dt><dd>12.6-13.5</dd></dl></div>
            <p class="a_p"><img src="https://imgjd4.fruitday.com/up_images/20171211/15129603415686.jpg" _src="https://imgjd4.fruitday.com/up_images/20171211/15129603415686.jpg" style=""></p>
            <p class="a_p"><img src="https://imgjd4.fruitday.com/up_images/20171211/15129603421670.jpg" _src="https://imgjd4.fruitday.com/up_images/20171211/15129603421670.jpg" style=""></p>
            <p class="a_p"><img src="https://imgjd4.fruitday.com/up_images/20171211/1512960344271.jpg" _src="https://imgjd4.fruitday.com/up_images/20171211/1512960344271.jpg" style=""></p>
            <p class="a_p"><img src="http://fdaycdn.fruitday.com/up_images/20170902/15043454656201.jpg" _src="http://fdaycdn.fruitday.com/up_images/20170902/15043454656201.jpg" style=""></p>
            <p class="a_p"><img src="http://fdaycdn.fruitday.com/up_images/20170902/15043454664365.jpg" _src="http://fdaycdn.fruitday.com/up_images/20170902/15043454664365.jpg" style=""></p>      
            <!-- 脚部 -->
            <div class="a_footer" onclick="applyNow();" id="not_apply">
                    分享集赞领试吃
            </div>
        </div>
        <!-- 往期试吃 -->
        <div class="a_zhong1" :class="['content', {curContent: 1==curIndex}]">
            <ul>
                <li v-for="item in proto1">
                    <span class="a_phase">{{item.topic_id}}</span>
                    <router-link to="ShangPin" class="a_ph"><img :src=item.wechat_share_img></router-link>
                    <div class="a_r"><h2>{{item.name}}</h2><h4>原价：<em class="a_prce">{{item.product_price}}</em></h4><a href="fruitday://Guoshi_Activity?id=58" class="a_det">查看详情</a></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'XinPin',
    data () {
        return {
            curIndex: 0,
            list:"",
            proto1:[]
        }
    },
    created(){
        //使用axios插件请求数据
        this.$http("../../static/shichi.json").then((res)=>{
            this.list=res.data.foretaste;
            this.proto1=res.data.goods_list;
            // this.proto2=res.data.data.productGroup3;
            // this.proto3=res.data.data.productGroup4;
            // this.proto4=res.data.data.productGroup5;
            console.log(this.list);
            console.log(this.proto1);
        });
    }
}
</script>
<style scoped>
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
a{
    color:#555;
}
.color{
   color: #FF9933;
   border-bottom: 1px solid #FF9933;
}
.content{
    display: none;
}
.curContent{
    display: block;
    color: #333;
}
.a_box{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.a_top{
    width: 100%;
    height: 0.75rem;
    line-height: 0.85rem;
    text-align: center;
    border-bottom: 1px solid #DCDCDC;
    background: #F2F2F2;
    font-size: 0.2rem;
    position: relative;
}
.a_top .a_c{
    display: inline-block;
    position: absolute;
    left: 14px;
    top:30px;
    background: url(../assets/jiantou.png)no-repeat;
    background-size: 100% 100%;
    width: 22px;
    height: 22px;
}
.L_phase{
    position: absolute;
    left: 0;
    top: 16px;
    padding: 2px 5px;
    font-size: 13px;
    color: #fff;
    border-radius: 0 2px 2px 0;
    background: #65a032;
    z-index: 100;
}
.a_top .a_a{
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 0.14rem 0 0.1rem;
    font-size: 0.13rem;
    color: #333333;
    display: block;
    text-decoration: none;
}
.a_nav{
    width:100%;
    height: 0.38rem;
    line-height: 0.38rem;
    padding: 0 0.3rem;
    border-bottom: 1px solid #DCDCDC;
    background: #F2F2F2;
    list-style: none;
}
.a_nav li{
    float: left;
    width: 44%;
    height: 0.38rem;
    text-align: center;
    border-radius: 0;
    background: none;
    opacity: 1;
    display: block;
    cursor: pointer;
}
.a_nav li a{
    display: inline-block;
    height: 0.36rem;
    line-height: 0.36rem;
    text-decoration: none;
/*    color:#555;*/
    font-size: 0.14rem;
}
/*.a_nav li:first-child a{
    color: #FF9933;
    border-bottom: 1px solid #FF9933;
}*/
/*-------------------------------新品试吃--------------------------*/
.a_zhong{
    width: 100%;
    height: 100%;
    /*display: none;*/
}
.a_banner{
    width: 100%;
    height: 2.62rem;
    position: relative;
}
.a_banner img{
    width: 100%;
    height: 100%;
}
.a_name{
    margin-top: 0.1rem;
    height: 0.22rem;
    line-height: 0.22rem;
    font-size: 0.17rem;
    color: #333333;
    overflow: hidden;
    font-weight: normal;
    text-align: center;
}
.a_bef{
    font-size: 0.12rem;
    height: 0.16rem;
    line-height: 0.16rem;
    color: #999999;
    overflow: hidden;
    font-weight: normal;
    text-align: center;
}
.a_main{
    margin: 15px 30px;
    display: -webkit-box;
    /*width: 100%;*/
    height: 0.5rem;
}
.a_left{
    -webkit-box-flex: 1;
    width: 0;
    padding-right: 30px;
    line-height: 25px;
    text-align: right;
    font-size: 13px;
    color: #333333;
    font-weight: normal;
    border-right: 1px solid #B3B3B3;
}
.a_right{
    -webkit-box-flex: 1;
    width: 0;
    padding-left: 30px;
    line-height: 20px;
    text-align: left;
    font-size: 12px;
    color: #333333;
}
.a_number{
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.a_number i,.a_price i{
    font-style: normal;
}
.a_apply{
    font-weight: normal;
}
.a_apply em{
    line-height: 30px;
    font-size: 26px;
    color: #F6AA00;
    font-style: normal;
}
/*----结束时间---------------*/
.a_endtime{
    padding-bottom: 10px;
    text-align: center;
    font-size: 15px;
    color: #4D4D4D;
    border-bottom: 5px solid #e6e6e6;
}
.a_endtime span{
    padding-left: 10px;
}
.a_cur{
    padding: 10px;
    width: 100%;
    height: 57px;
    position: relative;
}
.a_nds{
    position: relative;
    padding-bottom: 18px;
    text-align: center;
    font-size: 13px;
    color: #999;
}
.a_cur i{
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(../assets/xiangxia.png)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 45%;
    top:35%;
}
.a_table{
    font-family: Calibri,Arial,Helvetica,sans-serif;
    border: 1px solid #d8d8d8;
    color: #333;
}
.a_table dl{
    border-bottom: 1px solid #d8d8d8;
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    font-weight: lighter;
    display: -webkit-box;
    -webkit-box-align: center;
}
.a_table dt{
    width: 86px;
    text-align: left;
    padding: 9px 12px;
}
.a_table dd{
    -webkit-box-flex: 1;
    width: 86px;
    text-align: left;
    padding: 9px 12px;
    margin: 0;
    border-left: 1px solid #d8d8d8;
    padding: 9px 12px;
}
.a_p{
    width: 100%;
    height: 100%;
}
.a_p img{
    width: 100%;
    height: 100%;
}
.a_footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    text-align: center;
    line-height: 55px;
    font-size: 18px;
    color: #fff;
    background: #F6AA00;
    z-index: 1000;
}
/*--------------往期试吃-------------------------*/
.a_zhong1{
    width: 100%;
    height: 100%;
}
.a_zhong1 ul{
    list-style: none;
}
.a_zhong1 li{
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #DCDCDC;
    height: 1.7rem;
    width: 100%;
    position: relative;
    background-color: #fff;
}
.a_phase{
    top: 16px;
    padding: 2px 5px;
    font-size: 13px;
    color: #fff;
    border-radius: 0 2px 2px 0;
    background: #65a032;
    z-index: 100;
    position: absolute;
    left:10px;
    top: 4px;
}
.a_ph{
    width: 42%;
    display: block;
    text-decoration: none;
    color: #fff;
    margin-top:16px;
}
.a_ph img{
    width: 100%;
    height: auto;
    display: block;
}
.a_r{
    position: absolute;
    left: 42%;
    top: 0;
    margin-right: 3%;
    width: 55%;
    height: 100%;
    padding: 10px 0px 0px 12px;
    box-sizing: border-box;
    text-align: left;
}
.a_r h2{
    line-height: 2;
    font-size: 14px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
}
.a_r h4{
    line-height: 1.6;
    font-size: 12px;
    color: #555;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.a_prce{
    font-size: 18px;
    color: #FFA941;
    font-style: normal;
}
.a_det{
    position: absolute;
    left: 12px;
    bottom: 10px;
    width: 24.8%;
    min-width: 84px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 13px;
    color: #fff;
    border-radius: 6px;
    background: #FFA941;
    display: block;
    text-decoration: none;
}
</style>