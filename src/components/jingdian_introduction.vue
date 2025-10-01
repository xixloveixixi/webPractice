<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { defineProps } from 'vue'
import dzsk from '@/assets/img/jingqu_1.jpg'
import sx from '@/assets/img/jingqu_2.jpg'
import tssq from '@/assets/img/jingqu_3.jpg'
import xns from '@/assets/img/jingqu_4.jpg'
import hyd from '@/assets/img/jingqu_5.jpg'
const props = defineProps({
  currentSectionIndex: Number,
})

const attractions = ref([
  {
    image: dzsk,
    logo: dzsk,
    title: '大足石刻',
    introduction: [
     "大足石刻，中国重庆市的世界文化遗产，集佛教、道教、儒教造像于一体，以其精湛的雕刻技艺、丰富的题材内容和巨大的规模著称，展现了中国古代石刻艺术的巅峰成就。"
    ]
  },
  {
    image: sx,
    logo: sx,
    title: '巫峡三峡',
    introduction: [
     "巫峡，长江三峡的第二峡，以其幽深秀丽而闻名。全长46公里，两岸奇峰陡立，云雾缭绕，仿佛人间仙境。著名景点包括巫山十二峰、神女溪等，文化古迹如陆游古洞、大禹授书台等增添其神秘色彩。巫峡，一幅自然与文化的完美画卷，令人心驰神往。"
    ]
  },
  {
    image: tssq,
    logo: tssq,
    title: '天生三桥',
    introduction: [
     "天生三桥，位于中国重庆市武隆区，是大自然鬼斧神工的杰作。三座天然石桥横跨峡谷，气势磅礴，雄伟壮观。桥下溪流潺潺，桥上绿树成荫，构成了一幅美丽的山水画卷。这里不仅是地质奇观，更是旅游胜地，吸引着无数游客前来领略大自然的神奇与美丽。"
    ]
  },
  {
    image: xns,
    logo: xns,
    title: '仙女山',
    introduction: [
     "仙女山，位于重庆武隆，以其江南魅力的高山草原、林海雪原和秀美丛林著称，被誉为“东方瑞士”。冬雪皑皑，夏草如茵，四季变换间展现不同风情，是避暑赏雪的绝佳胜地。"
    ]
  }, 
  {
    image: hyd,
    logo: hyd,
    title: '洪崖洞',
    introduction: [
      "洪崖洞，位于重庆渝中区嘉陵江畔，是山城著名景点。以其独特的吊脚楼建筑群闻名，依山而建，错落有致，展现山城风情。夜晚灯光璀璨，如梦幻城堡，吸引众多游客前来观光、休闲，体验重庆的独特魅力。"
    ]
  },
])

const selectedProjectIndex = ref(0)
const transitionOffset = ref(0)

const selectedProject = computed(() => attractions.value[selectedProjectIndex.value])

const selectProject = (index) => {
  if (index < 0 || index >= attractions.value.length) {
    console.error('Invalid project index:', index)
    return
  }
  resetInterval(12000) // 重置定时器
  setTimeout(() => {
    selectedProjectIndex.value = index
    shouldAnimate.value = true // 开始过渡动画
    transitionOffset.value = 0 // 最终位置
  }, 0)
}

const intervalId = ref(null)

const resetInterval = (newInterval) => {
  clearInterval(intervalId.value) // 清除现有的定时器
  intervalId.value = setInterval(() => {
    // 设置新的定时器
    const nextIndex = (selectedProjectIndex.value + 1) % attractions.value.length
    selectProject(nextIndex)
  }, newInterval)
}

// 背景动画
import { watchEffect } from 'vue'

const shouldAnimate = ref(false) // 是否触发动画

// 监听 currentSection 的变化
watchEffect(() => {
  if (props.currentSectionIndex == 3) {
    shouldAnimate.value = true
  } else {
    shouldAnimate.value = false
  }
})

onMounted(() => {
  selectedProjectIndex.value = 1
  selectProject(1)
  intervalId.value = setInterval(() => {
    const nextIndex = (selectedProjectIndex.value + 1) % attractions.value.length
    selectProject(nextIndex)
  }, 12000)
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})

// 监听 currentSectionIndex 的变化
watch(
  () => props.currentSectionIndex,
  (newValue) => {
    if (newValue === 3) {
      // 当 currentSectionIndex 为 3 时，切换到第一个项目并触发动画
      const nextIndex = (selectedProjectIndex.value + 1) % attractions.value.length
      selectProject(nextIndex)
      // selectProject(0)
      shouldAnimate.value = true // 确保动画触发
      resetInterval(12000) // 重置定时器
    } else {
      // 当切换到其他 section 时，清除定时器并停止动画
      clearInterval(intervalId.value)
      shouldAnimate.value = false // 停止过渡动画
    }
  },
)
</script>

<template>
  <div class="container">
    <div class="left">
      <div class="show">
        <div class="image_Box">
          <div class="move">
            <img
              v-for="(attraction, index) in attractions"
              :key="index"
              :src="attraction.image"
              alt=""
              class="images"
              :class="{ active: selectedProjectIndex === index }"
              :style="{
                transform:
                  selectedProjectIndex === index
                    ? `translateX(${transitionOffset}px)`
                    : 'translateX(-100px)',
                opacity: selectedProjectIndex === index ? 1 : 0,
              }"
            />
          </div>
        </div>
        <div class="choose">
          <div
            v-for="(attraction, index) in attractions"
            :key="index"
            class="thumbnail"
            :class="{ selected: selectedProjectIndex === index }"
            @click="selectProject(index)"
            :style="{ backgroundImage: `url(${attraction.logo})` }"
          ></div>
        </div>
      </div>
    </div>
    <div class="right">
      <transition :name="shouldAnimate ? 'slide-right' : ''" mode="out-in">
        <div class="title" :key="selectedProject.title">
          <div class="big">{{ selectedProject.title }}</div>
        </div>
      </transition>
      <transition :name="shouldAnimate ? 'slide-right-delay2' : ''" mode="out-in">
        <div class="introduction" :key="selectedProject.introduction">
          <div class="detail" v-for="(item, index) in selectedProject.introduction" :key="index">
            {{ item }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
//   padding-top: 52px;
  position: relative;
  overflow: hidden;
}
.left {
  width: 50%;
  float: left;
  position: relative;
  display: flex;
  min-width: 600px;
  .show {
    margin-top: 10%;
    margin-right: 10px;
    position: relative;
    height: 700px;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      right: -26px;
      bottom: 268px;
      width: 2rem;
      height: 2rem;
      background: #3778e5;
    }
    .image_Box {
      display: flex;
      height: 600px;
      width: 100%;
      position: relative;
      margin-right: 80px;
      .images {
        position: absolute; /* 确保所有图片的位置一致 */
        // top: 0;
        // left: 0;
        z-index: 2;
        width: 700px;
        height: 600px;
        background-size: contain;
        background-position: right;
        transition: transform 3s cubic-bezier(0.4, 0, 0.2, 1);
        // opacity 0.8s ease; /* 添加平滑过渡效果，先快后慢 */
        &:nth-child(1) {
          // width: 1000px;
          height: 500px;
          bottom: 30px;
          left: 0;
        }
        &:nth-child(2) {
          // width: 1000px;
          height: 500px;
          bottom: 30px;
          left: 0;
        }
        &:nth-child(3) {
         height: 500px;
          bottom: 30px;
          left: 0;
        }
      }
      .move {
        z-index: 5;
        transition: transform 0.8s ease;
      }
      .move:hover {
        transform: translateX(30px); /* 鼠标悬浮时向右平移 30px */
      }
    }
    .choose {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      margin-top: 20px;
      .thumbnail {
        width: 80px;
        height: 80px;
        margin-right: 10px;
        border-radius: 8px;
        background-size: cover;
        background-position: center;
        border: 2px solid transparent;
        overflow: hidden;
        cursor: pointer;
        &:first-child {
          background-color: #000000;
        }
        &:nth-child(2) {
          background-color: #fff;
        }
        &:nth-child(3) {
          background-color: #fff;
        }
        &:hover {
          border-color: #3778e5;
        }
        &.selected {
          border-color: #3778e5;
        }
      }
    }
  }
}

.right {
  width: 35%;
  float: right;
  text-align: center;
  margin-right: 50px;
  position: relative;
}

.right .title {
  width: 100%; /* 确保标题占据整个容器的宽度 */
  margin-top: 40%;
  position: relative;
}

.right .title .big {
  font-size: 60px;
  font-weight: bold;
  margin-right: 0; /* 移除右边距，使标题居中 */
  display: inline-block; /* 使标题成为行内块元素，以便居中 */
}

.right .introduction {
  width: 100%; /* 确保介绍文本占据整个容器的宽度 */
  margin-top: 10%;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.5;
  color: #3d424d;
}

.right .introduction .detail {
  margin-bottom: 10px;
}


/* Slide right transition */
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Slide right delay 1 */
.slide-right-delay1-enter-active,
.slide-right-delay1-leave-active {
  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}
.slide-right-delay1-enter-from,
.slide-right-delay1-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-delay1-enter-to,
.slide-right-delay1-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-delay1-enter-active {
  transition-delay: 0.2s;
}

/* Slide right delay 2 */
.slide-right-delay2-enter-active,
.slide-right-delay2-leave-active {
  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}
.slide-right-delay2-enter-from,
.slide-right-delay2-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-delay2-enter-to,
.slide-right-delay2-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-delay2-enter-active {
  transition-delay: 0.4s;
}

/* Slide right delay 3 */
.slide-right-delay3-enter-active,
.slide-right-delay3-leave-active {
  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}
.slide-right-delay3-enter-from,
.slide-right-delay3-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-delay3-enter-to,
.slide-right-delay3-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-delay3-enter-active {
  transition-delay: 0.6s;
}

/* Slide right delay 4 */
.slide-right-delay4-enter-active,
.slide-right-delay4-leave-active {
  transition:
    transform 0.8s ease,
    opacity 0.8s ease;
}
.slide-right-delay4-enter-from,
.slide-right-delay4-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-delay4-enter-to,
.slide-right-delay4-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-delay4-enter-active {
  transition-delay: 0.8s;
}
</style>
