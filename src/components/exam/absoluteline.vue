<template>
    <div class="right_b">
            <div>
            <img src="../../../static/购物车.png"  alt="">
            </div>
            <div>
            <img src="../../../static/客服.png"  alt="">
            </div>
            <div>
            <img src="../../../static/帮助.png" alt="">
            </div>
            <div>
            <img src="../../../static/向上.png" alt="">
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            url1:require("../../../static/购物车.png"),url_d1:require("../../../static/购物车1.png"),    
            url2:require("../../../static/客服.png"),url_d2:require("../../../static/客服1.png"),
            url3:require("../../../static/帮助.png"),url_d3:require("../../../static/帮助1.png"),
            url4:require("../../../static/向上.png"),url_d4:require("../../../static/向上1.png"),     
        }
    },
    methods:{
    handle1(){
        
    } 
    }
}
</script>
<style scoped>
.right_b{
    width:50px;
    height:200px;
    position: fixed;
    bottom:100px;
    right:0;
    background:#fff;
    z-index: 999;
    display:flex;
    flex-wrap: wrap;
}
.right_b>div{
    width:100%;
    height:50px;
    position: relative;
    transition: background-color .4s initial;
}
.right_b>div:hover{
    background-color:#ccc
}
.right_b img{
    width:30px;
    height:30px;
    position: absolute;
    top:10px;
    right:10px;
    bottom:10px;
    left:10px;
}
</style>


