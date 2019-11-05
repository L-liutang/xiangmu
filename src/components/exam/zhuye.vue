<template>
    <!--最外层div-->
    <div class="all">
        <table></table>
        <!--轮播图-->
        <div class="all_lunbo">
            <el-carousel :interval="5000" arrow="always" height="526px">
            <el-carousel-item v-for="item in c_list" :key="item.aid">
            <router-link to="/productList">
            <img :src="`http://127.0.0.1:4000`+item.aurl" alt="">
            </router-link>
            </el-carousel-item>
            </el-carousel>
        </div>
        <!--第一行div-->
        <div class="wrapper">
            <div class="wrapper-list">
                <div class="box-list">
                    <div class="box">
                        <router-link to="/productList">
                            <img src="../../../static/box1.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="box">
                        <router-link to="/productList">
                            <img src="../../../static/box2.jpg" alt="">
                        </router-link>    
                    </div>
                    <div class="box">
                        <router-link to="/productList">
                            <img src="../../../static/box3.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="box">
                        <router-link to="/productList">
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
                               <img class="yh" :src="`http://127.0.0.1:4000`+item.url_yh" alt="">
                            <router-link to="/productList">
                                <img class="vp" :src="`http://127.0.0.1:4000`+item.v_url" alt="">
                            </router-link>
                           </div>
                           <div class="write">
                               <p class="name">{{item.v_title}}</p>
                               <p class="desc">{{item.v_letter}}</p>
                               <div class="price">
                                  <span class="text">￥</span>
                                  <span class="text">{{item.v_price_first}}</span>
                                  <span class="text-disabled-first">￥</span>
                                  <span class="text-disabled">{{item.v_price_second}}</span>
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
                            <router-link to="/productList">
                                <img :src="`http://127.0.0.1:4000`+item.h_url" alt="">
                            </router-link>
                        </div>
                        <div>
                            <div class="hot_title">
                                <p>{{item.h_title}}</p>
                            </div>
                            <div class="hot_letter">
                                <p>{{item.h_letter}}</p>
                            </div>
                            <div class="hot_price">
                                <p>{{item.h_price}}</p>
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
                        <router-link to="/productList">
                            <img src="../../../static/bt1.jpg" alt="">
                        </router-link>
                    </li>
                    <li class="bt_box_first" v-for="(item,i) of bt_list" :key="i">
                        <div class="box_first">
                            <img :src="`http://127.0.0.1:4000`+item.bt_url" alt="">
                        </div>
                        <div>
                            <div class="bt_title">
                                <p>{{item.bt_title}}</p>
                            </div>
                            <div class="bt_letter">
                                <p>{{item.bt_letter}}</p>
                            </div>
                            <div class="bt_price">
                                <p>{{item.bt_price}}</p>
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
                            <router-link to="/productList">充电</router-link>
                        </li>
                        <li>
                             <router-link to="/productList">音乐</router-link>
                        </li>
                        <li>
                             <router-link to="/productList">配件</router-link>
                        </li>
                        <li>
                             <router-link to="/productList">更多></router-link>
                        </li>
                    </ul>
                    
                </div>
                <ul class="parts_first">
                    <li class="parts_box_first" v-for="(item,i) of p_list" :key="i">
                        <div class="box_first">
                            <router-link to="/productList">
                            <img :src="`http://127.0.0.1:4000`+item.p_url" alt="">
                            </router-link>
                        </div>
                        <div>
                            <div class="bt_title">
                                <p>{{item.p_title}}</p>
                            </div>
                            <div class="bt_letter">
                                <p>{{item.p_letter}}</p>
                            </div>
                            <div class="bt_price">
                                <p>{{item.p_price}}</p>
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
          c_list:[],
          v_list:[],
          h_list:[],
          bt_list:[], 
          p_list:[] ,
         }
     },
     created(){
         this.loadMore1();
         this.loadMore2();
         this.loadMore3();
         this.loadMore4();
         this.loadMore5();
     },
    methods:{
        loadMore1(){
            var url="carousel";
            this.axios.get(url)
            .then(res=>{console.log(res)
                if(res.data.code!==1){
                    this.$alert("加载失败")
                }else{
                    var list=res.data.data;
                    this.c_list=list;
                    console.log(list)
                }
            })
        },
         loadMore2(){
            var url="v";
            this.axios.get(url)
            .then(res=>{console.log(res)
                if(res.data.code!==1){
                    this.$alert("加载失败")
                }else{
                    var list=res.data.data;
                    this.v_list=list;
                    console.log(list)
                }
            })
        },
         loadMore3(){
            var url="h";
            this.axios.get(url)
            .then(res=>{console.log(res)
                if(res.data.code!==1){
                    this.$alert("加载失败")
                }else{
                    var list=res.data.data;
                    this.h_list=list;
                    console.log(list)
                }})
        },
         loadMore4(){
            var url="bt";
            this.axios.get(url)
            .then(res=>{console.log(res)
                if(res.data.code!==1){
                    this.$alert("加载失败")
                }else{
                    var list=res.data.data;
                    this.bt_list=list;
                    console.log(list)
                }})
        },
         loadMore5(){
            var url="parts";
            this.axios.get(url)
            .then(res=>{
                console.log(res)
                if(res.data.code!==1){
                    this.$alert("加载失败")
                }else{
                    var list=res.data.data;
                    this.p_list=list;
                    console.log(list)
                }
            })
        },
    }
}
</script>
<style scoped>
    @import "../../assets/zhuye.css"
</style>


