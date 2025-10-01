<script setup>
import homeswiper from '../components/home_swiper.vue';
</script>

<template>
<div class="homeContent">
  <homeswiper></homeswiper>
</div>
  
</template>
<style lang="scss" scoped>
.homeContent {
  box-sizing: border-box;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #eaeaea;
  overflow: hidden; // 允许 .homeContent 滚动
}

body,
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden; // 防止 body 和 html 滚动
}

</style>
