<template>
  <div class="canvaszz"></div>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue';

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

<style scoped>
body {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.canvaszz {
  position: absolute;
  background-image: url(img/21.jpg);
  background-size: 100%;
  width: 100%;
  height: 100%;
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
