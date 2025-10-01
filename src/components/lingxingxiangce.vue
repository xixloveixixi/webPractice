<template>
       <!-- 外面的框旋转45,里面的图片旋转-45,悬浮恢复正常 -->
       <div class="container">
     <!-- 1.先进行静态布局,网格布局 -->
      <div class="box">
        <img src="../assets/img/meishi_1.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_2.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_3.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_4.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_5.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_6.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_7.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_8.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_9.jpg" alt="">
      </div>
      <div class="box">
        <img src="../assets/img/meishi_10.jpg" alt="">
      </div>
      
    </div>
</template>
<style lang="scss" scoped>
.container {
    --size: 100px;
    display: grid;
    grid-template-columns: repeat(6, var(--size));
    grid-auto-rows: var(--size);
    place-items: center; // 这将使网格项在容器中居中
    gap: 15px;
    margin-bottom: 50px;
    margin-top: 50px;
}

.box {
  width: 140px;
  height: 150px;
  position: relative;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 0 5px #00000027;
  border: 5px solid #fff;
  cursor: pointer;
  transition: transform 0.3s, z-index 0.3s; // 确保z-index也有过渡效果
  overflow: hidden; /* 防止图片超出盒子 */
  grid-column: auto / span 2;

}

.box:hover {
  transform: rotate(0) scale(1.4);
  z-index: 1;
}

.box:hover img {
  transform: rotate(0) scale(1.1);
}

img {
  object-fit: cover;
  height: 90%;
  width: 100%;
  transform: rotate(-45deg) scale(1.2);
  transition: 0.3s;
}

.container:hover img:not(:hover) {
  filter: brightness(0.5) contrast(0.8);
}

.box:nth-child(5n - 2) {
  grid-column: 2 / span 2; // 跨越两列
}
</style>