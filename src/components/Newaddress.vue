<template>
    <!-- 新增收货地址 -->
    <div class="n_address">
        <div class="address-top">
    <div class="back"><router-link to="Addressaaa" class="aaaaa"><</router-link></div>
    <div class="text">新增收货地址</div>
</div>
<div class="address-info">
    <div class="form">
        <span>收货人</span>
        <div class="input-box"><input type="text" placeholder="收货人姓名"></div>
    </div>
    <div class="form">
        <span>收货人手机</span>
        <div class="input-box"><input type="text" placeholder="手机号码"></div>
    </div>
    <div class="form">
        <span>收货地址</span>
        <div class="input-box"><input type="text" placeholder="小区/写字楼/路名"></div>
    </div>
    <div class="form">
        <span></span>
        <div class="input-box"><textarea placeholder="详细地址"></textarea></div>
    </div>
    <div class="form">
        <span>门牌</span>
        <div class="input-box"><input type="text" placeholder="例：71号501室"></div>
    </div>
    <div class="form">
        <span>类型<label>(选填)</label></span>
        <div class="input-box">
            <span><i></i><em>家</em></span>
            <span><i></i><em>公司</em></span>
        </div>
    </div>
</div>
<div class="btnBox">
    <div class="btn">保存并使用</div>
</div>
    </div>
</template>

<script>
export default {
  name: 'Newaddress',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }
    *{
        font-family: Arial,"Microsoft Yahei",sans-serif;
    }
    .address-top{
        width: 100%;
        height: 0.45rem;
        border-bottom: .01rem solid #d8d8d8;
        background: #fff;
        position: relative;
        line-height: 0.45rem;       
    }
    .text{
        width: 100%;
        height: 100%;
        color: #75a739;
        text-align: center;
        font-size: .17rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .aaaaa{
        text-decoration: none;
    }
    .back a{
        display: block;
        font-size: .23rem;
        font-family: "宋体";
        padding-left: 0.15rem;
        color: #75a739;
        font-weight: bold;  
    }
    .back{
        box-sizing: border-box;
        position: absolute;
        width: 0.45rem;
        height: 0.45rem;
        left:0;
        top:0; 

    }
    .address-info{
        padding: 0 .1rem;
        background-color: #fff;
    }
    .form{
        width: 100%;
        height: .44rem;
        font-size: .15rem;
        display: flex;
        line-height: .44rem;
    }
    .form:not(:last-of-type) {
        border-bottom: 1px solid #d8d8d8;
    }
    .form>span{
        display: inline-block;
        width: .85rem;
        font-size: .15rem;
    }
    .input-box{
        flex: 1;
        padding-left: .1rem;
        font-size: .15rem
    }
    .input-box input{
        width: 90%;
        height: .4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
        text-align: left;
        border: none;
        outline: 0;
        background-color: transparent
    }
    .input-box textarea{
        border: none;
        width: 90%;
        outline: 0;
        background-color: transparent;
        word-wrap: break-word;
        margin-top: .02rem;
        padding: .09rem 0;
        height: auto;
        resize: none
    }
    input::-webkit-input-placeholder{
        font-size: .15rem;
    }
    textarea::-webkit-input-placeholder{
        font-size: .15rem;
        font-family:  Arial,"Microsoft Yahei",sans-serif;
    }
    .input-box span{
        margin-right: .23rem;
        height: .42rem;
        line-height: .42rem;
        display: inline-block;
    }
    .input-box span i{
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border: 1px solid #d8d8d8;
        border-radius: 50%;
        color: #fff;
        margin: .09rem .08rem 0 0;
        text-align: center;
        font-size: .17rem;
        float: left;
    }
    .input-box span em{
        float: left;
    }
    .btnBox{
        width: 100%;
        display: flex;
        padding-top: .3rem
    }
    .btn{
        width: 78.6%;
        border-radius: .06rem;
        margin: auto;
        background-color: #bfbfbf;
        font-size: .17rem;
        color: #fff;
        padding: .12rem .2rem;
        text-align: center
    }
</style>
