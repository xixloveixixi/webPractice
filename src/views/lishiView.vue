<template>
        <div class="xingkong">
            <div class="canvaszz"></div>
            <canvas ref="canvas" class="canvas"></canvas>
        </div>
        <div class="content" id="content">
            <div class="crop">
                <ul class="card-list">
                    <li>
                        <div class="card word">
                            <span><strong>1937年3月31日</strong><br/>英美军舰炮击南京，消息传至重庆，中共重庆地委决定举行群众大会抗议。</span>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img src="../assets/gif/xingkong2.gif" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="card word">
                            <span><strong>1945年8月29日至10月10日</strong><br/>两党在重庆进行了一次历史性会谈，最终签订了《双十协定》。</span>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img src="../assets/gif/xingkong2.gif" alt="">
                        </div>
                    </li>  <li>
                        <div class="card word">
                            <span><strong>1949年11月30日</strong><br/>人民解放军发动西南战役，拉开解放重庆的序幕。</span>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img src="../assets/gif/xingkong2.gif" alt="">
                        </div>
                    </li>
                </ul>
                <div class="last-circle"></div>
                <div class="second-circle"></div>
            </div>
            <div class="mask"></div>
            <div class="center-circle" @click="goTonext"></div>

        </div>
        <div class="more">
            更多
        </div>
        

</template>
<script setup>
import router from '@/router';
import { onMounted, ref } from 'vue';
const goTonext = () => {
    router.push('/lishi/detail')
}
const canvas = ref(null);

const drawStars = () => {
  const ctx = canvas.value.getContext('2d');
  const w = canvas.value.width = window.innerWidth;
  const h = canvas.value.height = window.innerHeight;

  let hue = 217, stars = [], count = 0, maxStars = 1300;

  const canvas2 = document.createElement('canvas');
  const ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  const half = canvas2.width / 2;
  const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, '#CCC');
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');

  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
  }

  class Star {
    constructor() {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 8;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 50000;
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
    }

    draw() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    }
  }

  for (var i = 0; i < maxStars; i++) {
    new Star();
  }

  function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
    ctx.fillRect(0, 0, w, h);

    ctx.globalCompositeOperation = 'lighter';
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }

    window.requestAnimationFrame(animation);
  }

  animation();
};

onMounted(() => {
  drawStars();
});
</script>
<style>
body{
    overflow: hidden;
}
:root {
    --rotate-speed : 40;
    --count : 6;
    --easing : cubic-bezier(0.000 , 0.37 , 1.000 , 0.63)
}
.xingkong {
    position: relative;
}
.more{
    position: absolute;
    bottom: 0;
    left: 0;
}
.title{
    z-index: 4;
}
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 1 / 1;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    aspect-ratio: 1 / 1;
    z-index: 1;
  }

  li {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    animation: rotateCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;
  }

  .card {
    width: 15%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 14px;
    gap: 2px;
    background: #FFFFFF;
    box-shadow: 0px 8px 12px rgba(70 , 0 , 255 , 0.1) , 0px 16px 32px rgba(165 , 135 , 255 , 0.1);
    border-radius: 12px;
    font: 400 14px '';
    color: #535062;
    animation: rotateCCW calc(var(--rotate-speed) * 1s) var(--easing) infinite ;
}
.word{
    height: 100px;
}
.card img {
    width: 100%;
    height: 50px;
}
.model-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: blue;
    display: block;
}

svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

li:nth-child(2),
li:nth-child(2) .card {
    animation-delay: calc((var(--rotate-speed) / var(--count)) *  -1s);
}
li:nth-child(3),
li:nth-child(3) .card {
    animation-delay: calc((var(--rotate-speed) / var(--count)) *  -2s);
}li:nth-child(4),
li:nth-child(4) .card {
    animation-delay: calc((var(--rotate-speed) / var(--count)) *  -3s);
}li:nth-child(5),
li:nth-child(5) .card {
    animation-delay: calc((var(--rotate-speed) / var(--count)) *  -4s);
}li:nth-child(6),
li:nth-child(6) .card {
    animation-delay: calc((var(--rotate-speed) / var(--count)) *  -5s);
}

  @keyframes rotateCW {
    from {
      transform: translate3d(0px, -20%, -1px) rotate(-45deg);
    }
    to {
      transform: translate3d(0px, -20%, 0px) rotate(-315deg);
    }
  }


  @keyframes rotateCCW {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(315deg);
    }
  }
.center-circle{
    position: absolute;
    width: 210px;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    background-image: url(../assets/gif/xingkong.gif);
    box-shadow: 0px 8px 12px rgba(70 , 0 , 255 , 0.1) , 0px 16px 32px rgba(165 , 135 , 255 , 0.1);
    border-radius: 50%;
    background-size: cover;
    background-position: -35px 0;
    cursor: pointer;
}
.second-circle {
    position: absolute;
    width: 40%;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    background-color: #fff;
    box-shadow: 0px 8px 12px rgba(70 , 0 , 255 , 0.1) , 0px 16px 32px rgba(165 , 135 , 255 , 0.1);
    border-radius: 50%;
    background-image: url(../assets/gif/xingkong2.gif);
    opacity: 0.8;
}
.last-circle {
    position: absolute;
    width: 60%;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    background-color: #fff;
    box-shadow: 0px 8px 12px rgba(70 , 0 , 255 , 0.1) , 0px 16px 32px rgba(165 , 135 , 255 , 0.1);
    border-radius: 50%;
    background-image: url(../assets/gif/xingkong2.gif);
    opacity: 0.4;
}
.crop{
    -webkit-mask-image : linear-gradient(90deg , rgba(0,0,0,0) , rgba(0,0,0,0) 50% , rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%)
}
.mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-image: radial-gradient(100% 50%  at 100% 50%, rgba(60,26,229,0.25) 0%, rgba(60,26,229,0.187) 20%, rgba(60,26,229,0.104) 40%, rgba(60,26,229,0.1) 50%, rgba(60,26,229,0) 60%, rgba(60,26,229,0) 90%);
}
.mask::after{
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    right: 0;
    display: block;

}
.canvaszz {
  position: absolute;
  background-image: url(img/21.jpg);
  background-size: 100%;
  width: 100%;
  height:auto;
  z-index: -1;
  filter: alpha(opacity=20);
  opacity: 0.4;
}

.canvas {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: auto;
  vertical-align: baseline;
  z-index: -2;
}

</style>
