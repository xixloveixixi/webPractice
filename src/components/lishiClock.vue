<template>
    <!-- 静态页面：两个按钮：上下
     内容：卡片的挑剔/内容/图片 
     时钟：里面部分，外面部分-->
     <!-- 主要内容 -->
     <div class="main">
        <div class="content">
            <div class="btnUp btn" @click="onClickPre">
                <img src="../assets/icon/btn-arrow-up.png" alt="">
            </div>
            <div class="btnDown btn" @click="onClickNext">
                <img src="../assets/icon/btn-arrow-down.png" alt="">
            </div>
            <div class="mainContent">
                <div class="item">
                <div class="time">
                    1927年
                </div>
                <div class="title">重庆地区发生武装起义</div>
                <div class="item-content">这一年，重庆地区发生了多次重要的武装起义和革命斗争，如綦江、涪陵、南川的农民武装暴动和攻打南川县城的革命斗争。这些起义和斗争传播了革命思想，扩大了党和红军的影响，为红军在重庆地区的发展奠定了坚实基础。</div>
            </div>
            <div class="item">
                <div class="time">
                    1935年
                </div>
                <div class="title">红军长征转战重庆</div>
                <div class="item-content">中央红军长征期间转战重庆綦江，这是长征中的一个重要节点。红军在綦江期间，不仅成功扼守了重要关隘，还赢得了当地群众的广泛支持和赞誉。这一时期的革命斗争，展示了红军的英勇无畏和严明的纪律，为长征的胜利作出了重要贡献。</div>
            </div>
            <div class="item">
                <div class="time">
                    1947年至1949年
                </div>
                <div class="title">重庆革命斗争进入高潮</div>
                <div class="item-content">这一时期，重庆地区的革命斗争进入高潮。特别是1949年，人民解放军发动西南战役，解放了包括重庆在内的广大西南地区。在解放前夕，国民党反动派制造了“11·27大屠杀”等惨案，但革命者的牺牲并没有阻挡住解放的脚步。最终，在人民解放军的英勇奋战下，重庆得以解放，迎来了新的历史篇章。。</div>
            </div>
            <div class="item">
                <div class="time">
                    1949年11月30日
                </div>
                <div class="title">重庆解放</div>
                <div class="item-content">这是重庆解放的标志性日期。在这一天，解放军先头部队挺进重庆市区，重庆宣告解放。这一历史时刻标志着重庆人民在中国共产党的领导下，经过长期的英勇斗争，终于实现了民族独立和人民解放的伟大胜利。</div>
            </div>
            

            </div>
          
        </div>
        <div id="clock">
            <div class="clock-center"></div>
            <div class="clock-pointer"></div>
            <div class="clock-table"></div>
        </div>
     </div>

</template>
<style lang="scss" scoped>
.main{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    .content{
        width: 100vw;
        height: 100vh;
        .btn {
            width: 5vw;
            height: 5vw;
            z-index: 999;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .btnUp {
            position: absolute;
            top: 3%;
            left: 25%;
        }
        .btnDown {
            position: absolute;
            bottom: 3%;
            left: 25%;
        }
        .mainContent{
            width: 30%;
            height: 100%;
            position: absolute;
            left: 15%;
            overflow: hidden;
            
             .item{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            transition: transform .8s ease-in-out;
            .time{
                font-size: 32px;
            }
            .title{
                font-size: 24px;
                margin: 7%;
            }
            .item-content{
                font-size: 18px;
            }

        }
        }
       

    }
   /* 时钟容器 */
#clock {
    height: 130%;
            /* 纵横比为1:1 */
            aspect-ratio: 1 / 1;
            position: absolute;
            right: -28%;
            top: -15%;
            border-radius: 50%;
            background-color: white;
            border: #ff9214 30px solid;
}

/* 时钟中心点 */
.clock-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background: #333;
    border-radius: 50%;
}

/* 时钟指针 */
.clock-pointer {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: 50% 100%;
    width: 10px;
    height: 20%;
    background: #333;
}

/* 时钟表盘 */
.clock-table {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}


}
</style>
<script setup>
import { ref, onMounted } from 'vue';

const slides = ref([]);
let offset = ref(0);

onMounted(() => {
    slides.value = Array.from(document.querySelectorAll('.item'));
    console.log(slides.value);
    const clockTable = document.querySelector('.clock-table');
    if (clockTable) {
        for (let i = 0; i < 360; i += 6) {
            const scale = document.createElement('div');
            scale.className = 'invisible-table';
            scale.style.transform = `rotate(${i}deg)`;
            


        }
    } else {
        console.error('.clock-table element not found');
    }
});
let maxOffset = ref(0);
let minOffset = ref(-3);

// 向后切换卡片
function onClickNext() {
    offset.value = Math.max(minOffset.value, offset.value - 1);
    slides.value.forEach((slide, index) => {
        slide.style.transform = `translateY(${(offset.value) * 100}%)`;
    });
    clockRotate(offset.value * 60); 
}

// 向前切换卡片
function onClickPre() {
    offset.value = Math.min(maxOffset.value, offset.value + 1);
    slides.value.forEach((slide, index) => {
        slide.style.transform = `translateY(${(offset.value) * 100}%)`;
    });
    clockRotate(offset.value * 60); 
}

// 旋转时钟表盘
function clockRotate(degree) {
    const clock = document.getElementById('clock');
    if (clock) {
        clock.style.transform = `rotate(${degree}deg)`;
    } else {
        console.error('#clock element not found');
    }
}
</script>
