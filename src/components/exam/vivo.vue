<template>
  <div>
    <!--调用子组件-->
    <headerr></headerr>
    <zhuye></zhuye>
    <absoluteline></absoluteline>
    <footerr></footerr>
  </div>
</template>
<script>
//1.引入子组件
import header from "./header"
import zhuye from "./zhuye"
import absoluteline from "./absoluteline"
import footer from "./footer"  
export default {
  data(){
      return{}
  },
//2.注册子组件
  components:{
    "headerr":header,
    "zhuye":zhuye,
    "absoluteline":absoluteline,
    "footerr":footer
}  
}

</script>
<style scoped>

</style>


