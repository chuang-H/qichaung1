<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="https://imgjd6.fruitday.com/images/2017-12-01/54ca2a1c8d3c7f2807ed1d27a48afc0c.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="https://imgjd3.fruitday.com/images/2017-12-15/7b8adb653220c4ff248bcd4567f04542.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="https://imgjd3.fruitday.com/images/2017-12-15/7b8adb653220c4ff248bcd4567f04542.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'LunBo',
    components:{
        swiper,
        swiperSlide
    },
    data () {
        return {
            swiperOption: {
                autoplay: {
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                loop : true
            }
        }
    }
    
}
</script>
<style>
</style>