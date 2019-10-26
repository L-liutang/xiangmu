<template>
<div class="shop_all">
    <table></table>
    <div class="shop_tab"> 
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="智能手机" name="first">
        <div class="shop_tabe">
            <a href="" >全部</a>
            <a href="">iQOO</a>
            <a href="">NEX系列</a>  
            <a href="">X系列</a> 
            <a href="">S系列</a> 
            <a href="">Z系列</a> 
            <a href="">Y系列</a> 
            <a href="">U系列</a>  
        </div>
        </el-tab-pane>
        <el-tab-pane label="配件产品" name="second">
             <div class="shop_tabe">
            <a href="">全部</a>
            <a href="">充电</a>
            <a href="">配件</a>  
            <a href="">音乐</a> 
            <a href="">智能</a> 
            <a href="">摄影</a> 
            <a href="">生活</a> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="服务" name="third">
            <div class="shop_tabe">
            <a href="">全部</a>
            <a href="">碎屏保</a>
            <a href="">后盖保</a>  
            <a href="">延保</a> 
            </div>
        </el-tab-pane>
    </el-tabs>
    </div>
    <table></table>
    <div class="shop_list">
        <ul>
            <li v-for="(item,i) of list" :key="i"> 
                <a href="">
                    <img  :src="item.url" alt="">
                </a>
                <div class="content">
                <P class="title">{{item.title}}</P>
                <P class="letter">{{item.letter}}</P>
                <P class="price">{{item.price}} </P>
                </div>
            </li>
        </ul>
    </div>
    <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="100">
</el-pagination>
    </div>
</div>
</template>
<script>
export default {
     data(){
      return {
        activeName:'second',
        list:[{url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                 {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                {url:require("../../../static/shop1.png"),title:"NEX 3 5G版 8GB+256GB 深空流光",letter:"【享24期免息，限时赠半年碎屏宝】5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充",price:"￥5698.00"},
                ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
   @import "../../assets/shopList.css"
</style>


