<template>
    <div class="all">
        <table></table>
        <div class="regester">
           <p class="title">账号注册</p>
           <div class="content">
            <div class="select">
                  <select >
                    <option :value="item.value" v-for="(item,i) of options" :key="i">{{item.value}}</option>
                  </select>
            </div>
            <p class="hint">成功注册账号后，国家/地区将不能被修改</p>
            <div class="phone_code">
                <span>+86</span>
               <input v-model="phone" placeholder="请输入手机号" type="text"> </input>
            </div>
            <div class="check_box">
                      <div>
                          <img src="../../../static/true.png" alt="">
                      </div>
                       <span style=" color:#252525;;line-height:1.8; ">我已阅读并接受 
                         <a href="" style="color:#456fff">《服务协议》</a> 
                         </span>
             </div>
             <div class="button_blue">
                   <el-button type="primary">注册</el-button>
            </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        options: [{
          value: '中国',
          label: '中国'
        }, {
          value: '中国香港',
          label: '中国香港'
        }, {
          value: '中国台湾',
          label: '中国台湾'
        }],
        value: []
      }
    }
}
</script>
<style scoped>
   @import "../../assets/regester.css"
</style>


