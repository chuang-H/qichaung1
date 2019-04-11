<template>
     <!-- 新增收货地址 -->
    <div class="c_box">
        <!-- 头部 -->
        <div class="c_top">
            <div class="c_head">
                <router-link to="home" class="c_heada"></router-link>
                <div class="c_h1">选择收货地址</div>
                <div class="c_h2"><router-link to="newaddress">新增地址</router-link></div>
            </div>
            <div class="c_head2">
                <span class="c_h3">
                    上海
                    <i></i>
                </span>
                <div class="c_h4">
                    <i></i>
                    <input type="text" name="" value="请输入收货地址">
                </div>
            </div>
            <div class="c_head3">
                <h5>当前地址</h5>
                <div class="c_h5">
                    <div class="c_div">
                        <div class="c_ress">北京市昌平区回龙观街道天阳亲子广场(西三旗店)</div>
                        <div class="c_ress1">
                            <i></i>
                            重新定位
                        </div>
                    </div>
                </div>
            </div>
            <div class="c_head33">
                <h5>附近地址</h5>            
            </div>
            <div class="c_head4">
                <div class="c_h8">
                    <div class="c_data">正在搜索附近地址...</div>
                </div>
                <div class="c_h9">
                    <div class="c_data">更多地址</div>
                    <i></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Addressaaa',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.c_head .c_heada{
    text-decoration: none;
    display: inline-block;
    width: 0.26rem;
    height: 0.28rem;
    background: url(../assets/lvcha.png)no-repeat;
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
    background: url(../assets/jiantou3.png)no-repeat;
    background-size: 80% 80%;
    position: absolute;
    left: 0.53rem;
    top:0.11rem;
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
    height: 0.33rem ;
    border:none;
    background-color: #eee;
    color: #999;
    text-indent: 40px;
    outline: none;
}
.c_h4 i{
    width: 0.14rem;
    height: 0.14rem;
    display: inline-block;
    background: url(../assets/jing.png)no-repeat;
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
    background: url(../assets/mapicon.jpg)no-repeat;
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
    background: url(../assets/向右.png)no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right:0.18rem;
    top:0.2rem;
}
</style>
