<template>
<div class="shop_all">
    <table></table>
    <div class="shop_tab"> 
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="智能手机" name="first">
        <div class="shop_tabe">
            <span @click="shop_all">全部</span>
            <span @click="shop_i">iQOO</span>
            <span @click="shop_n">NEX系列</span>  
            <span >X系列</span> 
            <span >S系列</span> 
            <span >Z系列</span> 
            <span >Y系列</span> 
            <span >U系列</span>  
        </div>
        </el-tab-pane>
        <el-tab-pane label="配件产品" name="second">
             <div class="shop_tabe">
            <span >全部</span>
            <span >充电</span>
            <span >配件</span>  
            <span >音乐</span> 
            <span >智能</span> 
            <span >摄影</span> 
            <span >生活</span> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="服务" name="third">
            <div class="shop_tabe">
            <span >全部</span>
            <span >碎屏保</span>
            <span >后盖保</span>  
            <span >延保</span> 
            </div>
        </el-tab-pane>
    </el-tabs>
    </div>
    <table></table>
    <div class="shop_list">
        <ul>
            <li v-for="(item,i) of list" :key="i"> 
                <img @click="toChild(item.fid)"  :src="`http://127.0.0.1:4000`+item.a_url" alt="">
                <div class="content">
                <P class="title">{{item.a_title}}</P>
                <P class="letter">{{item.a_letter}}</P>
                <P class="price">{{item.a_price}} </P>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
     data(){
      return {
        activeName:'first',
        list:[],       
      }
    },
    created(){
        this.shop_all()
    },
    
    methods: {
       common(url){
                this.axios.get(url)
               .then(res=>{
               if(res.data.code!==1){
                   this.$alert("加载失败")
               }else{
                   var list=res.data.data;
                   this.list=list
               } 
          }) 
    },
       shop_all(){
            var url="zn_a"
            this.common(url)
       },
        
       shop_i(){
           var url="zn_i"
           this.common(url) 
       },
       shop_n(){
           var url="zn_a"
             this.common(url) 
       },
       handleClick(){},
       toChild(id){
        this.$router.push({
            path:`/detail/${id}`
        })
    }
    },
    
}
</script>
<style scoped>
   @import "../../assets/shopList.css"
</style>


