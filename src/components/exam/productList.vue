<template>
    <div>
        <headerr></headerr>
        <shoplist></shoplist>
        <absoluteline></absoluteline>
        <footerr></footerr>
    </div>
</template>
<script>
import header from "./header"
import shoplist from "./shoplist"
import absoluteline from "./absoluteline"
import footer from "./footer"
export default {
    data(){
        return{}
    },
    components:{
    "headerr":header,
    "shoplist":shoplist,
    "absoluteline":absoluteline,
    "footerr":footer
    },
}
</script>
<style scoped>

</style>


