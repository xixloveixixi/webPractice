<template>
 <div class="content">
    <!-- 利用视觉滚动差来实现 -->
    <ul>
        <li class="liImg imgOne">
        </li>
        <li class="liWords">
            重庆的独特地形让它被誉为“8D魔幻城市”。
        </li>
        <li class="liImg imgTwo">
        </li>
        <li class="liWords">
            嘉陵江与长江在这里交汇，将城市分割成错落有致的板块。
        </li>
        <li class="liImg imgThree">
        </li>
        <li class="liWords">
            轻轨穿楼而过
        </li>
        <li class="liImg imgFour">
        </li>
        <li class="liWords">
            立交桥层层叠叠，仿佛一座巨大的迷宫。
        </li>
        <li class="liImg imgFive">
        </li>
        <li class="liWords">
            这样别具一格、令人叹为观止的地形，宛如大自然的鬼斧神工，雕琢出了众多妙趣横生、引人入胜的景点。
        </li>
        <li class="liImg imgSix">
            <jingdian_introduction></jingdian_introduction>
        </li>
        <li class="liImg imgSix">
            <puBuLiu></puBuLiu>
        </li>
        <div class="foot">
            <backHome></backHome>
        </div>
       
    </ul>
    <!-- 各种景区 -->

 </div>
</template>
<script setup>
import jingdian_introduction from '@/components/jingdian_introduction.vue';
import puBuLiu from '@/components/puBuLiu.vue';
import backHome from '@/components/backHome.vue';
</script>
<style lang="scss">
.content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        display: block;
    }
}

.liImg {
    width: 100%;
    height: 800px;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

.imgOne {
    background-image: url('../assets/img/shanshui_1.jpeg');
}

.imgTwo {
    background-image: url('../assets/img/shanshui_2.jpg');
}

.imgThree {
    background-image: url('../assets/img/shanshui_3.jpg');
}

.imgFour {
    background-image: url('../assets/img/shanshui_4.jpg');
}

.imgFive {
    background-image: url('../assets/img/shanshui_5.jpg');
}

.imgSix {
    background-image: url('../assets/img/sahnshui_bgd.jpg');
}
.liWords {
    width: 100%;
    height: 250px;
    padding: 50px 20px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.5); // 半透明遮罩层
    color: white; 
    text-align: center;
    font-size: 24px; 
    line-height: 100px; 
    margin-top: -250px; // 将文字置于图片中间
    position: relative;
    z-index: 2;
}

.foot{
    background-size: cover;
    padding: 1vw;
    box-sizing: border-box;
}


</style>