 <template>
    <!-- 主页页面 -->
    <div class="box" code="1">
        <!-- 头部 -->
        <div class="top" code = "0">
            <!-- 头部 -->
            <div class="top" code = "0">
                <div class="top-left">      
                    <div class="topImg"><img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" title=""></div>
                    <router-link to="Addressaaa" class="hui">回龙观街道</router-link>
                    <i></i>
                    <router-link to="Search" class="top-left222"></router-link>
                </div>
            </div>
        </div>
        <div class="banner">
            <!-- <ul>
                <li><img src="https://imgjd6.fruitday.com/images/2017-12-01/54ca2a1c8d3c7f2807ed1d27a48afc0c.jpg" alt=""></li>
            </ul> -->
            <!-- 轮播图 -->
            <LunBo></LunBo>
        </div>
        <div class="banner1">
        <div class="ban">
          <a href="##">
            <img v-lazy="'https://imgjd6.fruitday.com/images/2017-04-05/9a80964bf0201b57e8e9a4a382205fd7.png'" alt="" title="品牌大仓">
          </a>
        </div>
      </div> 
      <!-- 图片列表 -->
        <ul class="ation">
          <li><router-link to="XinPin"><img src="https://imgqn8.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg" title=""></router-link>
          </li>
          <li><img v-lazy="'https://imgjd6.fruitday.com/images/2017-11-07/e7d6856c1d6007ac64114619c11a6c7b.jpg'" title=""></li>          
        </ul>
        <div class="ation1">
        <ul>
          <li><router-link to="KuaiWei"><img v-lazy="'https://imgjd6.fruitday.com/images/2017-12-07/fc6101fcec277866ea6a3ee3ebfedd63.gif'" title=""></router-link"></li>
        </ul>
      </div>
      <div class="ation2">
        <div class="ation2-left">
          <img v-lazy="'https://imgjd2.fruitday.com/images/2017-09-15/9660d07715fa9eb2949ea2ef11b927eb.jpg'" title="">
        </div>
        <div class="ation2-right">
          <span><img v-lazy="'https://imgjd6.fruitday.com/images/2017-11-02/59e6a71280b833ca91364105ef7954af.jpg'" title=""></span>
          <strong>
            <img v-lazy="'https://imgjd1.fruitday.com/images/2017-09-01/ad5fe9fe4b715ecbffc0efb63b4c8540.jpg'" title="">
          </strong>
        </div>
      </div>
      <!-- 果园热卖 -->
      <div class="guoyuan">
        <a href="##">
          果园热卖
        </a>
      </div>
      <!-- 产品价格 -->
      <div class="guoyuan1">
        <div class="chanpin"> 
          <div class="chanpin2"> 
             <ul>
                <li v-for="item in prop">
                  <div class="c-pin"><a @click="pushInfo(item.title,item.image,item.price,item.volume,item.subtitle,item.num)">
                        <img v-lazy=item.image>
                  </a></div>
                  <p>{{item.title}}</p>
                  <div class="c-pin1">
                    <span class="money">￥{{item.price}}/<em>{{item.volume}}</em></span>
                    <i @click="addPro(item)"></i>
                  </div>
                </li>             
              </ul>
            </div>
        </div>
      </div>
      <!--双12精选专题 -->
      <div class="shuang">
        <a href="##"><img v-lazy="'https://imgqn9.fruitday.com/images/2017-11-30/095ca77a8b541cd6af8bc0c91dd16c14.png'" title="精选专题"></a>
      </div>
      <!--快为天下鲜 -->
      <div class="kuai">
        <router-link to="KuaiWei">
          <img v-lazy="'https://imgjd2.fruitday.com/images/2017-12-07/810267f0827589f2567b8404faf3c543.jpg'" title="">
        </router-link>
      </div>
      <!-- 产品价格 -->
      <div class="guoyuan1">
        <div class="chanpin"> 
          <div class="chanpin2"> 
              <ul>
                <li v-for="item in prop">
                  <div class="c-pin"><a @click="pushInfo(item.title,item.image,item.price,item.volume,item.subtitle,item.num)">
                    <img v-lazy=item.image>
                  </a></div>
                  <p>{{item.title}}</p>
                  <div class="c-pin1">
                    <span class="money">￥{{item.price}}/<em>{{item.volume}}</em></span>
                    <i @click="addPro(item)"></i>
                  </div>
                </li>             
              </ul>
            </div>
        </div>
      </div>
      <!--快为天下鲜 -->
      <div class="kuai">
        <router-link to="KuaiWei">
          <img src="https://imgjd2.fruitday.com/images/2017-12-07/810267f0827589f2567b8404faf3c543.jpg" title="">
        </router-link>
      </div>
      <!-- 产品价格 -->
      <div class="guoyuan1">
        <div class="chanpin"> 
          <div class="chanpin2"> 
              <ul>
                <li v-for="item in prop">
                  <div class="c-pin"><a  @click="pushInfo(item.title,item.image,item.price,item.volume,item.subtitle,item.num)">
                    <img v-lazy=item.image>
                  </a></div>
                  <p>{{item.title}}</p>
                  <div class="c-pin1">
                    <span class="money">￥{{item.price}}/<em>{{item.volume,}}</em></span>
                    <i @click="addPro(item)"></i>
                  </div>
                </li>             
              </ul>
            </div>
        </div>
      </div>
      <!--快为天下鲜 -->
      <div class="kuai">
        <router-link to="KuaiWei">
          <img src="https://imgjd2.fruitday.com/images/2017-12-07/810267f0827589f2567b8404faf3c543.jpg" title="">
        </router-link>
      </div>
      <!-- 产品价格 -->
      <div class="guoyuan1">
        <div class="chanpin"> 
          <div class="chanpin2"> 
              <ul>
                <li v-for="item in prop">
                  <div class="c-pin"><a  @click="pushInfo(item.title,item.image,item.price,item.volume,item.subtitle,item.num)">
                    <img :src=item.image>
                  </a></div>
                  <p>{{item.title}}</p>
                  <div class="c-pin1">
                    <span class="money">￥{{item.price}}/<em>{{item.volume}}</em></span>
                    <i @click="addPro(item)"></i>
                  </div>
                </li>             
              </ul>
            </div>
        </div>
      </div>
        <!--快为天下鲜 -->
        <div class="kuai">
            <router-link to="KuaiWei">
                <img src="https://imgjd2.fruitday.com/images/2017-12-07/810267f0827589f2567b8404faf3c543.jpg" title="">
            </router-link>
        </div>
        <!--双12人气专题 -->
        <div class="shuang">
            <a href="##"><img src="https://imgjd4.fruitday.com/images/2017-11-30/355c00460a39e95b9dcfb7f238567871.png" title="人气推荐"></a>
        </div>
        <div class="renqi" v-for="item in proListp">
                <a  @click="pushInfo(item.title,item.image,item.price,item.volume,item.subtitle,item.num)">
                <div class="img-box"> 
                    <img :src=item.image>
                </div>
                </a>    
                <div class="desc"> 
                    <h5>{{item.title}}</h5> 
                    <p>{{item.subtitle}}</p>  
                    <div class="pice"> 
                        <span class="mone">￥{{item.price}} / <em>{{item.volume}}</em>
                        </span> <i @click="addPro(item)"></i><strong v-if="willShow">{{item.num}}</strong>
                    </div> 
                </div>                             
        </div>
        <div class="kongbai"></div>
        <Footer></Footer>
    </div>     
</template>
<script>
import Footer from '@/components/Footer'
import LunBo from '@/components/LunBo'
export default {
    name: 'Home',
    components:{
        LunBo,
        Footer
    },
    data () {
        return {
            proListp:[],
            prop:[],
            willShow:false    
        }

    },
    created(){
        //使用axios插件请求数据
        this.$http("../../static/bottom.json").then((res)=>{
            this.proListp=res.data.content;
            // this.dataList=res.data.list; 
            var ordeList=this.$store.state.ordeList;
            for(var n=0;n<ordeList.length;n++){
                for(var m=0;m<this.proListp.length;m++){
                    if(ordeList[n].title===this.proListp[m].title){
                        this.proListp[m].num=ordeList[n].num;
                    }
                }
            }         
        });
        //使用axios插件请求数据
        this.$http("../../static/data.json").then((res)=>{
            this.prop=res.data.fruit1;         
            console.log(this.prop);
            var ordeList=this.$store.state.ordeList;
            for(var n=0;n<ordeList.length;n++){
                for(var m=0;m<this.prop.length;m++){
                    if(ordeList[n].title===this.prop[m].title){
                        this.prop[m].num=ordeList[n].num;
                    }
                }
            }      
        }); 
    },
    computed:{
        num(){
             return this.$store.state.num;       
        },
        tol(){
            return this.$store.getters.tol;
            console.log(this.$store.getters.tol)
        }       
    },
    methods:{
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
        pushInfo(title,image,price,volume,subtitle,num) {
            this.$router.push({
                path: '/ShangPin/',
                query: {
                    title:title,
                    subtitle:subtitle,
                    price:price,
                    volume:volume,
                    image:image,
                    num:num
                }
            })
        }
    }
}
</script>
<style>
.pice strong{
    width: 0.2rem;
    display: inline-block;
    height: 0.2rem;
    line-height: 0.2rem;
    position: absolute;
    left: 1.07rem;
    top: 0.024rem;
    color:#3a3a3a;
    text-align: center;
    font-weight: normal;
}
</style>
