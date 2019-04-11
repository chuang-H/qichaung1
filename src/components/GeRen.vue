<template>
    <div>
        <!-- 头部 -->
        <div class="nav">
            <div class="back"><router-link to="Mine"><</router-link></div>
            <div class="text">个人信息</div>        
        </div>  
        <!-- 中间 -->
        <div class="main">
            <div class="info-model line"></div>
            <div class="info-model">
                <div class="left">昵称</div>
                <div class="right">小白</div>            
            </div>
            <div class="info-model">
                <div class="left">会员等级</div>
                <div class="right grade"><img src="../assets/old_v0.png"></div>            
            </div>
            <div class="info-model">
                <div class="left">性别</div>
                <div class="right baomi">保密</div>           
            </div>
            <div class="info-model">
                <div class="left">生日</div>
                <div class="right">0</div>          
            </div>
            <div class="info-model">
                <div class="left">地址管理</div>
                <div class="right dizhi"></div>         
            </div>  
        </div>
        <!-- 底部 -->
        <div class="footer">
            <router-link to="onload">退出登录</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GeRen',
    data () {
        return {
        }
    }

}
</script>
<style scoped>

html{
    font-family: Arial,"Microsoft Yahei",sans-serif;
    font-size: 100px;
    margin: 0 auto;
}
body{
    margin: 0;
    font-size: .14rem;
    background: #f5f5f5;
    font-weight: 300;   
}
/*头部*/
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
    display: box;
    border-bottom: .01rem solid #d8d8d8;
}
.back{
    width: .88rem;
    display: inline-block;
}
.back>a{
    text-align: center;
    padding-left: .07rem;
    float: left;
    width: .4rem;
    color: #75a739;
    font-size: .22rem;
    font-family: 宋体;
    font-weight: bold;
    text-decoration: none;
}
.text{
    text-indent: .8rem;
    font-size: .17rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;width:100%;
}
/*身体*/
.main{
    text-align: center;
    margin-top: .46rem;
    background: #fff;
}
.info-model{
    position: relative;
    height: .45rem;
    padding: 0 .1rem;
    line-height: .45rem;
    font-size: .15rem;
    color: #3a3a3a;
    border-bottom: 1px solid #dcdcdc;
    background: #fff;
}
.line{
    height: .84rem;
}
.left{
    float: left;
}
.right{
    float: right;
    color: #bfbfbf;
}
.grade>img{
    width: .2rem;
    height: .2rem;
    margin-top: .125rem;
    display: inherit;
}
.dizhi{
    position: absolute;
    right: .2rem;
    top: 50%;
    content: "";
    width: .09rem;
    height: .09rem;
    border-top: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    -webkit-transform: rotate(45deg) translate(0,-86%);
    transform: rotate(45deg) translate(0,-86%);
    display: block;
}
/*脚部*/
.footer{
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
    /*vertical-align: middle;*/
    text-align: center;
}
.footer a{
    color: #3a3a3a;
    text-decoration: none;
}
</style>