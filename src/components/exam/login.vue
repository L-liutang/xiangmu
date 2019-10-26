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
                   <span @click="handle1">短信验证登陆</span>
               </div>
               <div class="phone_code">
                <span>+86</span>
               <input v-model="phone" placeholder="请输入手机号" type="text"> </input>
               </div>
               <div class="mal">
                    <input v-model="upwd" placeholder="输入密码" type="password"> </input> 
                    <img src="../../../static/close_eye.png" alt="">
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
           </div>
       </div>
   </div> 
</template>
<script>
export default {
     data() {
    return {
      phone:"",
      upwd:""
    }
  }
}
</script>
<style scoped>
@import "../../assets/login.css"
</style>


