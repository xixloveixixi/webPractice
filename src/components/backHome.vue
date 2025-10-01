<template>
                <div class="btn72" @click="backHome">
            继续旅程
        </div> 

</template>
<style lang="scss" scoped>
.btn72{
  width: 120px; /* 宽度为120px */
  height: 42px; /* 高度为42px */
  font-weight: 600; /* 字体加粗 */
  font-size: 18px; /* 字体大小为18px */
  line-height: 1; /* 行高为1 */
  letter-spacing: 4px; /* 字符间距为4px */
  background: transparent; /* 背景透明 */
  border: none; /* 无边框 */
  display: flex; /* 使用弹性盒布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative; /* 设置定位方式为相对定位 */
  z-index: 0; /* 设置层叠顺序为0 */
  transition: color 0.3s linear; /* 设置颜色变化的过渡效果，持续时间为0.3秒，变化速度为线性 */
  cursor: pointer; /* 鼠标悬停时显示为指针 */
  margin-left: 50%;
  transform: translateX(-50%);
  color: red;
}
/* 对按钮.btn72的:before伪元素进行样式设置 */
.btn72:before{
  content: ''; /* 内容为空 */
  width: 0; /* 宽度为0 */
  height: 2px; /* 高度为2px */
  background-color: red; /* 背景颜色为深蓝色 */
  position: absolute; /* 设置定位方式为绝对定位 */
  left: 0; /* 左对齐 */
  z-index: -2; /* 设置层叠顺序为-2 */
  transition: width 0.3s linear; /* 设置宽度变化的过渡效果，持续时间为0.3秒，变化速度为线性 */
}
/* 对按钮.btn72的:after伪元素进行样式设置 */
.btn72:after{
  content: ''; /* 内容为空 */
  width: 100%; /* 宽度为100% */
  height: 0; /* 高度为0 */
  background: linear-gradient(60deg, #fff, #666);
  position: absolute; /* 设置定位方式为绝对定位 */
  z-index: -1; /* 设置层叠顺序为-1 */
  transition: height 0.3s linear; /* 设置高度变化的过渡效果，持续时间为0.3秒，变化速度为线性 */
}
/* 当鼠标悬停在按钮.btn72上时，对:before伪元素进行样式变化 */
.btn72:hover:before{
  width: 100%; /* 宽度变为100% */
}
/* 当鼠标悬停在按钮.btn72上时，对:after伪元素进行样式变化 */
.btn72:hover:after{
  transition-delay: 0.3s; /* 设置过渡效果的延迟时间为0.3秒 */
  height: 100%; /* 高度变为100% */
}
/* 当鼠标悬停在按钮.btn72上时，对按钮本身进行样式变化 */
.btn72:hover{
  color: #fff; /* 文字颜色变为白色 */
  transition-delay: 0.3s; /* 设置过渡效果的延迟时间为0.3秒 */
}
</style>
<script setup>
import router from '@/router';

const backHome = () => {
    router.push('/shouye'); // 跳转到首页
}
</script>