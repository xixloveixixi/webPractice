<template>
    <div class="msContent">
        <div class="mscontentOne">
            <mscontent_1></mscontent_1>
        </div>
        <div class="mscontentTwo">
            <mscontent_2></mscontent_2>
        </div>
        <div class="foot">
            <backHome></backHome>
        </div>
        
    </div>
 

</template>
<script setup>
import mscontent_1 from '@/components/mscontent_1.vue';
import mscontent_2 from '@/components/mscontent_2.vue';
import backHome from '@/components/backHome.vue';
</script>
<style  scoped lang="scss">
.msContent{
    padding: 50px;
    box-sizing: border-box;
    background-image: url(../assets/img/meishi_bg.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
}


</style>