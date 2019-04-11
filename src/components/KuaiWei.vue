<template>
   <div class="e_box">
        <a href="">
            <img class="lazy" src="https://activecdn.fruitday.com/active_5a2fce40bd101.gif" data-original="https://activecdn.fruitday.com/active_5a2fce40bd101.gif" alt="" style="display: block;">
        </a>
        <a href="##">
            <img class="lazy" src="https://activecdn.fruitday.com/active_5a2f96a37adf4.jpg" data-original="https://activecdn.fruitday.com/active_5a2f96a37adf4.jpg" alt="" style="display: block;">
        </a>
        <a href="##">
            <img class="lazy" src="https://activecdn.fruitday.com/active_5a2f9843db7fb.jpg" data-original="https://activecdn.fruitday.com/active_5a2f9843db7fb.jpg" alt="" style="display: block;">
        </a>
        <div class="e_top">
            <div class="e_nav"  v-for="item in proListp">
                <a href=""><img class="lazy" :src=item.image alt=""></a>
                <div class="e_main">
                    <h2>{{item.title}}</h2>
                    <h4>{{item.subtitle}}</h4>
                    <div class="e_add">
                        <span class="m_price">￥<i class="big">{{item.price}}</i>/ {{item.volume}}</span>
                         <a href="##" class="e_left"><img src="https://huodongcdnws.fruitday.com/sale/160801-template-cms/images/cart2.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KuaiWei',
    data () {
        return {
            proListp:[]
        }
    },
    created(){
        //使用axios插件请求数据
        this.$http("../../static/data.json").then((res)=>{
            this.proListp=res.data.fruit2;
            console.log(this.proListp);  
        });      
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding: 0;
}
html{
    font-size: 100px;
}
body{
    font-size: 16px;
}
.e_box{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.e_box a{
    text-decoration: none;
}
.e_box a img{
    width: 100%;
    height: 100%;
}
.e_top{
    width: 100%;
    background-color: #FFFFFF;
    clear: both;
}
.e_nav{
    width: 100%;
    border-bottom: 1px solid #eee;
    background: #fff;
    height: 1.3rem;
    position: relative;
}
.e_nav a{
    width: 1.2986rem;
    height: 1.0986rem;
    float: left;
    padding:0.1rem;
    text-decoration: none;
}
.e_nav a img{
    width: 100%;
    height: 100%;
}
.e_main{    
    float: right;
    width: 2.01rem;
    height: 1rem;
    padding: 0.15rem 0.1rem 0.1rem;
}
.e_main h2{
    font-size: 0.17rem;
    color: #3A3A3A;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
}
.e_main h4{
    font-size: 0.14rem;
    color: #878787;
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.e_add{
    width: 2.21rem;
    height: 0.21rem;
    margin-top: 18%;
    font-size: 0.12rem;
    color: #FF8000;
    position: relative;
}
.m_price{
    width: 1.01rem;
    height: 0.21rem;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.m_price .big{
    font-style: normal;
    font-size: 0.16rem;
}
.e_nav .e_main .e_left{
    color: #BFBFBF;
    z-index: 10;
    display: inline-block;
    width: 0.26rem;
    height: 0.26rem;
    position: absolute;
    right: 0.3rem;
    top:-0.11rem;
}
.e_nav .e_main .e_left img{
    width: 100%;
    height: 100%;
}
</style>