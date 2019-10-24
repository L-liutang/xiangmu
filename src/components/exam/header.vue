<template>
<div class="allheader">
<div class="header_all">
    <div class="header">
       <ul class="header-left">
        <li class="header-left-show"><router-link class="show-left" to="">品牌</router-link></li>
        <li class="header-left-show"><router-link class="show-left" to="">Funtouch os</router-link></li>  
        <li class="header-left-show"><router-link class="show-left" to="">体验店</router-link></li>  
        <li class="header-left-show"><router-link class="show-left" to="">政企服务</router-link></li>  
        <li class="header-left-show"><router-link class="show-left" to="">社区</router-link></li>     
      </ul> 
      <div class="header-right"> 
          <div class="header-right-show"><router-link class="show-left" to="">购物车</router-link></div>
          <div class="header-right-showup"><router-link class="show-left" to="">登录</router-link></div>
          <div class="header-right-showup">|</div>
          <div class="header-right-showon"><router-link class="show-left" to="">注册</router-link></div>
      </div>
    </div>
    <div class="nav">
        <div class="nav-middle">
           <ul class="nav-middle-show">
                <li><router-link to=""></router-link></li>
                <li><router-link class="nave-v" to="">iQOO专区</router-link></li>
                <li><router-link class="nave-v" to="">NEX系列</router-link></li>
                <li><router-link class="nave-v" to="">X系列</router-link></li>
                <li><router-link class="nave-v" to="">S系列</router-link></li>
                <li><router-link class="nave-v" to="">Z系列</router-link></li>
                <li><router-link class="nave-v" to="">Y系列</router-link></li>
                <li><router-link class="nave-v" to="">U系列</router-link></li>
                <li><router-link class="nave-v" to="">真无限耳机</router-link></li>
                <li><router-link class="nave-v" to="">商城</router-link></li>
                <li><router-link class="nave-v" to="">服务</router-link></li>
           </ul>  
        </div>
        <div class="nav-middle-show">
            <img src="" alt="">
        </div>
    </div>
</div> 
</div>  
</template>
<script>
export default {
    
}
</script>
<style scoped>
.allheader{
position: relative;
}
.header_all{
    width:100%;
    z-index:999;
    position:fixed;
}
.header{
    display:flex;
    width:100%;
    height:32px;
    background-color:#333;
    justify-content: space-between;
}
.header-left{
    display:flex;
    padding-left:48px;
}
.header-left-show,.header-right-show{
    padding-right:42px;
    color:#ccc;
    font-size:12px;
    font-weight:400;
    line-height:32px;
    white-space: nowrap;
}
.header-right{
    display:flex;
    padding-right:48px;
}
.header-right-showup{
    padding-right:18px;
    font-size:12px;
    font-weight:400;
    line-height:32px;
    white-space: nowrap;
    color:#ccc
}
.show-left{
color:#ccc;
}
.header-right-showon{
    color:#ccc;
    font-size:12px;
    font-weight:400;
    line-height:32px;
    white-space: nowrap; 
}
.nav{
    width:100%;
    height:68px;
    background-color:#fff;
}
.nav-middle{
    margin:0 auto;
    width:1200px;
    height:100%;
    
}
.nav-middle-show{
    display:flex;
    justify-content: space-between;
    white-space: nowrap;
    line-height:68px
}
.nave-v{
    font-weight:600;
    color:#333;
    
}
.show-left:hover{
    color:#848484;
    transition: color .3s linear;
   
}
.nave-v:hover{
    color:#415fff;;
    transition: color .6s linear;
}
</style>

