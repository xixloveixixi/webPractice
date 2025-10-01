<template>
  <div class="content">
    <div class="title">重庆英雄</div>
    <div class="bottom">重庆，这座山水之城，不仅以其独特的地形和悠久的历史闻名，更因无数革命英雄的壮丽事迹而显得格外崇高。在这片热土上，一代又一代的重庆革命英雄们，以坚定的信念和不屈的意志，为民族的解放和人民的幸福，抛头颅、洒热血。</div>
    <div class="item li1" @mouseover="showDetails(1)" @mouseleave="hideDetails(1)">
      <div class="name" v-show="hovered === 1">邱少云</div>
      <div class="desc" v-show="hovered === 1">美军燃烧弹发落在邱少云潜伏点附近，火势蔓延全身，为避免暴露，放弃自救壮烈牺牲</div>
    </div>
    <div class="item li2" @mouseover="showDetails(2)" @mouseleave="hideDetails(2)">
      <div class="name" v-show="hovered === 2">赵世炎</div>
      <div class="desc" v-show="hovered === 2">1924年，赵世炎担任多个要职，参与领导上海工人三次武装起义。“四一二反革命政变”后，他坚持领导上海工人斗争。1927年7月2日，因叛徒出卖被捕，面对敌人坚贞不屈，坚信革命必胜。7月19日，他高呼“中国共产党万岁！”英勇就义，年仅26岁。</div>
    </div>
    <div class="item li3" @mouseover="showDetails(3)" @mouseleave="hideDetails(3)">
      <div class="name" v-show="hovered === 3">王良</div>
      <div class="desc" v-show="hovered === 3">任红四军军长，他指挥果断，身先士卒，给敌人以沉重打击，为夺取战役胜利作出了重要贡献。</div>
    </div>
    <div class="item li4" @mouseover="showDetails(4)" @mouseleave="hideDetails(3)">
      <div class="name" v-show="hovered === 4">江竹筠</div>
      <div class="desc" v-show="hovered === 4">1947年，江竹筠在中共重庆市委指派下，领导学生与国民党斗争，并负责《挺进报》的发行。不幸的是，1948年6月，江竹筠因叛徒出卖被捕，遭受酷刑却坚守信仰。1949年11月14日，她在重庆解放前夕被杀害，年仅29岁。</div>
    </div>  <div class="item li5" @mouseover="showDetails(5)" @mouseleave="hideDetails(3)">
      <div class="name" v-show="hovered === 5">陈然</div>
      <div class="desc" v-show="hovered === 5">1947年，陈然在重庆筹办《彷徨》杂志，后负责《挺进报》的油印工作。1948年，陈然因叛徒出卖被捕,1949年，得知新中国成立，他与难友缝制五星红旗。同年10月28日，陈然在重庆被杀害，时年26岁。</div>
    </div>
    <div class="foot">
      <div class="btn72" @click="backHome">
            继续旅程
        </div> 
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
const hovered = ref(null);

const showDetails = (index) => {
  hovered.value = index;
};

const hideDetails = () => {
  hovered.value = null;
};

const backHome = () => {
    router.push('/shouye'); // 跳转到首页
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
  position: relative;
}

.content {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}

.foot{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.item {
  width: 5vw;
  height: 5vw;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 0 0.2vw rgba(255, 255, 255, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.li1 {
    background-color: #D9AFD9;
    position: absolute;
    top: 40%;
    left: 40%;
}
.li2 {
  width: 20vw;
  height: 20vw;
  background-color: #FBAB7E;
  position: absolute;
    top: 10%;
    left: 60%;
}
.li3 {
  width: 15vw;
  height: 15vw;
  background-color: #8BC6EC;
  position: absolute;
  top: 60%;
  left: 70%;
}
.li4 {
  width: 25vw;
  height: 25vw;
  background-color: #FFDEE9;
  position: absolute;
  top: 50%;
  left: 40%;
}
.li5 {
  width: 15vw;
  height: 15vw;
  background-color: #FAACA8;
  position: absolute;
  top: 35%;
  left: 80%;
}
.li1:hover {
    width: 15vw;
    height: 15vw;
  background-color: #D9AFD9;
  background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
  z-index: 999;
}

.li2:hover {
 width: 30vw;
 height: 30vw;
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  z-index: 999;

}
.li3:hover {
    width: 20vw;
    height: 20vw;
    background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
z-index: 999;

}
.li4:hover {
    width: 28vw;
    height: 28vw;
    background-color: #FFDEE9;
background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
z-index: 999;

}
.li5:hover {
    width: 20vw;
    height: 20vw;
    background-color: #FAACA8;
background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
z-index: 999;
}
.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  font-size: 1.5vw;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 100%;
}

.desc {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  font-size: 1vw;
  line-height: 1.2;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  visibility: hidden;
}

.li1:hover .desc, .li2:hover .desc, .li3:hover .desc , .li4:hover .desc , .li5:hover .desc {
  opacity: 1;
  visibility: visible;
  transform: translateY(-20px);
}
.li2:hover .desc{
    transform: translateY(-80px);
}
.li3:hover .desc{
    transform: translateY(-20px);
}
.li4:hover .desc{
    transform: translateY(-80px);
}
.title {
  position: absolute;
  top: 5%; 
  left: 5%; 
  font-size: 4vw; 
  font-weight: 900; 
  color: #ffffff; // Light color for contrast against the background
  text-align: center;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); // More pronounced shadow for depth
  letter-spacing: 0.2em; // Increased letter spacing for a modern look
  padding: 20px 40px; // More padding for a bolder appearance
  border-radius: 15px; // Larger rounded corners
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); // Thicker shadow for a floating effect
  z-index: 1001; // Ensure it's above other elements
  width: max-content; // Width based on content
  margin: 0 auto; // Auto margins to center the block element
}

.bottom {
  position: absolute;
  top: 25%; // Slightly above the bottom edge
  left: 3%; // Slightly indented from the left edge
  width: 30%; // Fixed width to contain the text
  font-size: 1.5vw; // Slightly larger font size for readability
  color: #ffffff; // Light color for contrast
  font-style: italic; // Italic font style for a narrative feel
  line-height: 1.6; // Increased line height for better readability
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); // Subtle shadow for legibility
  padding: 20px; // Padding around the text
  border-radius: 10px; // Rounded corners
  background-color: rgba(0, 0, 0, 0.4); // Transparent black background for text contrast
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); // Soft shadow for depth
  z-index: 1000; // Ensure it's above other elements
}
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
  color: #FFDEE9;
}
/* 对按钮.btn72的:before伪元素进行样式设置 */
.btn72:before{
  content: ''; /* 内容为空 */
  width: 0; /* 宽度为0 */
  height: 2px; /* 高度为2px */
  background-color: #8BC6EC; /* 背景颜色为深蓝色 */
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
  background: linear-gradient(60deg, #FAACA8, #D9AFD9);
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
