<template>
    <!-- 分类页面 -->
	<div class="box1" code="2">
		<div class="top1">
			<div class="top1-main">
				<a href="sousuo/搜索.html">
					<i></i>
				    奇异果
				</a>
			</div>
		</div>
	
		<!-- 果园优选 -->
		<div class="youxuan">
		     <!-- 左侧列表 -->
			<ul class="youxuan1">
				<li class="active" data-id="303" :class="{red1: index==curIndex}" v-for="(item,index) in proList" @click="curIndex=index">{{item.name}}</li>		
			</ul>
			<!-- 右侧列表 -->
			<div class="youxuan2">
				<div class="xuan">
					<h3>果园优选</h3>
					<router-link to="QuanBu" class="x_xuan">全部 <i></i></router-link>
					<router-link to="QuanBu" class="xuan2" v-for="(item,index) in pro" :class="['content', {curContent: 0==curIndex}]" :key="item.name">			
                        <img :src=item.class_photo>
                        <dd>{{item.name}}</dd>
					</router-link>
					<a href="###" @click="push(1==curIndex)" class="xuan2" v-for="item in proto" :class="['content', {curContent: 1==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</a>
					<router-link to="QuanBu" class="xuan2" v-for="item in proto1" :class="['content', {curContent:2==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</router-link>
					<router-link to="QuanBu" class="xuan2" v-for="item in proto2" :class="['content', {curContent:3==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</router-link>
					<router-link to="QuanBu" class="xuan2" v-for="item in proto3" :class="['content', {curContent:4==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</router-link>
					<router-link to="QuanBu" class="xuan2" v-for="item in proto4" :class="['content', {curContent:5==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</router-link>
					<router-link to="QuanBu" class="xuan2" v-for="item in proto5" :class="['content', {curContent:6==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</router-link>
					<router-link to="QuanBu" class="xuan2" v-for="item in proto6" :class="['content', {curContent:8==curIndex}]" :key="item.name">					
                        <img :src=item.image>
                        <dd style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.title}}</dd>
					</router-link>
 				</div>
			</div>
		</div>
		<Footer></Footer>
      <!--   <p>日期:{{date}}</p>
        <p>数量:{{num}}<span @click="add">加</span></p>
        <br> -->
       <!--  <p v-for="item in dataList">   名称:{{item.name}} 
            单价:{{item.price}} 
            <span @click="addPro(item)">   加   </span>数量:{{item.num}}<span @click="subPro(item)">  减  </span>
        </p> -->
	</div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    name: 'Shop',
    components:{
        Footer
    },
    data () {
        return {
        	proList:[],
        	pro:[],
        	proto:[],
            proto1:[],
            proto2:[],
            proto3:[],
            proto4:[],
            proto5:[],
            proto6:[],
            curIndex: 0,
            dataList:[]            
        }
    },
    created(){
        //使用axios插件请求数据
        // 
        this.$http("../../static/tablist.json").then((res)=>{
            this.proList=res.data.data.classOneGroup;
            this.pro=res.data.data.childrenList[0].class3Group;
        });
        //使用axios插件请求数据
        this.$http("../../static/datas.json").then((res)=>{
            this.proto=res.data.data.banner.mainBanners[1].content;
            this.proto1=res.data.data.banner.mainBanners[5].content;
            this.proto2=res.data.data.banner.mainBanners[9].content;
            this.proto3=res.data.data.banner.mainBanners[11].content;
            this.proto4=res.data.data.banner.mainBanners[14].content;
            this.proto5=res.data.data.banner.mainBanners[12].content;
            this.proto6=res.data.data.banner.mainBanners[7].content;
            console.log(res.data.data.banner);
        });
        // 更新日期 使用dispatch带哦用actions中方法
        this.$store.dispatch("set_Date");
        // 获取商品列表
        this.$http.get("../../static/list.json").then((res)=>{
            // console.log(res.data);
            this.dataList=res.data.list;
            var ordeList=this.$store.state.ordeList;
            for(var n=0;n<ordeList.length;n++){
                for(var m=0;m<this.dataList.length;m++){
                    if(ordeList[n].title===this.dataList[m].name){
                        this.dataList[m].num=ordeList[n].num;
                    }
                }
            }
        });
    },
    computed:{
        date(){
            return this.$store.state.date
        },
        num(){
            return this.$store.state.num
        }
    },
    methods:{
        add(){
            // 直接使用mutations中的方法commit
            this.$store.commit("addNum");
            // this.$store.dispatch("add_Num");
        },
        addPro(item){
            // item.num++;
            // 添加到订单
            this.$store.dispatch("add_Pro",item);
        },
        subPro(item){
            if(item.num>0){
                item.num--;
            }
        },
        push(curIndex) {
            this.$router.push({
                path: '/QuanBu/',
                query: {
                    curIndex:curIndex
                }
            })
        }
    }
}
</script>
<style>
.red1{
   color:#65a032;
   border-left:2px solid #65a032;
   background-color: #fff;
}
.content{
    display: none;
}
.curContent{
    display: block;
    color: #333;
    border:none;
}
.x_xuan{
    text-decoration: none;
}

</style>