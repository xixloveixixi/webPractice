<template>
    <div class="shouye">
        <div class="banner">
            <div class="bItem" @click="goToShanShui">
                <div class="mark"></div>
                <div class="titleContent">山水之城，立体魔幻</div>
                <div class="image">
                  <img src="../assets/img/shouye_1.png" alt="">
                </div>
            </div>
            <div class="bItem" @click="goToMeiShi">
                <div class="mark"></div>
                <div class="titleContent">火锅之都，舌尖上的狂欢</div>
                <div class="image">
                  <img src="../assets/img/shouye_2.png" alt="">
                </div>
            </div> <div class="bItem" @click="goToLiShi">
                <div class="mark"></div>
                <div class="titleContent">历史底蕴，红色记忆</div>
                <div class="image">
                  <img src="../assets/img/shouye_3.png" alt="">
                </div>
            </div> <div class="bItem" @click="goToReQing">
                <div class="mark"></div>
                <div class="titleContent">江湖气息，热情豪爽</div>
                <div class="image">
                  <img src="../assets/img/shouye_4.png" alt="">
                </div>
            </div> <div class="bItem" @click="goToWeiLai">
                <div class="mark"></div>
                <div class="titleContent">未来之城，活力无限</div>
                <div class="image">
                  <img src="../assets/img/shouye_5.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';

const goToShanShui = () => {
    router.push('/shanshui')
}
const goToMeiShi = () => {
  router.push('/meishi')
}
const goToLiShi = () => {
  router.push('/lishi')
}
const goToReQing = () => {
  router.push('/reqing')
}
const goToWeiLai = () => {
  router.push('/weilai')
}
</script>

<style lang="scss" scoped>
.shouye {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(../assets/img/shouye_bgd.jpg);
  background-size: cover;
  overflow: hidden;
}

.banner {
  margin-top: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
}

.bItem {
    text-align: center;
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0 10px;
  text-align: center;
  overflow: hidden;
  transition: transform 0.5s ease; // 添加过渡效果

  .image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease; // 添加过渡效果

    img {
      width: 100%;
      height: calc(100% + 30px);
      transition: transform 0.5s ease; // 添加过渡效果
    }
  }

  .mark {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000,$alpha: 0.3);
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease; // 添加过渡效果
  }

  .titleContent {
    position: absolute;
    width: 100%;
    padding: 10px; 
    box-sizing: border-box; 
    font-size: 15px; 
    color: #ffffff;
    line-height: 5; 
    font-weight: bold;
    text-shadow: 0 0 10px rgba($color: #000000,$alpha: 0.5);
    transition: transform 0.5s ease, opacity 0.5s ease; // 添加过渡效果
    opacity: 1; // 初始状态为完全可见
    transform: translateY(100%); // 初始状态标题在.bItem外部
  }

  // 鼠标悬浮时的样式
  &:hover {
    .image img {
      transform: rotate(360deg); // 旋转图片
    }

    .mark {
      opacity: 0; // 使.mark消失
    }
  }
}
</style>
