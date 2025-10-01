<template>
    <div class="container" ref="container">
        <div class="item" v-for="item in dataLists" :key="item.id">
            <div class="image" :style="{ height: item.height }">
                <img :src="item.src" :alt="`Image ${item.id}`">
            </div>
        </div>
    </div>
</template>



<script setup>
import { onMounted, ref } from 'vue';
import img1 from '../assets/img/waterfall_1.jpg';
import img2 from '../assets/img/waterfall_2.jpg';
import img3 from '../assets/img/waterfall_3.jpg';
import img4 from '../assets/img/waterfall_4.jpg';
import img5 from '../assets/img/waterfall_5.png';
import img6 from '../assets/img/waterfall_6.jpg';
import img7 from '../assets/img/waterfall_7.jpg';
import img8 from '../assets/img/waterfall_8.jpg';
import img9 from '../assets/img/waterfall_9.jpg';
import img10 from '../assets/img/waterfall_10.jpg';

const dataLists = [
    {id:1, src: img1, height:'200px'},
    {id:2, src: img2, height:'300px'},
    {id:3, src: img3, height:'400px'},
    {id:4, src: img4, height:'200px'},
    {id:5, src: img5, height:'300px'},
    {id:6, src: img6, height:'400px'},
    {id:7, src: img7, height:'500px'},
    {id:8, src: img8, height:'200px'},
    {id:9, src: img9, height:'300px'},
    {id:10, src: img10, height:'300px'},
    {id:11, src: img3, height:'185px'},
    {id:12, src: img7, height:'90px'},
    {id:13, src: img1, height:'95px'},
];
const container = ref(null);
const hrr = ref([]);

const fWaterFall = () => {
  if (container.value) {
    let clientWidth = container.value.clientWidth;
    let oItems = document.getElementsByClassName('item');
    if (oItems.length > 0) {
      let itemWidth = oItems[0].offsetWidth; // 使用offsetWidth
      let num = Math.floor(clientWidth / itemWidth);
      container.value.style.width = num * itemWidth + 'px';
      hrr.value = []; // 重置高度数组
      for (let i = 0; i < oItems.length; i++) {
        if (i < num) {
          hrr.value.push(oItems[i].offsetHeight);
          oItems[i].style.position = 'absolute';
          oItems[i].style.top = '0px';
          oItems[i].style.left = i * itemWidth + 'px';
        } else {
          let minHeight = Math.min(...hrr.value);
          let minIndex = findMinIndex(minHeight, hrr.value);
          console.log(minHeight);
          oItems[i].style.position = 'absolute';
          oItems[i].style.top = minHeight + 'px';
          oItems[i].style.left = minIndex * itemWidth + 'px';
          hrr.value[minIndex] += oItems[i].offsetHeight; // 更新高度数组
        }
      }
    }
  }
};

const findMinIndex = (minHeight, hrr) => {
  return hrr.indexOf(minHeight);
};

onMounted(() => {
    fWaterFall();
    // 初始化放大状态
    dataLists.forEach(item => {
        item.zoomed = false;
    });
});
</script>

<style scoped>
.container {
    position: relative;
    clear: both;
    margin: 0 auto;
}
.item {
    float: left;
    width: 200px;
    height: auto;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
}
.image {
    width: 100%;
    box-shadow: 0 0 0 5px #ccc;
    cursor: pointer; /* 改变鼠标指针为点击状态 */
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease; /* 添加过渡效果 */
}

img:hover {
    transform: scale(1.2); /* 鼠标悬浮时放大图片 */
}

</style>
