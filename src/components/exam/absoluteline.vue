<template>
    <div class="right_b">
            <div>
               <div class="shop"></div>
            </div>
            <div>
            <div class="kf"></div>
            </div>
            <div>
            <div class="help"></div>
            </div>
            <div>
            <div class="up">
                <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
            </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
              shop:require('../../../static/shopping_car.png'),
              kf:require('../../../static/kf.png'),
              help:require('../../../static/help.png'),
              up:require('../../../static/up.png')
        }
    },
    methods:{
        shopp(){
            this.shop=require('../../../static/shopping_car1.png')
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
 .right_b>div div{
    width:30px;
    height:30px;
    position: absolute;
    top:10px;
    right:10px;
    bottom:10px;
    left:10px;
} 
.shop{
    background-image:url(../../../static/shopping_car.png);
    background-size: 110% 110%;
}
.shop:hover{
    background-image:url(../../../static/shopping_car1.png);
}
.kf{
    background-image:url(../../../static/kf.png);
    background-size: 110% 110%;
}
.kf:hover{
    background-image:url(../../../static/kf1.png);
}
.help{
    background-image:url(../../../static/help.png);
    background-size: 110% 110%;
}
.help:hover{
    background-image:url(../../../static/help1.png);
}
.up{
    background-image:url(../../../static/up.png);
    background-size: 110% 110%;
}
.up:hover{
    background-image:url(../../../static/up1.png);
}
</style>


