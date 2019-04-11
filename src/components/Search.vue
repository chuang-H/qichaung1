<template>
    <!-- 首页 搜索 -->
    <div class="d_box">
        <div class="d_top">
            <div class="d_t1">
                <i></i>
                <router-link to="home">返回</router-link>
            </div>
            <div class="d_t2">
                <i></i>
                <input type="text" id="searchInput" placeholder="新鲜水果、生鲜" ref="proName" v-model="show.proName">
            </div>
            <div class="d_t3">搜索</div>
        </div>
        <div class="d_main">
            <div class="d_hot">
                <div class="d_t4">热门搜索</div>
                <div class="d_t5">  
                    <a href="javascript:;">橙</a> 
                    <a href="javascript:;">提子</a> 
                    <a href="javascript:;">樱桃</a> 
                    <a href="javascript:;">苹果</a> 
                    <a href="javascript:;">火龙果</a>  
                    <a href="javascript:;">瓜</a>  
                    <a href="javascript:;">羊蝎子</a>  
                    <a href="javascript:;">雪花鲳</a>  
                    <a href="javascript:;">奇异果</a>  
                </div>
            </div>
        </div>
        <div class="tab"></div>
        <div class="d_tttt5">搜索结果</div>
        <ul style="width: 60%;">
            <li v-for="item in list" style="margin:.1rem ;font-size:.12rem;text-align: center;border:1px solid #efefef"><img :src="item.image" style="width:100%;margin-top: .2rem;"><br> {{item.title}} </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
        show:{
            proName:""
        },
        list:[]
    }
  },
    watch:{
        show:{
            // ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
            // handler 管理
            handler(val, oldval) {
               var valLog =  this.$refs.proName.value;
               this.$http.get("./static/bottom.json").then( (res)=> {
                console.log(res.data);
                var  save = res.data.content;
                var  put = [];
                if(this.$refs.proName.value != ""){
                 for(var n =0; n< save.length; n++) {
                   if(save[n].title.indexOf(valLog) != -1) {
                        put.push(save[n])
                   }
                 }
                 this.list = put;
                } else if(this.$refs.proName.value == ""){
                  this.list = [];
                }
               })
                
            },
            deep:true    //深度查询
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
    background-color: #fff;
}
.tab{
    width: 100%;
    height: .05rem;
    background:#efefef;
    margin-top: .2rem;
}
.d-box{
    
    width: 100%;
    height: 100%;
}
.d_top{
    width: 100%;
    height: 0.33rem;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
    padding: .1rem 0;
}
.d_t1{
    color: #64a131;
    font-size: .14rem;
    width: auto;
    height: .33rem;
    margin-right: .06rem;
    float: left;
    width: 0.5689rem;
    height: 0.32rem;
    position: relative;
}
.d_t1 i{
    display: inline-block;
    width: 0.18rem;
    height: 0.22rem;
    background: url(../assets/jiantou.png)no-repeat;
    background-size: 80% 80%;
    position: absolute;
    left:0.1rem;
    top:0.08rem;
}
.d_t1 a{
    text-decoration: none;
    color: #64a131;
    font-size: .14rem;
    line-height: 0.32rem;
    margin-left:0.26rem;
}
.d_t2{
    float: left;
    position: relative;
    background-color: #eee;
    border-radius: .05rem;
    color: #878787;
    font-size: .14rem;
    height: 0.33rem;
    width: 2.72rem;
}
.d_t2 input{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 0 .3rem 0 0;
    height: .32rem;
    background-color: transparent;
    border: medium none;
    outline: medium none;
    margin-left: 0.35rem;
    font-size: 0.14rem;
}
.d_t2 i{
    display: inline-block;
    width: 0.18rem;
    height: 0.2rem;
    background: url(../assets/jing.png)no-repeat;
    background-size: 80% 80%;
    position: absolute;
    left:0.1rem;
    top:0.08rem;
}
.d_t3{
    box-sizing: border-box;
    height: .32rem;
    line-height: .32rem;
    color: #64a131;
    font-size: .14rem;
    padding: 0 .06rem;
    white-space: nowrap;
    width: 0.4rem;
    float: right;
}
.d_main{
    width: 100%;
    padding: 0 .1rem;
    height: 100%;
    background-color: #fff;
}
.d_hot{
    margin-top: .2rem;
    height: 1.16rem;
    width: 100%;
}
.d_t4{
    color: #878787;
    font-weight: lighter;
    margin-bottom: .05rem;
    font-size: .14rem;
    text-align: left;
}
.d_tttt5{
    color: #878787;
    font-weight: lighter;
    margin:0.05rem  0  0.05rem 0.1rem ;
    font-size: .14rem;
    text-align: left;
}
.d_t5{
    margin-left: -.04rem;
    margin-right: -.04rem;
}
.d_t5 a{
    color: #3a3a3a;
    display: inline-block;
    padding: .07rem .08rem;
    margin: .1rem .04rem 0;
    background-color: #f1f1f1;
    border-radius: .05rem;
    max-width: 1.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    font-size: .14rem;
    font-weight: 300;
}
</style>
