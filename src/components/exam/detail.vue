<template>
    <div>
         <headerr></headerr>
         <table></table>
        <div class="crumbs"></div>
        <table></table>
        <div class="detail_down">
            <div class="detail_all">
                <div class="left">
                    <div class="pic_large">
                        <img v-for="(item,i) of list" :key="i" :src="`http://127.0.0.1:4000`+item.a_url" alt="">
                    </div>
                    <div class="pic_small">
                        <img src="" alt="">
                        <div class="pic_lsmall">
                            <img src="../../../static/detail.png" alt="">
                            <img src="../../../static/detail.png" alt="">
                            <img src="../../../static/detail.png" alt="">
                            <img src="../../../static/detail.png" alt="">
                        </div>
                        <img src="" alt="">
                    </div>
                </div>
                <div class="right">
                    <div v-for="(item,i) of list" :key="i">
                        <h1 class="name">{{item.a_title}}</h1>
                        <p class="intro">
                            <span class="promition"> {【3-10日赠半年碎屏宝，享24期免息，返5折配件券】</span>              
                             5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充}
                        </p>
                        <div class="summary">
                            <div class="summary_price">
                                <div class="common">
                                    <p class="sale_price">{{item.a_price}}</p>
                                </div>
                            </div>
                            <div class="summary_active">
                                <ul class="list">
                                    <li class="item_list">
                                        <span class="label">定制</span>
                                        <div class="content">镭雕定制服务</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <dl class="spc">
                       <dt class="spc_title">版本</dt>
                       <dd class="spc_content" >
                           <div class="spc_list">
                                <el-button  plain>5G全网通版 12GB+256GB</el-button>
                                <el-button  plain>5G全网通版 12GB+256GB</el-button>
                                <el-button  plain>5G全网通版 8GB+256GB</el-button>
                           </div>
                       </dd>
                       <dt class="spc_title">颜色</dt>
                       <dd class="spc_content">
                           <div class="spc_list">
                            <el-button plain class="sklg">
                                <div class="spc_circle">
                                    <div></div>
                                    <p>深空流光</p>
                                </div>
                                </el-button>
                            <el-button plain>
                                <div class="spc_circleb">
                                    <div></div>
                                    <p>液态天河</p>
                                 </div>
                            </el-button>
                           </div>
                       </dd>
                    </dl>
                    <dl class="module_number">
                        <dt class="module_tittle">数量</dt>
                        <dd class="module_content">
                            <div class="module_item">
                                <button @click="sout">-</button>
                                <input type="text" v-model="sl" readonly>
                                <button @click="add" >+</button>
                            </div>
                            <span class="module_tips">(仅限购5件)</span>
                        </dd>
                    </dl>
                    <div class="settle">
                        <div class="settle_total">
                            <p class="settle_price">￥5098</p>
                            <p class="settle_info">
                                已选： 5G全网通版 8GB+256GB 深空流光 1件
                            </p>
                        </div>
                        <div class="settle_operation">
                            <div class="settle_action">
                                <button class="dark_button">加入购物车</button>
                                <button class="red_button">立即购买</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="recommend_wrapper">
                <div>
                    <div @click="handleft">
                        <img class="pu" src="../../../static/left.png"  alt="">
                    </div>
                    <div class="recommend_all">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="配置推荐" name="first">
                           <ul class="pztj">
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/38/10000538_1572530665593_750x750.png.webp" alt="">
                                    <p class="pztj_letter">vivo 44W（11V/4A）超快闪充充电器</p>
                                    <p class="pztj_price">￥119</p>
                               </li>
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/30/10001130_1572531197280_750x750.png.webp" alt="">
                                   <p class="pztj_letter">vivo Type-C超快闪充数据线-4A</p>
                                   <p class="pztj_price">￥59</p>
                               </li>
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/22/10001522_1572530926119_750x750.png.webp" alt="">
                                  <p class="pztj_letter">NEX 3 5G星灰绒保护壳</p>
                                  <p class="pztj_price">￥69</p>
                               </li>
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/44/10000444_1550287153298_750x750.png.webp" alt="">
                                  <p class="pztj_letter">乔威 移动电源JP90ST</p>
                                  <p class="pztj_price">￥169</p>
                               </li>
                           </ul>
                        </el-tab-pane>
                        <el-tab-pane label="同类推荐" name="second">
                            <ul class="pztj">
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/99/10001399_1572510274572_750x750.png.webp" alt="">
                                    <p class="pztj_letter">iQOO Pro 5G版 12GB+128GB 竞速黑</p>
                                    <p class="pztj_price">￥4098</p>
                               </li>
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/67/10000467_1556415518706_750x750.png.webp" alt="">
                                   <p class="pztj_letter">iQOO 8GB+128GB 武士黑</p>
                                   <p class="pztj_price">￥2498</p>
                               </li>
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001314_1572510549820_750x750.png.webp" alt="">
                                  <p class="pztj_letter">Z5 6GB+128GB 全息幻彩</p>
                                  <p class="pztj_price">￥1798</p>
                               </li>
                               <li>
                                   <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/34/10000534_1572512508358_750x750.png.webp" alt="">
                                  <p class="pztj_letter">X27 8GB+128GB版 印象夏日</p>
                                  <p class="pztj_price">￥2498</p>
                               </li>
                           </ul>
                        </el-tab-pane>
                    </el-tabs>
                    </div>
                    <div @click="handright">
                    <img class="pd" src="../../../static/right.png"  alt="">
                    </div>
                </div>
            </div>
        </div>
        <footerr></footerr>
    </div>
</template>
<script>
 import header from "./header"
 import footer from "./footer"  
export default {
     data() {
        return {
        fid:this.$route.params.fid,
        sl:1,
        activeName: 'first',
        list:[]
    }
  },
   components:{
    "headerr":header,
    "footerr":footer
}, 
  created() {
    this.loadmore()
  },
   methods: {
      add(){
          if(this.sl<5){
              this.sl++
              return;
          }else{
              this.sl=5;
              return;
          }
      },
    sout(){
        if(this.sl>1){
            this.sl--;
            return;
        }else{
            this.sl=1
            return;
        }
    },
    handleClick(tab, event) {
        console.log(tab, event);
      },
    handleft(){
    this.activeName='first';
    return;
    },
    handright(){
        this.activeName='second';
        return;
    },  
    loadmore(){
        var url="detail"
        var fid=this.fid
        console.log(fid);
        var obj={fid};
        console.log(obj)
        this.axios.get(url,
            {params:obj}
        )
        .then(res=>{console.log(res)
        if(res.data.code==1){
           var list=res.data.data;
           console.log(list)
           this.list=list
        }
        })
    }

  }
}
</script>
<style scoped>
   @import "../../assets/detail.css"
</style>


