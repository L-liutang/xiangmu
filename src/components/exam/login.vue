<template>
   <div class="banner">
       <div class="banner_in">
           <router-link to="">
               <img src="../../../static/login1.jpg" alt="">
           </router-link>
           <!--登录-->
           <!-- <div class="login" v-show="hidden">
               <div class="title">短信验证码登录</div>
               <div class="toggle">
                   <span @click="handle">账号登录</span>
               </div>
               <div class="phone_code">
                <span>+86</span>
               <input v-model="phone" placeholder="请输入手机号" type="text"> </input>
               </div>
               <div class="mal">
                    <input v-model="upwd" placeholder="输入验证码" type="text"> </input> 
                    <div>
                        <span >获取验证码</span>
                    </div>
               </div>
               <div>
                   <div class="check_box">
                      <div>
                          <img src="../../../static/true.png" alt="">
                      </div>
                       <span style=" color:#999;line-height:1.8; ">两周内自动登录</span>
                   </div>
               </div>
               <div class="button_blue">
                   <el-button type="primary">登录</el-button>
               </div>
               <div class="button-transparents">
                   <el-button plain>注册账号</el-button>
               </div>
               <div class="hint">
                  短信可能会有延时，请耐心等待，如果长时间未收到短信，请60秒后重新获取 
               </div>
               <div class="forget_pwd">
                   忘记密码？
               </div>
               <div class="b_title">
                   <div class="b_title_first"></div>
                   <span>其他方式登录</span>
                   <div class="b_title_last"></div>
               </div>
               <div class="b_pic">
                   <div>
                   <img src="../../../static/wx.png" alt="">
                   <img src="../../../static/QQ.png" alt="">
                   <img src="../../../static/wb.png" alt="">
                   </div>
               </div>
           </div> -->
           <!--登录2-->
           <div class="login_selector" >
               <div class="title">账号登录</div>
               <div class="toggle">
                   <span >短信验证登陆</span>
               </div>
               <div class="phone_code">
                <span>+86</span>
               <input v-model="phone" placeholder="请输入手机号" type="text"></input>
               </div>
               <div class="mal">
                    <input v-model="upwd" placeholder="输入密码" :type="pass"></input> 
                    <img @click="show" :src="dlc" alt="">
               </div>
               <div>
                   <div class="check_box">
                       <div>
                           <span>{{ab}}</span>
                       </div>
                      <div class="check_box_first">
                          <div @click="wright">
                            <img :src="wrt" alt="">
                          </div>
                          <span style=" color:#999;line-height:1.8; ">两周内自动登录</span>
                      </div>
                      
                   </div>
               </div>
               <div class="button_blue">
                   <el-button type="primary" @click="login">登录</el-button>
               </div>
               <div class="button-transparents">
                   <el-button plain @click="regester">注册账号</el-button>
               </div>
               <div class="forget_pwd">
                   忘记密码？
               </div>
               <div class="b_title">
                   <div class="b_title_first"></div>
                   <span>其他方式登录</span>
                   <div class="b_title_last"></div>
               </div>
               <div class="b_pic">
                   <!-- <div class="b_pic_all">
                   <div class="b_pic_first"></div>
                   <div class="b_pic_second" src="../../../static/QQ.png" alt=""></div>
                   <div class="b_pic_last" src="../../../static/wb.png" alt=""></div>
                   </div> -->
               </div>
           </div>
       </div>
   </div> 
</template>
<script>
export default {
     data() {
    return {
      phone:"",
      upwd:"",
      ab:"",
      wrt:require('../../../static/true.png'),
      pass:"password",
      dlc:require('../../../static/close_eye.png')
    }
  },
    methods:{
        login(){
            //功能：完成用户登录操作
            //1.获取用户输入名；
            var phone=this.phone;
            console.log(phone)
            //2.获取用户密码
            var upwd=this.upwd;
            //3.创建正则表达式
            var reg=/^[a-z0-9]{6,12}$/i;
            var phonereg=/^1[3456789]\d{9}$/i;
            //4.验证用户名；
            if(phone===""){
                this.ab="手机号码不能为空";
                //console.log(ab)
                return;
            };
            if(upwd===""){
                this.ab="密码不能为空";
                //console.log(ab)
                return;
            };
            if(phonereg.test(phone)==false||reg.test(upwd)==false){
                this.ab="手机号码或密码输入不正确";
                return;
            }
            //5.发送ajax请求
            var url="login";
            var obj={phone:phone,upwd:upwd};
            this.axios.get(
                url,
                {params:obj}
            )
            .then(res=>{console.log(res)
            if(res.data.code<0){
                    this.ab=res.data.msg;
                }else{
                    
                    this.$router.push("/vivo")
                }
            })
        },
         wright(){
             if(this.wrt==""){
                 this.wrt=require('../../../static/true.png')
                 return;``
             }else{
                  this.wrt="";
                  return;
             }
         },
         show(){
            if(this.dlc===require('../../../static/close_eye.png')){
                this.pass="text";
                this.dlc=require('../../../static/open_eye.png')
                return;
            }else{
                this.pass="password";
                this.dlc=require('../../../static/close_eye.png')
                return;
            }
         },
        regester(){
            this.$router.push("/regester")
        }
    }
}
</script>
<style scoped>
@import "../../assets/login.css"
</style>


