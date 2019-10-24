<template>
    <div class="all">
        <table></table>
        <div class="regester">
           <p class="title">账号注册</p>
           <div>
                <el-select v-model="value" multiple filterable allow-create default-first-option placeholder="地区">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
           </div>
           <p>成功注册账号后，国家/地区将不能被修改</p>
           <div>

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


