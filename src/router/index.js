import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Shop from '@/components/Shop'
import Cart from '@/components/Cart'
import ShangPin from '@/components/ShangPin'
import Footer from '@/components/Footer'
import XinPin from '@/components/XinPin'
import KuaiWei from '@/components/KuaiWei'
import QuanBu from '@/components/QuanBu'
import JieSuan from '@/components/JieSuan'
import ZaiXian from '@/components/ZaiXian'
import QiYe from '@/components/QiYe'
import DingDan from '@/components/DingDan'
import Addressaaa from '@/components/Addressaaa'
import Newaddress from '@/components/Newaddress'
import Search from '@/components/Search'
import GeRen from '@/components/GeRen'
import TuiKuan from '@/components/TuiKuan'
import LunBo from '@/components/LunBo'
import Onload from '@/components/onload'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/home',
        name: 'home',
        component: Home           
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/onload',
        name: 'onload',
        component: Onload
    },
    {
        path: '/shangpin/',
        name: 'shangpin',
        component: ShangPin       
    },
    {
        path: '/footer',
        name: 'footer',
        component: Footer       
    },
    {
        path: '/xinpin',
        name: 'xinpin',
        component:XinPin       
    },
    {
        path: '/kuaiwei',
        name: 'kuaiwei',
        component:KuaiWei       
    },
    {
        path: '/quanbu',
        name: 'quanbu',
        component:QuanBu       
    },
    {
        path:"/jiesuan",
        name:"jiesuan",
        component:JieSuan
    },
    {
        path:"/zaixian",
        name:"zaixian",
        component:ZaiXian
    },
    {
        path:"/qiye",
        name:"qiye",
        component:QiYe
    },
    {
        path:"/dingdan",
        name:"dingdan",
        component:DingDan
    },
    {
        path:"/search",
        name:"search",
        component:Search
    },
    {
        path:"/newaddress",
        name:"newaddress",
        component:Newaddress
    },
    {
        path:"/addressaaa",
        name:"addressaaa",
        component:Addressaaa
    },
    {
        path:"/geren",
        name:"geren",
        component:GeRen
    },
    {
        path:"/tuikuan",
        name:"tuikuan",
        component:TuiKuan
    },
    {
        path:"/lunbo",
        name:"lunbo",
        component:LunBo  
    }
    ]
})
