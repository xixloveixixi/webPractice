<template>
    <div class="content">
      <h1>欢迎来到未来之城</h1>
      <div class="background" :style="backgroundStyle">
        <span>重庆</span>
      </div>
      <h2>
        在中国西部的群山与江河之间，一座魔幻与未来交织的城市正以澎湃的活力崛起——这里是重庆，一座被山水雕琢的立体之城，更是中国西部的未来之都。
      </h2>
    </div>
    <div class="main">
      <div class="left">智造重镇·智慧名城</div>
      <div class="right">
        <div class="wlSwiper">
          <transition-group name="slide" tag="div" class="img-container">
            <div class="img" v-for="(url, index) in imgUrls" v-show="curIndex === index" :key="url" :style="{ backgroundImage: `url(${url})` }"></div>
          </transition-group>
          <div class="desc">
            <div class="select">
              <div class="item" v-for="(url, index) in imgUrls" :key="index" @click="handelItem(index)">
                <img :src="url" alt="未来图片">
              </div>
            </div>
            <transition name="fade">
              <div class="content" v-if="descriptions[curIndex]">
                <p>{{ descriptions[curIndex] }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="btn72" @click="backHome">
            继续旅程
        </div> 
    </div>
  </template>
  
  <script setup>
  import router from '@/router';
  import { ref, onMounted, onUnmounted } from 'vue';
  let curIndex = ref(0);
  const backgroundStyle = ref({
    backgroundPosition: '50% 50%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  });
  const backHome = () => {
    router.push('/shouye'); // 跳转到首页
}
  const imgUrls = [
  new URL('../assets/img/weilai2.png', import.meta.url).href,
  new URL('../assets/img/welai3.jpg', import.meta.url).href,
  new URL('../assets/img/weilai4.jpg', import.meta.url).href,
];

const descriptions = [
  '重庆是中国智能汽车产业的重要基地，拥有强大的汽车制造基础和研发能力。长安汽车等本地企业积极发展自动驾驶和车联网技术，重庆还设有自动驾驶测试示范区，推动智能汽车产业发展。政府提供政策支持，促进产业链完善，市场需求增长，为智能汽车提供了良好的发展环境。',
  '重庆在电子信息与半导体领域的发展非常引人注目。作为全球最大的笔记本电脑生产基地，重庆在电子信息产业方面有着深厚的底蕴。近年来，半导体产业在重庆的发展尤为突出，尤其是功率半导体领域，其产能已经进入全国前三，并有望在2025年成为全国最大的功率半导体和特色集成电路生产基地。',
  '重庆人工智能创新中心是重庆市为推动人工智能产业发展而建立的重要平台，它旨在汇聚创新资源，促进技术研发，加快成果转化，以及培养专业人才。重庆人工智能创新中心的建设和发展，体现了重庆市政府对科技创新和产业转型升级的高度重视，也是推动重庆市乃至西南地区经济社会发展的关键举措。'
];
  onMounted(() => {
    // 滚动事件
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const opacity = Math.min(scrollY / maxScroll, 1);
      backgroundStyle.value.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% +${scrollY}px)`;
      backgroundStyle.value.WebkitTextFillColor = `rgba(255, 255, 255, ${opacity})`;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  const handelItem = (i) => {
    curIndex.value = i;
    console.log(curIndex);
  }
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    height: 200vh;
    overflow-x: hidden;
  }
  
  .background {
    background-image: url("../assets/img/weilai1.jpg");
    background-size: cover;
    height: 200vh;
    font: 900 20rem '';
    line-height: 150vh;
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  .background::before {
    content: '';
    background-size: cover;
    background-image: inherit;
    background-position: 50% 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -99;
  }

  
  h1 {
    position: absolute;
    text-align: center;
    background: -webkit-linear-gradient(left, #0A74DA, #00B4FF, #A8ACB5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent; /* Fallback for non-webkit browsers */
    font-size: 8vw;
    top: 10%;
    width: 100%;
    letter-spacing: 20px;
    -webkit-transform-style:preserve-3d;            /*设置元素保留3D位置*/
		   -webkit-animation:run  ease-in-out 9s infinite;    /*设置动画*/
  }
  
  h2 {
    position: absolute;
    letter-spacing: 2px;
    top: 120vh;
    width: 60%;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    padding: 30px;
    background-color: rgba(0, 0, 0, .3);
    color: #BCC6CC;
  }
  @-webkit-keyframes run{                            /*创建动画*/
		   0%{
		      -webkit-transform:rotateX(-5deg) rotateY(0);
		   }
		   50%{
		      -webkit-transform:rotateX(0) rotateY(180deg);
		   }
		   100%{
		      -webkit-transform:rotateX(5deg) rotateY(360deg);
		   }

		}
        @keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.main {
  background: linear-gradient(to bottom, #0A2E36, #1A5373, #D9E2F3);
  padding: 50px 50px;
  display: flex;
  align-items: center;
}

.left {
  font-size: 6vw;
  writing-mode: vertical-lr;
  margin-right: 5vw;
  color: #D9E2F3;
  animation: flicker 2s infinite;
}

.wlSwiper {
  display: flex;
  align-items: center;
}

.wlSwiper .img {
  width: 40vw;
  height: 30vw;
  background-size: cover;
  background-position: center;
}

.desc {
  margin-left: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 30vw;
  width: 30vw;
  position: relative;
}

.desc .select {
  height: 5vw;
  position: absolute;
  top: 1vw;
  left: 1vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.select .item {
  width: 8vw;
  height: 8vw;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.select .item:hover {
  transform: scale(1.1);
}

.select .item img {
  width: 100%;
  height: 100%;
}

.desc .content {
  position: absolute;
  bottom: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 15vw;
  letter-spacing: 5px;

}

.img-container {
  position: relative;
  width: 40vw;
  height: 30vw;
  overflow: hidden;
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
.foot{
    background: linear-gradient(to bottom, #0A2E36, #1A5373, #D9E2F3);
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
  color: #D9E2F3;
}
/* 对按钮.btn72的:before伪元素进行样式设置 */
.btn72:before{
  content: ''; /* 内容为空 */
  width: 0; /* 宽度为0 */
  height: 2px; /* 高度为2px */
  background-color: #0A2E36; /* 背景颜色为深蓝色 */
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
  background: linear-gradient(60deg, #1A5373, #D9E2F3);
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
  