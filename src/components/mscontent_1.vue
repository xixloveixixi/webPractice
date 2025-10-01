<template>
    <div class="lxPix">
            <lingxingxiangce></lingxingxiangce>
        </div>
        <div class="msTitle">
            重庆美食
        </div>
        <div class="h2Title">
            -----舌尖上的重庆
        </div>
</template>
<script setup>
import lingxingxiangce from '@/components/lingxingxiangce.vue';
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');


.msTitle {
    position: absolute;
    top: 20%; /* 进一步调整位置 */
    right: 5%; /* 保持右侧位置 */
    font-size: 80px; /* 增加字体大小 */
    color: #fff; /* 保持白色字体 */
    text-align: center;
    font-family: 'Lobster', cursive; /* 使用飘逸的手写风格字体 */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); /* 增强阴影效果 */
    padding: 15px 30px; /* 增加内边距 */
    background: rgba(0, 0, 0, 0.3); /* 调整背景透明度 */
    border-radius: 15px; /* 增加圆角大小 */
    letter-spacing: 2px; /* 增加字母间距 */
}
.h2Title{
    position: absolute;
    top: 40%; /* 进一步调整位置 */
    right: 2%; /* 保持右侧位置 */
    font-size: 36px;
    color: #fff;
    text-align: center;
    font-family: 'Lobster', cursive;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    padding: 15px 30px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    letter-spacing: 2px;
}

</style>