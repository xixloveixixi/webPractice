 
<template>
    <div id="content">
      <div id="click-section">
        <div id="drawerboxes">
          <div
            class="drawerbox"
            v-for="(item, index) in dataList"
            :key="item.id"
            :class="{ active: chosenSlideNumber === index + 1 }"
          >
            <button class="drawer-btn" @click="slideTo(index + 1)">
              {{ item.bigTitle }}
              <span class="drawer-head">{{ item.id }}</span>
            </button>
          </div>
        </div>
      </div>
      <div id="slide-section">
        <div id="slide-bar">
          <div id="bar" :style="{ transform: `translateY(${barOffset}px)` }"></div>
        </div>
        <div id="card-section" :style="{ transform: `translateY(${offset}px)` }">
          <div class="card" v-for="item in dataList" :key="item.id" >
            <div class="card-small-title">{{ item.smallTitle }}</div>
            <div class="card-title">{{ item.bigTitle }}</div>
            <div class="card-content">{{ item.content }}</div>
            <div class="card-pic">
              <img :src="item.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<style lang="scss" scoped>
    #content {
        color: aliceblue;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        #click-section{
            width: 35%;
            height: 100%;
            padding: 20px 0;
            position: relative;
            #drawerboxes{
                margin-left: 10%;
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .drawerbox{
                    height: calc(100% / 5.5);
                    width: 70%;
                    position: relative;
                    z-index: 100;
                    transform: translateX(-70%);
                    transition: transform 0.5s ease-in-out;
                }
                .drawer-btn{
                    width: 100%;
                    height: 100%;
                    font-size: 20px;
                    font: 800 30px;
                    background-color: rgba($color: #808080, $alpha: 0.4);
                    border: none;
                    transition: background-image 0.5s ease-in-out;
                    color: #dfe9f3;
                }
                .drawer-head{
                    position: absolute;
                   color: rgba($color: #fff, $alpha: 1.0);
                   font-size: 200px;
                   font-weight: 800;
                   right: -30px;
                   top: calc(50% - 135px);
                   text-shadow: 2px -1px 8px rgba($color: #e3eeff, $alpha: 1.0);
                }
                .drawer-btn:hover {
                   cursor: pointer;
                }
                .drawerbox.active {
                    transform: translateX(0);
                }
                .drawer-btn.active {
                    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
                    color: #dfe9f3;
                }
            }
            #drawerboxes::before{
                content: "";
                position: absolute;
                top: 3%;
                left: -10px;
                width: 8px;
                height: 94%;
                z-index: 120;
            }
        }
        #slide-section{
            position: relative;
            height: 100%;
            width: 60%;
            display: flex;
            justify-content: center;
            padding: 0 40px;
           background-color: rgba($color: #000000, $alpha: 0.3);
            backdrop-filter: blur(11px);
            #slide-bar{
                position: absolute;
                top: 15%;
                left: 40px;
                height: 70%;
                width: 1px;
                background-color: #fff;
                #bar{
                    position: absolute;
                    height: calc(100% / 4);
                    width: 5px;
                    top: 0;
                    left: -1.2px;
                    background-color: #dfe9f3;
                    transition: transform .5s ease-in-out;
                }
            }
            #card-section{
                height: 100%;
                width: 80%;
                // overflow: hidden;
                .card{
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                    padding: 15% 0;
                    color: #fff;
                    font-size: 30px;
                    transform: transition 0.5s ease-in-out;
                    position: relative;
                    .card-small-title{
                        font-size: 30px;
                        font-weight: 600;
                    }
                    .card-title{
                        font-size: 50px;
                        font-weight: 800;
                        margin: 20px 0;
                    }
                    .card-content{
                        font-size: 18px;
                    }
                    .card-pic{
                        position: absolute;
                        bottom: 25%;
                        width: 90%;
                        height: 300px;
                        margin-top: 20px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            
        }

    }



</style>
<script setup>
import { ref, onMounted, watch } from 'vue';
import gif1 from "../assets/gif/chaoshou_gif.gif"
import gif2 from "../assets/gif/kaoyu_gif.gif"  
import gif3 from "../assets/gif/kaoshaopi_gif.gif"  
import gif4 from "../assets/gif/huoguo_gif.gif"  
const dataList = [
  { id: 1, smallTitle: "皮薄馅大，麻辣鲜香", bigTitle: "重庆抄手", content: "重庆抄手，源自山城的地道美食，以其独特的制作工艺和丰富的口感而闻名。精选上等面粉制成的薄皮，包裹着新鲜猪肉或虾仁等馅料，经过精心调味，每一口都充满了浓郁的鲜香。在滚烫的开水中煮熟后，搭配特制的辣椒油、花椒和葱花等调料，香气扑鼻，味道鲜美，辣而不燥，麻而回甘，是重庆美食文化中不可或缺的一部分，深受食客们的喜爱。", gif:gif1 },
  { id: 2, smallTitle: "外皮酥脆，内里鱼肉滑嫩多汁", bigTitle: "重庆烤鱼", content: "重庆烤鱼，一道集传统与创新于一身的地道美食。源自山城重庆，不仅承载着地方特色的麻辣鲜香，更融合了现代烹饪技艺的精髓。精选优质鱼肉，经过精心腌制与炭火慢烤，外皮金黄酥脆，内里肉质鲜嫩，搭配秘制酱料与时令蔬菜，每一口都是对食材本味的极致追求。", gif: gif2},
  { id: 3, smallTitle: "外焦里嫩，香辣可口", bigTitle: "重庆烤苕皮", content: "重庆烤苕皮，一款源自山城的地道风味小吃。以优质红薯淀粉为原料，经过精心制作与炭火烤制，我展现出软糯而不失嚼劲的口感。搭配秘制调料与丰富馅料，如酸豆角、泡椒等，我呈现出香辣鲜美、层次分明的独特风味。", gif: gif3 },
  { id: 4, smallTitle: "江湖人称“麻辣界扛把子”", bigTitle: "重庆火锅", content: "重庆火锅，一道源自中国重庆市的传统美食，享誉中外。以牛油红汤为基底，融合了麻、辣、鲜、香、烫的独特风味，搭配丰富多样的食材，如鲜嫩的肉片、脆爽的毛肚、各式蔬菜等，为食客们带来一场味蕾的盛宴。", gif: gif4 },
];
 
let chosenSlideNumber = ref(1); // 当前选择的抽屉/内容卡索引
let barOffset = ref(0); // 滑动条偏移量
let offset = ref(0) //整个偏移量
// 计算滑动条位置
function calculateBarOffset() {
  const drawerHeight= document.querySelector('.drawerbox').offsetHeight;
  barOffset.value = chosenSlideNumber.value * drawerHeight - drawerHeight ; // 居中显示
}
 
// 切换抽屉和内容卡
function slideTo(index) {
  chosenSlideNumber.value = index;
  calculateBarOffset(); // 更新滑动条位置
}
// 组件挂载后启动自动轮播
onMounted(() => {
  calculateBarOffset(); // 初始位置
});
 
// 监听chosenSlideNumber的变化，更新卡片和滑动条位置
watch(chosenSlideNumber, (newValue) => {
  offset.value = -(newValue - 1) * document.querySelector('.card').offsetHeight; // 整体偏移量
  calculateBarOffset(); // 更新滑动条位置
});

</script>