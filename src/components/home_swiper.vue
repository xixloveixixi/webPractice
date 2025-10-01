<template>
<div class="container">
    <div id="slide" ref="itemsContainer">
        <div class="item item1">
          <div class="content">
            <div class="name">
                重庆-洪崖洞
            </div>
            <div class="des">
                山城明珠，洪崖洞影，灯火辉煌照两江。
            </div>
          </div>
        </div>
        <div class="item item2" >
          <div class="content">
            <div class="name">
                重庆-火锅
            </div>
            <div class="des">      
                麻辣飘香，火锅烫金，山城味蕾盛宴。
            </div>
          </div>
        </div>
        <div class="item item3" >
          <div class="content">
            <div class="name">
                重庆-仙女山
            </div>
            <div class="des">
                山城绿肺，东方瑞士，云雾缭绕绘仙境。
            </div>
          </div>
        </div>
        <div class="item item4">
          <div class="content">
            <div class="name">
                重庆-蚩尤九洲城
            </div>
            <div class="des">
              山城明珠，蚩尤圣殿，辉煌照山城
            </div>
          </div>
        </div>
        <div class="item item5">
          <div class="content">
            <div class="name">
                重庆-小面
            </div>
            <div class="des">
                山城瑰宝，小面飘香，麻辣滋味映人心。
            </div>
          </div>
        </div>
        <div class="item item6">
          <div class="content">
            <div class="name">
                重庆-天生三桥
            </div>
            <div class="des">
              山城奇观，壮丽殿堂，辉映巴渝景。
            </div>
          </div>
        </div>
    </div>
</div>
</template>
<script setup>
import router from '@/router';
import { ref, onMounted } from 'vue';

const itemsContainer = ref(null); // 用于引用包含所有item的容器
const items = ref([]); // 用于存储所有item的数组
const  num = ref(1)
// 初始化items数组
const initItems = () => {
  items.value = Array.from(itemsContainer.value.children);
};

// 将第一个item移到最后
const moveFirstToLast = () => {
  if (items.value.length > 0) {
    const firstItem = items.value.shift(); // 移除数组的第一个元素
    items.value.push(firstItem); // 将其添加到数组的末尾
    itemsContainer.value.appendChild(firstItem); // 将元素移动到容器的末尾
  }
};
const start = () => {
   setTimeout(goToSY , 17000)
}
// 在组件挂载后初始化items数组
onMounted(() => {
  initItems();
  changeSwiper();
  start();
});

const goToSY = () => {
  router.push('/shouye');
}
// 下一页按钮点击事件处理函数
const next = () => {
  moveFirstToLast();
};
// 点进去就开始变换，时间间隔5s
const changeSwiper = () => {
  setInterval(next, 3000);
}
</script>
<style lang="scss" scoped>
.item1{
    background-image: url(../assets/img/swiper_1.jpg);
}

.item2{
    background-image: url(../assets/img/swiper_2.jpg);
}

.item3{
    background-image: url(../assets/img/swiper_3.jpg);
}

.item4{
    background-image: url(../assets/img/swiper_4.jpg);
}

.item5{
    background-image: url(../assets/img/swiper_5.jpg);
}
.item6 {
    background-image: url(../assets/img/swiper_6.jpg);
}
.container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eaeeea;
    padding: 50px;
    box-shadow: 0 30px 50px #dbdbdb;
}
#slide {
    // 宽度为内容的最大宽度
    width: max-content;
    margin-top: 50px;
}
.item {
    width: 200px;
    height: 300px;
    background-position: 50%, 50%;
    background-size: cover;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
    box-shadow: 0 30px 50px #505050;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

}
.item:nth-child(1),
.item:nth-child(2){
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0);
    border-radius: 0;
    box-shadow: none;
}
.item:nth-child(3){
    left: 50%;
}
.item:nth-child(4){
    left: calc(50% + 220px);
}
.item:nth-child(5){
    left: calc(50% + 440px);
}
.item:nth-child(6){
    left: calc(50% + 660px);
    opacity: 0;
}
.item .content {
    width: 300px;
    position: absolute;
    left: 100px;
    top: 50%;
    transform: translateY(-50%);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #eee;
    display: none;
    animation: showContent 1s ease-in-out 1;
}
.item:nth-child(2) .content{
    display: block;
}
.item .name {
    font-size: 40px; /* 大字体 */
    font-weight: bold; /* 粗体 */
    margin-bottom: 20px; /* 下边距 */
    color: #fff; /* 文本颜色，例如深灰色 */
    font-family: 'Helvetica Neue', sans-serif; /* 字体类型，例如Helvetica Neue */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* 文本阴影 */
    animation: showContent 1.5s ease-in-out 1; /* 动画 */
}

.item .des {
    font-size: 24px; /* 较小的字体大小 */
    font-weight: normal; /* 正常字体粗细 */
    color: #fff; /* 描述文本颜色，例如中灰色 */
    font-family: 'Arial', sans-serif; /* 字体类型，例如Arial */
    animation: showContent 1s ease-in-out 1; /* 动画 */
}
@keyframes showContent {
    0% {
        opacity: 0;
        transform: translateY(100px);
        filter: blur(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}
</style>