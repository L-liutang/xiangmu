<template>
    <div class="all">
        <table></table>
        <div class="regester">
           <p class="title">账号注册</p>
           <div class="content">
            <div class="select">
                <span>+86</span>
                <input v-model="phone" placeholder="请输入手机号" type="text"> </input>
            </div>
            <p class="hint" style="color:#ec3f3f">{{a}}</p>
            <div class="phone_code">
               <input v-model="upwd" placeholder="密码为字母或数字6-12位" type="password"> </input>
            </div>
            <p class="hint" style="color:#ec3f3f">{{b}}</p>
            <div class="check_box">
                      <div @click="wright">
                          <img :src="url" alt="">
                      </div>
                       <span style=" color:#252525;;line-height:1.8; ">我已阅读并接受 
                         <a href="" style="color:#456fff">《服务协议》</a> 
                         </span>
             </div>
             <div class="button_blue">
                   <el-button type="primary" @click="regester">注册</el-button>
            </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
       a:"",
       b:"",
       phone:"",
       upwd:"",
       url:require("../../../static/true.png")
      }
    },
    methods:{
      regester(){
        //功能：完成用户登录操作
        //1.获取用户输入名
        var phone=this.phone;
        //2.获取用户密码
        var upwd=this.upwd;
        //3.创建正则表达式
        var reg=/^[a-z0-9]{6,12}$/i;
        var phonereg=/^1[3456789]\d{9}$/i;
        //4.验证用户名
        if(phone===""){
          this.a="手机号码不能为空";
          return;
        }else{
          this.a="";
        }
        //5.验证密码
        if(upwd===""){
          this.b="密码不能为空";
          return;
        }else{
           this.b="";
        }
        if(phonereg.test(phone)==false){
          this.a="手机号码输入不正确";
          return;
        }else{
          this.a="";
        }
        if(reg.test(upwd)==false){
          this.b="密码输入不正确";
          return;
        }else{
          this.b="";
        }
        //6.发送ajax请求
        var url="regester";
        var obj={phone:phone,upwd:upwd};
        this.axios.get(
          url,
          {params:obj}
        )
        .then(res=>{console.log(res)
        if(res.data.code==-1){
          this.a=res.data.msg;
          return;
          }else{
          alert(res.data.msg);
          this.$router.push("/login")
          return;
        }
        })
      },
      wright(){
        if(this.url==""){
          this.url=require("../../../static/true.png")
        }else{
          this.url=""
        }
      }
    }
}
</script>
<style scoped>
   @import "../../assets/regester.css"
</style>


