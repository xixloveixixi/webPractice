<template>
  <div class="main">
    <div class="header">
      <div class="title">江湖重庆</div>
      <div class="content">舌尖滚惊雷，眉目动山城</div>
    </div>
  </div>
  <div class="mainBody">
    <div class="item words">
      <h1 class="wItem w1">雄起</h1>
      <h3 class="wItem w2">不存在</h3>
      <h4 class="wItem w3">巴适得很</h4>
      <h2 class="wItem w4">莫虚</h2>
      <h5 class="wItem w5">来起</h5>
      <h3 class="wItem w6">吆不倒台</h3>
      <div class="content">
        重庆的江湖气息，并非仅仅体现在刀光剑影之中，更融入了那些充满地域特色的俚语之中，蕴含着热血与激情。"雄起"这一词汇，犹如重庆人面对困境与不公时的坚定信念和顽强反抗，彰显出他们不屈不挠的精神风貌；而"巴适得很"则如同重庆人生活中的调味品，充分展现了他们那种充实、满足、享受当下的生活态度。
      </div>
    </div>
    <div class="item paoge">
      <div class="pContent">
        <div class="img"><img src="../assets/img/paoge.png" alt="" /></div>
        <p>袍哥文化下长起来的重庆人，没在怕的</p>
        <p>
          重庆的男娃儿他们拜的是陈真，唱的是霍元甲，蘸一笔长江水，就墨挥毫。但一脱掉帽子，他们爱的还是茶馆，吃不腻的还是火锅，也都血性义气、快意恩仇，从外到里，无处不重庆。
        </p>
        <P
          >即使表面怂如《火锅英雄》里的眼镜儿，但每一个关键时刻都有他的支撑。“兄弟之间就是要相互扎起”，勒是重庆男娃儿。</P
        >
        <P
          >而重庆女娃儿呢，一言蔽之，就是辣！胆大泼辣、独立有主见，永远把日子过在自己的手里。数据显示，全国女性企业家占企业家比重为20%，其中重庆市女性企业家占比就高达30%，位列全国首位。</P
        >
        <p class="tips">
          tips:袍哥是川渝民间组织“哥老会”成员的俗称,袍哥一词源于《诗经·无衣》“与子同袍”之义,其内涵则表示“与子同仇”之宗旨
        </p>
      </div>
    </div>
    <div class="item tikan">
      <div class="card">
        <div class="top" >
         <div class="tImage">
           <img src="../assets/img/tikan.png" alt="" />
         </div>
         <div class="content">
          在重庆，梯坎不仅是连接山城的通道，更是重庆人坚韧不拔精神的象征。攀爬梯坎，体验山城独特的麻辣生活，每一级台阶都承载着重庆的文化底蕴。
         </div>
        </div>
      </div>
      <div class="card">
        <div class="top" >
         <div class="content">
          山城地形的逼仄促使人际关系紧密，催生出“梯坎边上唠家常，院坝里头解纠纷”的社区凝聚力。
         </div>
         <div class="tImage">
           <img src="../assets/img/tikan2.jpg" alt="" />
         </div>
        </div>
      </div>   <div class="card">
        <div class="top" >
         <div class="tImage">
           <img src="../assets/img/tikan3.jpg" alt="" />
         </div>
         <div class="content">
          “走一走梯坎，健康长寿九十九”，这句俗语道出了重庆人对生活的热爱。而重庆的小面、火锅，更是这份热情的美食体现，每一口都是对生活的赞歌。
         </div>
        </div>
      </div>
    </div>
    <div class="foot">
    <div class="btn72" @click="backHome">
            继续旅程
        </div> 
    </div>
  </div>
</template>
<script setup>
import router from '@/router';
const backHome = () => {
    router.push('/shouye'); // 跳转到首页
}
</script>
<style lang="scss" scoped>
div{
  margin: none;
}
body,
html {
  margin: none;
  padding: none;
  background-color: #522546;
}
.foot{
  background-color: #522546;
  margin-top: 20px;
}
.main {
  margin: none;
  width: 100%;
  height: 100vh;
  background-color: #522546;
  position: relative;
  .header {
    .title {
      font-size: 5vw;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%);
      color: #fff;
    }
    .content {
      font-size: 2vw;
      position: absolute;
      left: 60%;
      top: 55%;
      color: #fff;
    }
  }
}
.mainBody {
  margin: none;
  padding: 0 10vw;
  background-color: #522546;
  margin: 0;
  .item {
    height: 500px;
    margin: none;
    background-color: #a6a6d2;
    color: coral;
    font-size: 60px;
    animation: appear 1s linear forwards, disappear 1s linear forwards;
    animation-timeline: view();
    animation-range: entry, exit;
  }
  .words {
    position: relative;
    .w1 {
      position: absolute;
      top: -10%;
      left: 5%;
      color: #fff;
    }
    .w2 {
      position: absolute;
      top: 28%;
      left: 46%;
      color: #c7c7e2;
    }
    .w3 {
      position: absolute;
      top: 0%;
      left: 40%;
      color: #8080c0;
    }
    .w4 {
      position: absolute;
      top: 50%;
      left: 60%;
      color: #5a5aad;
    }
    .w5 {
      position: absolute;
      top: 20%;
      left: 80%;
      color: #484891;
    }
    .w6 {
      position: absolute;
      top: -15%;
      left: 70%;
      color: #e6e6f2;
    }
    .content {
      font-size: 20px;
      width: 350px;
      height: auto;
      position: absolute;
      bottom: 5%;
      left: 5%;
      color: #e6e6f2;
    }
  }
  .paoge {
    color: #5151a2;
    font-size: 24px;
    .pContent {
      width: 700px;
      height: auto;
      margin-left: 5%;
      margin-top: 5%;
      padding: 20px;
      .img {
        width: 250px;
        height: auto;
        position: absolute;
        top: -5%;
        right: -5%;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .tips {
        font-size: 14px;
        color: #fff;
      }
    }
  }
  .tikan {
  padding: 20px;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap; // Allows the cards to wrap on smaller screens
  margin: none;
  .card {
    width: 30%;
    min-height: 300px; // Set a minimum height to maintain aspect ratio
    background-color: #f5e6ff; // Lighter shade for a softer look
    font-size: 16px; // Slightly smaller font size for better readability
    color: #522546;
    border-radius: 10px; // Rounded corners for a sleek look
    overflow: hidden; // Ensures content doesn't spill out of the card
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
    transition: transform 0.3s ease; 

    &:hover {
      transform: translateY(-10px); 
    }

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      box-sizing: border-box;
      width: 100%;

      .tImage {
        width: 100%;
        height: auto;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          display: block; 
        }
      }

      .content {
        text-align: center;
        padding: 10px;
        font-weight: 600; 
        line-height: 1.6; 
        background-color: rgba(0, 0, 0, 0.1);
        margin: 10px 0;
      }
    }
  }
}

  div:nth-child(2n) {
    background-color: #ceceff;
  }
  @keyframes grow-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
  @keyframes appear {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }

    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }
  @keyframes disappear {
    100% {
      opacity: 0;
      transform: scaleX(0);
    }

    0% {
      opacity: 1;
      transform: scaleX(1);
    }
  }
}
.foot{
  margin: none;
  background-color: #522546!important;
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
  color: #f5e6ff;
}
/* 对按钮.btn72的:before伪元素进行样式设置 */
.btn72:before{
  content: ''; /* 内容为空 */
  width: 0; /* 宽度为0 */
  height: 2px; /* 高度为2px */
  background-color: #a6a6d2; /* 背景颜色为深蓝色 */
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
  background: linear-gradient(60deg, #522546, #ceceff);
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
