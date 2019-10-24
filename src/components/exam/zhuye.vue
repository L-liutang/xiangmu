<template>
    <!--最外层div-->
    <div class="all">
        <table></table>
        <!--轮播图-->
        <div class="all_lunbo">
            <el-carousel :interval="5000" arrow="always" height="526px">
            <el-carousel-item v-for="item in pic" :key="item.id">
            <img :src="item.url" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
        <!--第一行div-->
        <div class="wrapper">
            <div class="wrapper-list">
                <div class="box-list">
                    <div class="box">
                        <router-link to="">
                            <img src="../../../static/box1.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="box">
                        <router-link to="">
                            <img src="../../../static/box2.jpg" alt="">
                        </router-link>    
                    </div>
                    <div class="box">
                        <router-link to="">
                            <img src="../../../static/box3.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="box">
                        <router-link to="">
                            <img src="../../../static/box4.jpg" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--v抢购-->
        <div class="wrapper">
            <div class="info">
                <div class="draw">
                <img src="../../../static/box5.png" alt="">
                <span></span>
                </div>
             </div>
            <div class="v">
                <span></span>
                <span></span>
                <div>
                   <ul class="line">
                       <li class="line-first" v-for="(item,i) of v_list" :key="i">
                           <div>
                               <img class="yh" :src="item.url_yh" alt="">
                            <router-link to="">
                                <img class="vp" :src="item.url" alt="">
                            </router-link>
                           </div>
                           <div class="write">
                               <p class="name">{{item.title}}</p>
                               <p class="desc">{{item.letter}}</p>
                               <div class="price">
                                  <span class="text">￥</span>
                                  <span class="text">{{item.price_first}}</span>
                                  <span class="text-disabled-first">￥</span>
                                  <span class="text-disabled">{{item.price_second}}</span>
                               </div>
                           </div>
                       </li>
                   </ul>
                </div>
            </div>
         </div>
         <!--专区-->
         <div class="zq">
             <!--热卖专区-->
            <div class="hot">
                <div class="hot_zq">
                    <p class="sub">热卖专区</p>
                </div>
                <ul class="hot_list">
                    <li class="hot_first" v-for="(item,i) of h_list" :key="i">
                        <div class="hot_box">
                            <router-link to="">
                                <img :src="item.url" alt="">
                            </router-link>
                        </div>
                        <div>
                            <div class="hot_title">
                                <p>{{item.title}}</p>
                            </div>
                            <div class="hot_letter">
                                <p>{{item.letter}}</p>
                            </div>
                            <div class="hot_price">
                                <p>{{item.price}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!--手机专区-->
            <div class="phone">
                <div class="bt_zq">
                    <p class="sub">精品手机</p>
                </div>
                <ul class="bt_first">
                    <li class="bt_box">
                        <router-link to="">
                            <img src="../../../static/bt1.jpg" alt="">
                        </router-link>
                    </li>
                    <li class="bt_box_first" v-for="(item,i) of bt_list" :key="i">
                        <div class="box_first">
                            <img :src="item.url" alt="">
                        </div>
                        <div>
                            <div class="bt_title">
                                <p>{{item.title}}</p>
                            </div>
                            <div class="bt_letter">
                                <p>{{item.letter}}</p>
                            </div>
                            <div class="bt_price">
                                <p>{{item.price}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!--配件专区-->
            <div class="parts">
                <div class="parts_zq">
                    <p class="sub">精品配件</p>
                    <ul class="nav_bar">
                        <li>
                            <router-link to="">充电</router-link>
                        </li>
                        <li>
                             <router-link to="">音乐</router-link>
                        </li>
                        <li>
                             <router-link to="">配件</router-link>
                        </li>
                        <li>
                             <router-link to="">更多></router-link>
                        </li>
                    </ul>
                    
                </div>
                <ul class="parts_first">
                    <li class="parts_box_first" v-for="(item,i) of parts_list" :key="i">
                        <div class="box_first">
                            <img :src="item.url" alt="">
                        </div>
                        <div>
                            <div class="bt_title">
                                <p>{{item.title}}</p>
                            </div>
                            <div class="bt_letter">
                                <p>{{item.letter}}</p>
                            </div>
                            <div class="bt_price">
                                <p>{{item.price}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
         </div>
    </div>
</template>
<script>
export default {
     data(){
         return{
          pic:[
          {id:1,url:require('../../../static/chart1.jpg')},
          {id:2,url:require('../../../static/chart2.png')},
          {id:3,url:require('../../../static/chart3.jpg')},
          {id:4,url:require('../../../static/chart4.jpg')},
          {id:5,url:require('../../../static/chart6.png')}
            ],
             v_list:[
             {url_yh:require("../../../static/youhui1.png"),url:require('../../../static/v1.png'),title:"iQOO Pro 5G版 12GB+128GB 竞速黑",letter:"享24期免息",price_first:4098,price_second:4098},
             {url_yh:require("../../../static/youhui3.png"),url:require('../../../static/v2.png'),title:"Z5x 6GB+128GB 极光色",letter:"5000mAh大电池，骁龙710处理器，6.53英寸极点全面屏，前置1600万AI美颜",price_first:790,price_second:1589},
             {url_yh:require("../../../static/youhui2.png"),url:require('../../../static/v3.png'),title:"vivo XE710原装耳机",letter:"采用人体工学设计，牢靠高、贴合耳朵，佩戴更舒适；一键线控，操作更方便。",price_first:99.5,price_second:199},
             {url_yh:require("../../../static/youhui1.png"),url:require('../../../static/v4.png'),title:"Z5 6GB+128GB 全息幻彩",letter:"赠XE680耳机，享6期免息（6+128适用）",price_first:1898,price_second:1898},
             {url_yh:require("../../../static/youhui3.png"),url:require('../../../static/v5.png'),title:"MGE Micro USB 多彩数据线",letter:"采用TPE环保材质，安全无毒，亮丽外观，更显时尚。注：无法适配X9Plus、X20Plus低压闪充机型。",price_first:9,price_second:19},
             {url_yh:require("../../../static/youhui2.png"),url:require('../../../static/v6.png'),title:"iQOO 8GB+128GB 武士黑",letter:"赠XE680耳机，享12期免息（8+128适用）",price_first:2598,price_second:2698},
             {url_yh:require("../../../static/youhui1.png"),url:require('../../../static/v7.png'),title:"Z5x 6GB+64GB 极光色",letter:"赠XE680耳机，享6期免息（6+64G适用）",price_first:1298,price_second:1398},
             {url_yh:require("../../../static/youhui3.png"),url:require('../../../static/v8.png'),title:"IMOVING 果冻行李箱 24寸",letter:"时尚果冻亮面设计，德国拜耳PC材质，减震静音万向轮，全铝合金拉杆，高度可调节，配备TSA海关密码锁，防止被暴力开箱",price_first:298,price_second:399},
             {url_yh:require("../../../static/youhui3.png"),url:require('../../../static/v9.png'),title:"雷士 智能吸顶灯",letter:"高显色数，还原真实色彩，LED倒装芯片技术，呵护双眼，无极调光，夜灯模式，密封设计，快速安装",price_first:298,price_second:499},
             {url_yh:require("../../../static/youhui1.png"),url:require('../../../static/v10.png'),title:"X27 8GB+128GB版 印象夏日",letter:"加赠手机壳、防水袋（8G+128G适用）",price_first:2698,price_second:2698},
             {url_yh:require("../../../static/youhui2.png"),url:require('../../../static/v11.png'),title:"U1 全面屏 3GB+32GB 极光色",letter:"加价22抢XE680耳机（3+32适用）",price_first:771,price_second:908}
             ],
          h_list:[
              {url:require("../../../static/hot1.png"),title:"iQOO Pro 8GB+128GB",letter:"骁龙855 Plus/44W超快闪充",price:"￥3198.00"},
              {url:require("../../../static/hot2.png"),title:"iQOO Neo 6GB+128GB",letter:"骁龙855 Plus/44W超快闪充",price:"￥3198.00"},
              {url:require("../../../static/hot3.png"),title:"iQOO Nex 8GB+128GB",letter:"新旗舰/高通骁龙855 Plus",price:"￥4998.00"},
          ],
          bt_list:[
              {url:require("../../../static/bt2.png"),title:" Z5x 6GB+64GB",letter:"性能实力派/5000mAh大电池",price:"￥1598.00"},
              {url:require("../../../static/bt3.png"),title:" iQOO 6GB+128GB 电光蓝",letter:"超级液冷散热/骁龙855",price:"￥2498.00"},
              {url:require("../../../static/bt4.png"),title:" Z3  6GB+64GB",letter:"水滴屏/骁龙710AIE",price:"￥1148.00"},
              {url:require("../../../static/bt5.png"),title:" X27 8GB+128GB ",letter:"直降300/4800万后置三摄",price:"￥2698.00"},
              {url:require("../../../static/bt6.png"),title:" S1 6GB+64GB 宠爱粉 ",letter:"超广角AI三摄",price:"￥1598.00"},
              {url:require("../../../static/bt7.png"),title:" Y7s 6GB+128GB",letter:"千元屏幕指纹/闪充大电池",price:"￥1598.00"},
          ], 
          parts_list:[
              {url:require("../../../static/parts1.png"),title:" NEX 3 5G星灰绒保护壳",letter:"全方位呵护/零误差定制",price:"￥99.00"},
              {url:require("../../../static/parts2.png"),title:" XE710原装耳机",letter:"佩戴更舒适/大师级音质",price:"￥159.00"},
              {url:require("../../../static/parts3.png"),title:"X27 极光渐变 保护壳 ",letter:"每个角度都有不同颜色",price:"￥39.00"},
              {url:require("../../../static/parts4.png"),title:" 蔚乐 棒棒糖音箱",letter:"精致小巧/携带方便",price:"￥49.00"},
              {url:require("../../../static/parts5.png"),title:" 原装闪充充电器",letter:"原装正品|快速高效充电",price:"￥79.00"},
              {url:require("../../../static/parts6.png"),title:"飞智 wee 2T游戏手柄",letter:"智连模式/体感精准",price:"￥229.00"},
              {url:require("../../../static/parts7.png"),title:"  V.FRIENDS 保护壳",letter:"手感温润细/全面呵护",price:"￥69.00"},
              {url:require("../../../static/parts8.png"),title:" 乔威 移动电源JP90ST",letter:"自动识别电流保护|不伤手机",price:"￥199.00"},
          ] ,
         }
     }
}
</script>
<style scoped>
    @import "../../assets/zhuye.css"
</style>


