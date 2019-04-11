<template>
    <!-- 首页 分类 购物车 我的果园 -->
    <footer class="footer">
        <div class="h-foot">
            <router-link to="home" code="1"><div class="h-foot1-fsy"><div class="fsy"></div>首页</div></router-link>
            <router-link to="shop" code="2"><div class="h-foot1-fss"><div class="fss"></div>分类</div></router-link>
            <router-link to="cart" code="3" class="h-f"><div class="h-foot1-fgw"><div class="h-jj"></div>购物车</div><span>{{tol}}</span></router-link>
            <router-link to="mine" code="4" v-if="isShow"><div class="h-foot1-fmy"><div class="fmy"></div>我的果园</div></router-link>
            <router-link to="Onload" code="4" v-else><div class="h-foot1-fmy"><div class="fmy"></div>我的果园</div></router-link>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            isShow:true
        }
    },
    created:function(){
        this.isShow = sessionStorage.favour;
    },
    computed:{
        tol(){
            return this.$store.getters.tol;
        }
    }
}
</script>
<style>
.h-f span{
    width: 0.15rem;
    height: 0.15rem;
    line-height: 0.18rem;
    display: inline-block;
    background-color: #f74646;
    position: absolute;
    left: 0.54rem;
    top: 0.03rem;
    border-radius:50%;
    color:#fff;
}
.router-link-active .fsy{
    background:url(../assets/footer1-2.jpg)no-repeat;

}
.router-link-active .h-foot1-fsy{
    color:#65a032;
}
.router-link-active .fss{
    background:url(../assets/footer2-2.jpg)no-repeat;

}
.router-link-active .h-foot1-fss{
    color:#65a032;
}

.router-link-active .h-jj{
    background:url(../assets/footer3-2.jpg)no-repeat;

}
.router-link-active .h-foot1-fgw{
    color:#65a032;
}
.router-link-active .fmy{
    background:url(../assets/footer4-2.jpg)no-repeat;

}
.router-link-active .h-foot1-fmy{
    color:#65a032;
}

</style>