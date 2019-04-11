<template>
    <div id="app">
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
(function (doc, win) {
  var docEl = win.document.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  /**
    * ================================================
    *   设置根元素font-size
    * 当设备宽度为375(iPhone6)时，根元素font-size=50px; 
    × ================================================
    */
  var refreshRem = function () {
    var clientWidth = win.innerWidth
                      || doc.documentElement.clientWidth
                      || doc.body.clientWidth;

    console.log(clientWidth)
    if (!clientWidth) return;
    var fz;
    var width = clientWidth;
    // if(width>414){
    //    width=414;
    // }
    fz = 100 * width / 375;
    docEl.style.fontSize = fz + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);
  refreshRem();

})(document, window);

export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
/*  margin-top: 60px;*/
}

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
/*---------------------------------------------头部-------------------------------------------*/
.banner img{
    width: 100%;
}
.top{
    width:100%;
    height: 0.38rem;
    background-color: #fff;
    position: fixed;
    left:0;
    top: 0;
    z-index: 3;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 3px 0 #ccc;
    /*display: none;*/
}
.top-left{
    position: absolute;
    left: 0;
    right: 0;
    font-weight: 700;
    height: 0.38rem;
    position: relative;
    font-size: 0.14rem;

}
.topImg{
    width: 0.6rem;
    height: 0.3rem;
    margin:0 0 0 0.2rem;
    display: inline-block;
    position: absolute;
    left:0.02rem;
    top:0.11rem;
}
.topImg img{
    width:0.51rem;
    height: 0.15rem;    
}
.hui{
    width:0.8rem;
    height: 0.38rem;
    line-height: 0.38rem;
    display: inline-block;
    margin:0 0 0 0.78rem;
    color: #65a032;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
    color: #65a032;
    text-decoration: none;
}
.top-left i{
    display: inline-block;
    width:0.08rem;
    height:0.07rem;
    position: absolute;
    left:1.52rem;
    top:0.16rem;
    background:url(./assets/jiantou1.png)no-repeat;
    background-size: 100% 100%;
}
.top-left222{
    text-decoration: none;
    display: inline-block;
    width:0.18rem;
    height:0.18rem;
    position: absolute;
    right:0.2rem;
    top:0.1rem;
    background:url(./assets/search.png)no-repeat;
    background-size: 100% 100%;
}
/*-------------------------------收货地址-----------------------------------------------*/
.c_box{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.c_top{
    z-index: 90;
    width: 100%;
    height: 0.9rem;
    background-color: #fff;
    color: #65a032;
}
.c_head{
    color: #65a032;
    height: 0.46rem;
    line-height: .46rem;
    position: relative;
}
.c_head i{
    display: inline-block;
    width: 0.26rem;
    height: 0.28rem;
    background: url(./assets/lvcha.png)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:0.08rem;
    top:0.1rem;
}
.c_h1{
    margin-left: 0.7rem;
    width: 1.91rem;
    height: 0.46rem;
    display: inline-block;
    text-align: center;
    font-size: .17rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.c_h2{
    width: .8rem;
    text-align: right;
    display: inline-block;
    color: #65a032;
    position: absolute;
    right:.08rem;
    top:0;
}
.c_h2 a{
    width: 0.8rem;
    display: inline-block;
    text-decoration: none;
    color: #65a032;
    font-size: .17rem;
}
.c_head2{
    width: 100%;
    height: 0.43rem;
    box-sizing: border-box;
    background-color: #fff;
    padding: 0 .1rem .1rem;
    position: relative;
}
.c_h3{
    position: absolute;
    left:0.16rem;
    top:0;
    display: inline-block;
    width: .8rem;
    color: #3a3a3a;
    font-size: .16rem;
    text-align: center;
    height: .33rem;
    line-height: .33rem;
    background-color: #eee;
    border-right: .01rem solid #dcdcdc;
    border-radius: 4px 0 0 4px;
}
.c_h3 i{
    width: 0.12rem;
    height: 0.14rem;
    display: inline-block;
    background: url(./assets/jiantou3.png)no-repeat;
    background-size: 80% 80%;
    margin-left: 0.08rem;
}
.c_h4{
    width: 70%;
    height: 0.33rem ;
    display: inline-block;
    position: relative;
    background-color: #eee;
    border-radius: .05rem;
    color: #878787;
    font-size: .14rem;
    margin-left: 1.04rem;
    position: relative;
}
.c_h4 input{
    width: 100%;
    outline: none;
    height: 0.33rem ;
    border:none;
    background-color: #eee;
    color: #999;
    text-indent: 40px;
}
.c_h4 i{
    width: 0.14rem;
    height: 0.14rem;
    display: inline-block;
    background: url(./assets/jing.png)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:0.12rem;
    top:0.1rem;
}
.c_head3{
    font-size: .14rem;
    width: 100%;
    height: 0.9rem;
    font-weight: 300;
}
.c_head3 h5,.c_head33 h5{
    margin: 0;
    font-weight: 400;
    background-color: #f5f5f5;
    color: #878787;
    padding: .12rem;
    font-size: .12rem;
}
.c_h5{
    width: 100%;
    height: 0.5rem;
    background: #fff;
}
.c_div{
    border-bottom: .01rem solid #f5f5f5;
    background-color: #fff;
    padding: .15rem .1rem .15rem 0;
    margin: 0 0 0 .1rem;
}
.c_ress{
    width: 70%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .14rem;
    font-weight: 300;
    color:#333;
}
.c_ress1{
    width: .9rem;
    color: #ff8000;
    text-align: right;
    /*padding-left: .1rem;*/
    display: inline-block;
    color: #ff8000;
    position: relative;
}

.c_ress1 i{
    display: inline-block;
    width: 0.18rem;
    height: 0.2rem;
    background: url(./assets/mapicon.jpg)no-repeat;
    background-size: 80% 80%;
    position: absolute;
    left:0.1rem;
    top:0;
}
.c_head4{
    background-color: #fff;
    height: 1rem;
    width: 100%;
}
.c_h8,.c_h9{
    font-size: .14rem;
    font-weight: 300;
    height: 0.5rem;
    width: 100%;
    position:relative;
}
.c_data{
    border-bottom: .01rem solid #f5f5f5;
    background-color: #fff;
    padding: .15rem .1rem .15rem 0;
    margin: 0 0 0 .1rem;
    color:#333;
}
.c_head33{
    font-size: .14rem;
    width: 100%;
    height: 0.4rem;
    font-weight: 300;
}
.c_h9 i{
    width: 0.16rem;
    height: 0.16rem;
    display: inline-block;
    background: url(./assets/向右.png)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right:0.18rem;
    top:0.2rem;
}
/*-------------------------主页--------------------------*/
.main{
    width: 100%;
    height: 100%;
    
}
.box{
    width:100%;
    height: 100%;
    background-color: #f7f7f7;
    /*display: none;*/
}
.banner{
    margin-top: 0.4rem;
    width:100%;
    height: 1.6rem;
    line-height: 1.6rem;
    overflow:hidden;
}
.banner ul{
    list-style: none;
}
.banner li{
    width:100%;
    height: 1.6rem;
    float: left;
}
.banner li img{
    width:100%;
    height: 100%;
}
.banner1{
    width: 100%;
    height:0.36rem;
}
.ban{
    width: 100%;
    height:0.36rem;
}
.ban a{
    width: 100%;
    height:0.36rem;
    text-decoration: none;
}
.ban a img{
    width: 100%;
    height:100%;
}
/*------------------图片列表-----------------------*/
.ation{
    width:100%;
    height:1.08rem;
    display: block;
    list-style: none;
    display: flex;
    padding:0.1rem 0 0.2rem 0;
}
.ation li{

    width: 49%;
    height: 1.08rem;
    margin-right: 0.04rem;
}
.ation li img{
    width: 1.75rem;
    height: 100%;
}
.ation li:first-child{
    margin-left: 0.08rem;
}
.ation1{
    width: 100%;
    height: 1.6rem;
}
.ation1 ul{
    list-style: none;
}
.ation1 li{
    width:100%;
    height: 1.6rem;
    float: left;
}
.ation1 li a{
    width:100%;
    height: 1.6rem;
    text-decoration: none;
    display: inline-block;
}
.ation1 li img{
    width:100%;
    height: 100%;
}
.ation2{
    margin-top: 0.1rem;
    width:100%;
    height: 2.31rem;
}
.ation2-left{
    width: 49.5%;
    float: left;
    border-right:1px solid #e0e0e0;
}
.ation2-left img{
    width: 100%;
    height: 100%;
}
.ation2-right{
    width: 49.5%;
    height: 100%;
    float: right;
}
.ation2-right span,.ation2-right strong{
   display: inline-block;
   width: 100%;
   height: 49%;
}
.ation2-right span img,.ation2-right strong img{
   width: 100%;
   height: 100%;
}
.guoyuan{
    width: 100%;
    height: 0.64rem;
    line-height: 0.64rem;
    text-align: center;
    margin-top: 0.1rem;
    background-color: #fff;
}
.guoyuan a{
    width: 100%;
    text-decoration: none;
    height: 0.64rem;
    font-size: 0.18rem;
    color:#333;
}
.guoyuan1,.chanpin2{
    width: 100%;
    height: 1.7rem;
    background-color: #fff;
    overflow-x: scroll; 
}
.guoyuan1::-webkit-scrollbar{width:0px; height: 0px;}
.chanpin{
    width: 400%;
    height: 1.7rem;
}
.chanpin2 ul{
    list-style: none;
}
.chanpin2 li{
    width: 1.12rem;
    height: 1.7rem;
    float: left;
}
.c-pin{
    width: 0.96rem;
    height: 1rem;
    margin-left:0.04rem;
}
.c-pin a{
   width: 0.96rem;
   height: 1rem;
   display: inline-block;
   text-decoration: none;
}
.c-pin img{
    width: 100%;
    height: 100%;
}
.chanpin2 li p{
    width: 0.96rem; 
    font-size: 0.13rem;
    color: #3a3a3a;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .1rem;
    background-color: #fff;
}
.c-pin1{
    width: 0.96rem;
    height: 0.16rem;
    position: relative;
}
.money{
    display: block;
    font-size: 0.12rem;
    color: #ff8000;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left:0.12rem;
    margin-top: 0.04rem;
}
.c-pin1 em{
    font-style: normal;
    font-size: 0.1rem;
}
.c-pin1 i,.pice i{
    position: absolute;
    top: 50%;
    left: 77%;
    -webkit-transform: translate(-50%,-50%);
    width: 0.24rem;
    height: 0.24rem;
    background: #ff4300 url(./assets/jia.png) no-repeat -0.235rem 0;
    background-size: 200% 100%;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border: 1px solid #e0e0e0;
}
/*-------------------------精选专题-------------------------------*/
.shuang{
   width: 100%;
   height: 0.64rem;
}
.shuang a{
    display: inline-block;
    text-decoration: none;
    width: 100%;
    height: 0.64rem;
}
.shuang a img,.kuai a img{
    width: 100%;
    height: 100%;
}
.kuai{
    width: 100%;
    height: 1.6rem;
}
.kuai a{
    width: 100%;
    height: 1.6rem;
    text-decoration: none;
    display: inline-block;
}
/*---------------------------人气推荐----------------*/
.renqi{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.renqi a{
    display: inline-block;
    text-decoration: none;
}
.img-box{
    float: left;
    width: 1.2rem;
    height: 1.2rem;
    margin:0.15rem 0 0 0.2rem;
}
.img-box img{
    width: 100%;
    height: 100%;
}
.desc{
    float: right;
    width: 1.93rem;
    height: 1.05rem;
    position: relative;
    margin:0.15rem 0 0 0.25rem;
    text-align: left!important;
}
.desc h5{
    color: #3a3a3a;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    font-size: 0.17rem;
}
.desc p{
    color: #878787;
    margin:0.1rem 0 0.4rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 0.19rem;
    font-size: 0.13rem;
}
.pice{
    width: 100%;
    height: 0.21rem;
    position: relative;
}
.pice strong{
    
}
.pice i{
    z-index: 2;
}
.mone{
    display: block;
    color: #ff8000;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.14rem;
}
.mone em{
    font-size: .12rem;
    color: #ff8000;
    white-space: nowrap;
}
/*--------------------空白--------------*/
.kongbai{
    width: 100%;
    height: 1rem;
}
/*---------------------------脚部------------------------------*/
.footer{
    overflow: hidden;
    width: 100%;
    height: 0.42rem;
    position:fixed;
    z-index: 150;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -3px 0 #ccc;
}
.h-foot{
    width: 100%;
    height:  0.42rem;
    display: flex;
}
.h-foot a{
    flex: 1;
    height:0.42rem;
    text-decoration: none;
    color: #898989;
    font-size: 5%;
    text-align: center;
    font-weight: 300;  
    position: relative; 
}
/*.h-foot a:first-child{
    color:#65a032;
}*/
.h-foot1-fsy,.h-foot1-fss,.h-foot1-fgw,.h-foot1-fmy{
    height: 0.42rem;
    width: 100%;
    line-height: 0.64rem;
    position: relative;
}
.h-foot1-fsy>div{
    position: absolute;
    left:38%;
    top:0.02rem;
    width:26%;
    height: 0.2rem;
    background:url(./assets/footer1-1.jpg)no-repeat;
    background-size: 100% 100%;
}
.h-foot1-fss>div{
    background:url(./assets/footer2-1.jpg)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:40%;
    top:0.02rem;
    width:26%;
    height: 0.2rem;
}
.h-foot1-fgw>div{
    background:url(./assets/footer3-1.jpg)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:34%;
    top:0.02rem;
    width:26%;
    height: 0.2rem;
}
.h-foot1-fmy>div{
    background:url(./assets/footer4-1.jpg)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:40%;
    top:0.02rem;
    width:20%;
    height: 0.22rem;
}
/*-------------------------------------分类页面------------------------------------*/
.box1{
    width: 100%;
    height: 100%;
    position: relative;
    /*display: none;*/
}
.top1{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.46rem;
    line-height: .46rem;
    text-align: center;
    background-color: #f8f8f8;
    border-bottom: .01rem solid #d8d8d8;
    z-index: 10;
}
.top1-main{
    margin: .08rem;
    background: #eee;
    border-radius: .04rem;
    color: #878787;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: .12rem;
    position: relative;
}
.top1-main a{
    display: inline-block;
    background: #eee;
    border-radius: .04rem;
    color: #878787;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: .12rem;
    position: relative;
    text-decoration: none;
    width:3.55rem;
}
.top1-main i{
    background: url(./assets/jing.png)no-repeat;
    background-size: 100% 100%;
    height:0.14rem;
    width: 0.14rem;
    display: inline-block;
    position: absolute;
    left:39.2%;
    top:0.09rem;
}
/*-------------------------------果园优选------------------------*/
.youxuan{
    clear: both;
    font-size: .14rem;
    font-weight: 300;
}
.youxuan1{
    position: fixed;
    left: 0;
    top: .47rem;
    width: .8rem;
    background: #f5f5f5;
    text-align: center;
    margin: 0;
    overflow-y: auto;
    height: calc(100% - .89rem);
    list-style: none;
}
.youxuan1 li{
    height: .42rem;
    width: .78rem;
    line-height: .46rem;
    font-size: .15rem;
    border-right: 0;
    padding-left: 2px;
}
.youxuan1 .liulong{
    width: 0.02rem;
    height: 0.42rem;
    display: inline-block;
    background-color: #65a032;
    position: absolute;
    left:0;
    top:0;
}
.youxuan2{
    clear: both;
    font-size: .14rem;
    font-weight: 300;
    width: 100%;
    margin-top:0.47rem;
    background:#fff;
}
.xuan{
    margin-left: .8rem;
    height: 6rem;
    /*padding: .1rem .1rem .18rem .1rem;*/
    position: relative;
    background:#fff;
}
.xuan h3{
    font-weight: 400;
    height: .46rem;
    line-height: .46rem;
    text-align: center;
    margin: 0;
    font-size: .14rem;
}
.x_xuan{
    clear: both;
    display: block;
    text-decoration: none;
    position: absolute;
    top: .07rem;
    right: 0.18rem;
    height: .3rem;
    line-height: .3rem;
    font-size: .12rem;
    color: #878787;
    padding-right: .08rem;
    vertical-align: middle;
}
.x_xuan i{
    display: inline-block;
    width: 0.12rem;
    height: 0.14rem;
    background: url(./assets/向右.png)no-repeat right center;
    background-size: 100% 100%;
    position: absolute;
    right:-0.07rem;
    top:0.08rem;
}
.xuan2{
    width: 33%;
    float: left;
    display: inline-block;
    text-align: center;
    padding-bottom: .2rem;
    background:#fff;
    text-decoration: none;
}
.xuan .xuan2 .xuan8{
    width: 0.75rem;
    height: 0.75rem;
    display: inline-block;
    text-align: center;
    background:#fff;
    text-decoration: none;
}
.xuan2 img{
    width: 0.75rem;
    height: 0.75rem;
}
/*--------------------------购物车----------------------------------*/
.box2{
    width:100%;
    height: 100%;
    display: none;
}
.nav2{
    width:100%;
    height: 0.46rem;
}
.nav2-left{
    width: 0.88rem;
    height: 0.43rem;
    color: #76a741;
    display: inline-block;
    position: relative;
}
.nav2-left span{
    width: 0.22rem;
    height: 0.22rem;
    position: absolute;
    left:0.14rem;
    top:0.1rem;
    display: inline-block;
    background: url(./assets/jiantou.png)no-repeat;
    background-size: 100% 100%;
}
.nav2-main{
    width: 1.89rem;
    line-height: 0.46rem;
    display: inline-block;
    text-align: center;
    font-size: .17rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #76a741;
}
.nav2-right{
    margin: 0 0.1rem 0 0;
    width: 0.8rem;
    height: 0.46rem;
    float: right;
    color: #76a741;
    /*font-size: 0.15rem;*/
    text-align: right;
    line-height: 0.46rem;
}
/*-----------------------未登录的购物车---------------------*/
/*空购物车*/
.s_shoppingCart{
    width:100%;
    text-align: center;
    position: relative;
}
.sss_back{
    width: 0.24rem;
    height: 0.24rem;
    position: absolute;
    left:0.1rem;
    top:0.12rem;
}
.sss_back a img{
    width: 0.2rem;
    height: 0.2rem;
    margin:0;
}
.s_top{
    width:100%;
    height:0.45rem;
    line-height:0.45rem;
    text-align: center;
    font-size:0.17rem;
    color:#75a379;
    border-bottom:1px solid #d8d8d8;
    box-sizing:border-box;
}
.s_shoppingCart img{
    width:2.25rem;
    height:1.49578rem;
    margin:1.05rem 0.75rem 0 0.75rem;
}
.s_rightGoods{
    width:100%;
    height:0.5rem;
    line-height:0.5rem;
    text-align: center;
    font-size:0.15rem;
    color:#3a3a3a;
}
.s_shoppingCart>a{
    height:0.17rem;
    color:#f93;
    font-size: 0.16rem;
    text-decoration: none;
    margin:0 auto;
}

/*---------------------------我的果园----------------------*/
.box3{
    width:100%;
    height: 100%;
    background: #f5f5f4;
}
.w_top{
    width:100%;
    height: 1.9rem;
    background: #f5f5f4;
}
.w_left{
    position: relative;
    padding: .3rem .15rem .3rem .2rem;
    height: 0.6rem;
    font-size: .14rem;
    font-weight: 300;
    text-align: left!important;
}
.w_left1{
    display: inline-block;
    position: relative;
    height: .6rem;    
    width: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
}
.w_left1 a{
    display: inline-block;
    height: .6rem;    
    width: 0.6rem;
    line-height: 0.6rem;
    text-decoration: none;
}
.w_left1 img{
    width: .2rem;
    height: .2rem;
    margin: 0.4rem .15rem 0 0.4rem;
}
.w_left2{
    display: inline-block;
    margin: 0 0 0 0.15rem;
    width: 1.4rem;
    height: 0.53rem;
}
.w_left2 h2{
    width: 1.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 .24rem;
    line-height: 1;
    font-size: .18rem;
    font-weight: 400;
    color: #3a3a3a;
}
.w_left2 a{
    position: relative;
    width: .7rem;
    height: .18rem;
    font-size: .11rem;
    color: #fff;
    line-height: .18rem;
    text-align: center;
    vertical-align: top;
    border-radius: .86rem;
    display: inline-block;
    z-index: 10;
    text-decoration: none;
    background: #f6d04b;
}
.w_left3{
    display: inline-block;
    width: 0.38rem;
    height: 0.3rem;
    position: absolute;
    right:0.18rem;
    top:0.42rem;
}
.w_left3 i{
    display: inline-block;
    margin: 0 0 0 0.04rem;
    width:.3rem;
    height: .3rem;
    color: #878787;
    background: url(./assets/erweima.png)no-repeat;
    background-size: 100% 100%;
}
.w_left3 span{
    font-size: .1rem;
    font-weight: 300;
    text-align: center;
    color: #878787;
}
.w_right{
    width: 100%;
    list-style: none;
    height: 0.54rem;
    display: flex;
}
.w_right li{    
    height: 0.54rem;
    text-align: center;
    flex: 1;
}
.w_right li a{
    padding: .1rem 0;
    display: block;
    text-decoration: none;
}
.w_name{
    display: block;
    position: relative;
    color: #000;
    font-size: .13rem;
}
.w_vlue{
    color: #ff7e05;
    font-size: .15rem;
    font-weight: 700;
    display: block;
}
/*--------------我的果园中间部分--------------*/
.w_main{
    width: 100%;
    height: 4.7rem;
}
.w_main1{
    position: relative;
    height: .44rem;
    line-height: .44rem;
    border-bottom: 1px solid #ece9e5;
    background: rgba(255,255,255,.6);
    padding: 0 .24rem 0 .1rem;
    text-align: left!important;
}
.w_main1 a{
    height: .44rem;
    line-height: .44rem;
    display: inline-block;
    width: 100%;
    text-decoration: none;
}

.w_main1 i{
    vertical-align: middle;
    font-size: .24rem;
    color: #878787;
    width: 0.24rem;
    height: 0.24rem;
    display: inline-block;
    background: url(./assets/minedd.jpg)no-repeat;
    background-size:100% 100%;
}
.w_tle{
    font-size: .14rem;
    color: #3a3a3a;
    padding-left: .1rem;
}
.w_tle2{
    font-size: .13rem;
    color: #878787;
    line-height: .44rem;
    float: right;
}
.w_main1 strong,.w_main3 strong{
    position: absolute;
    right:0.1rem;
    top:36%;
    width: 0.13rem;
    height: 0.13rem;
    display: inline-block;
    background: url(./assets/jiantou2.png)no-repeat;
    background-size:100% 100%;
}
.w_main2{
    width: 100%;
    height: 0.8rem;
    list-style: none;
    display: flex;
    background: rgba(255,255,255,.6);
}
.w_main2 li{
    padding: .22rem 0 .12rem 0;
    text-align: center;
    height:0.46rem;
    flex: 1;
    text-align: center;
}
.w_main2 li a{
    height:0.46rem;
    display: inline-block;
    text-decoration: none;
    width: 100%;
}
.w_text{ 
    width: 0.22rem;
    height: 0.25rem;
    display: block;
    background: url(./assets/dd-1.jpg)no-repeat;
    background-size:100% 100%;
    margin-left:0.26rem;
}
.w_text1{
    padding-top: .05rem;
    font-size: .12rem;
    color: #3a3a3a;
    display: block;
}
.w_main2 li:nth-child(2) .w_text{
    background: url(./assets/dd-2.jpg)no-repeat;
    background-size:100% 100%;
}
.w_main2 li:nth-child(3) .w_text{
    background: url(./assets/dd-3.jpg)no-repeat;
    background-size:100% 100%;
}
.w_main2 li:nth-child(4) .w_text{
    background: url(./assets/dd-4.jpg)no-repeat;
    background-size:100% 100%;
}
.w_main2 li:nth-child(5) .w_text{
    background: url(./assets/dd-5.jpg)no-repeat;
    background-size:100% 100%;
}
.w_main3{
    position: relative;
    height: .44rem;
    line-height: .44rem;
    border-bottom: 1px solid #ece9e5;
    background: rgba(255,255,255,.6);
    padding: 0 .24rem 0 .1rem;
    color: #3a3a3a;
    overflow: hidden;
    vertical-align: middle;
}
.w_main3 i{
    width: 0.22rem;
    height: 0.25rem;
    display:inline-block;
    background: url(./assets/huiyuan.jpg)no-repeat;
    background-size:100% 100%;
    position: absolute;
    left:0.2rem;
    top:15%;
}
.w_main3 a{
    width: 100%;
    text-decoration: none;
    color: #3a3a3a;
    height: .44rem;
    line-height: .44rem;
    display: inline-block;
    text-align: left!important;
}
.w_main3:nth-of-type(2) i{
    background: url(./assets/qiyegou.jpg)no-repeat;
    background-size:100% 100%;
}
.w_main3:last-child i{
    background: url(./assets/zaixiankefu.jpg)no-repeat;
    background-size:100% 100%;
}
.w_pull{
    font-size: .13rem;
    color: #878787;
    line-height: .44rem;
    float: right;
}
.w_te{
    font-size: .14rem;
    color: #3a3a3a;
    padding-left: .1rem;
    margin-left: 0.35rem;
}
.kongbai{
    width: 100%;
    height: 0.1rem;
    background: rgba(242,242,242,.6);
}

/*-------------购物车-----------------------*/
li{
    list-style: none;
}
/*---------购物车---------*/
body{
    background:#f5f5f5;
}
.s_shoppingCart2{
    width:100%; 
    background:#f5f5f5;
}
.s_top2{
    width:100%;
    background:#fff;
    height:0.45rem;
    line-height:0.45rem;
    font-size:0.17rem;
    color:#76a741;
    border-bottom:1px solid #d8d8d8;
    box-sizing:border-box;
    position: fixed;
    top:0;
    left:0;
    z-index: 2;
}
.s_back{
    width:0.88rem;
    height:0.43rem;
    line-height:0.43rem;
    float:left;
}
.s_back a{
    width:0.2rem;
    height:0.2rem;
    padding-left:10px;
    display: block;
    margin-top:0.075rem;
}
.s_back a img{
    width:100%;
    height:100%;
    background-size:100% 100%;
}
.s_shopping{
    width:1.99rem;
    font-size:0.17rem;
    display: inline-block;
    text-align: center;
    float:left;
}
.s_text{
    float:right;
    width:0.8rem;
    padding-right:8px;
    box-sizing: border-box;
    font-size: 0.14rem;
    text-align: right;
}
/*-----------------------------deo -------------------*/
.address{
    width:100%;
    height:0.8rem;
    background: url(./assets/border.png) repeat-x,#fff;
    margin-top:0.45rem;
}
.addre{
    min-height: .4rem;
    padding: .2rem 0;
    display: -webkit-box;
    position: relative;
}
.addre i{
    width: 0.15rem;
    height: 0.18rem;
    position: absolute;
    left:0.16rem;
    top:37%;
    display: inline-block;
    background: url(./assets/mapicon.jpg)no-repeat;
    background-size: 100% 100%;
}
.infor{
    color: #3a3a3a;
    width: 3.05rem;
    height: 0.43rem;
    margin:0 0 0 0.44rem;
}
.name{
    font-size: .18rem;
    color: #4b4b4b;
    margin-right: .1rem!important;
    line-height: .22rem;
    width: 0.54rem!important;
}
.tele{
    font-size: .18rem;
    color: #4b4b4b;
    margin-right: .1rem;
    line-height: .22rem;
}
.tag{
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
.infor p{
    color: #878787;
    font-size: .14rem;
    line-height: .16rem;
    margin-top: .05rem;
    text-align: left;
}
.addre .icon2{
    position: absolute;
    right:0.2rem;
    top: 37%;
    width: 0.18rem;
    height: 0.2rem;
    display: inline-block;
    background: url(./assets/向右.png)no-repeat;
    background-size: 100% 100%;
}
.s_border{
    height:0.02rem;
    width:100%;
    background: url(./assets/border.png) repeat-x,#fff;
    margin-bottom:0.1rem;
}
/*------------------------------------------------------*/
.s_aa{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    background: url(./assets/border.png) repeat-x,#fff;
    margin-top:0.45rem;
}
.s_al{
    padding:0.1rem;
    display: inline-block;
    float:left;
}
.s_at{
    display: inline-block;
    width:3.05rem;
    color:#3a3a3a;
    float:left;
    font-size: 0.14rem;
}
.s_ax{
    display: inline-block;
    float:right;
    margin-top:0.1rem;
}
.s_sl{
    background:#fff;
    width:100%;
}
.s_sl>p{
    width:3.55rem;
    padding:0.1em;
    height:0.3rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
    color:#878787;
}
.s_sl>p>span:first-child{
    float: left;
}
.s_sl>p>span:last-child{
    float: right;
}
.s_item{
    border-top:1px solid #d8d8d8;
    padding:0.1rem;
    width:3.55rem;
    height:0.9rem;
    position:relative;
    -webkit-transition:all .2s linear;
    position: relative;
}

@font-face {
    font-family:iconfont;
    /*//src:url(./assets/iconfont.eot?t=1504089129223);*/
    src:url(./assets/iconfont.woff) format("woff");
}
.s_item>i{
    display: inline-block;
    width:0.16rem;
    height:0.16rem;
    background:#ff8000;
    border-radius: 50%;
    font-size:0.14rem;
    color:#fff;
    position: relative;
    top:45%;
    float:left;
    font-family: iconfont!important;
}
.s_item>i:before{
    content: "\e624";
}
.s_fl{
    float:left;
    width:;
    height:;
}
.s_img{
    width:0.9rem;
    height:0.9rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    float:left;
}
.s_img>img{
    width:100%;
    height:100%;
    background-size: 100% 100%;
}
.s_fruits{
    width:2.29rem;
    height:0.9rem;
    float:left;
}
.s_fruitss{
    height:0.3rem;
    line-height: 0.3rem;
    border:5px solid transparent;
    margin-bottom:0.1rem;
    font-size: 0.14rem;
    color:#3a3a3a;
    text-align: left!important;
}
.weight{
    color:#878787;
    font-size: 0.12rem;
    text-align: left!important;
    margin-left: 0.05rem;
}
.s_weight1{
    margin-right:0.1rem;
}
.s_moneies{
    height:0.21rem;
    color:#ff8000;
    font-size:0.18rem;
    text-align: left!important;  
}
.s_moneies1{
    margin-left:0.1rem;
    background:#ff8000;
    font-size: 0.12rem;
    border-radius: 2px;
    color:#fff;
}
.s_gwc{
    width:1.02rem;
    height:0.4rem;
    line-height: 0.4rem;
    position:absolute;
    text-align: center;
    position: absolute;
    right:0.1rem;
    top:0.6rem;
}
.s_num{
    width:0.2rem;
    height:0.4rem;
    line-height: 0.5rem;
    vertical-align: bottom;
    display: inline-block;
    color:#3a3a3a;
    float:left;
    margin-left: 3px;
    font-size: 0.16rem;
}
.s_add{
    width:0.4rem;
    height:0.4rem;
    line-height: 0.4rem;
    display: inline-block;
    float:left;
}
.s_minus{
    width:0.4rem;
    height:0.4rem;
    display: inline-block;
    position: absolute;
    right:0;
    top:-0.02rem;
}
.s_add>i, .s_minus>i{
    width:0.2rem;
    height:0.2rem;
    display: inline-block;
    text-align: center;
    color:#ff8000;
    vertical-align: middle;
}
.s_add>i img{
    width: 0.24rem;
    height: 0.24rem;
}
.s_minus>i img{
    width: 0.3rem;
    height: 0.28rem;
}
.s_balance{
    width:100%;
    height:0.5rem;
    line-height:0.5rem;
    position:fixed;
    left:0;
    bottom:0.42rem;
    background:#fff;
    box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);
}
.s_sa{
    font-size: 0.12rem;
    color:#878787;
    float:left;
}
.s_sa i{
    font-size: 0.14rem;
    background-color:#ff8000;
    border:0.01rem solid #ff8000;
    margin:0 0.05rem 0 0.1rem;
    color:#fff;
    width:0.14rem;
    height:0.14rem;
    line-height: 0.14rem;
    border-radius: 100%;
    text-align: center;
    font-family: iconfont!important;
}
.s_sa>i:before{
    content: "\e624";
}
.s_hj{
    width:2.1rem;
    height:0.23rem;
    margin-right:0.01rem;
    float:left;
    font-size: 0.12rem;
    color:#878787;
    text-align: right;
}
.s_js{
    width:1rem;
    background:#ff8000;
    color:#fff;
    font-size: 0.16rem;
    text-align: center;
    float:right;
    display: inline-block;
    text-decoration: none;
}
.s_js i{
    font-style: normal;
}
</style>
