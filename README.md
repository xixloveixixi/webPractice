
# 重庆城市展示网站

这是一个基于Vue 3 + Vite开发的重庆城市展示网站，旨在通过视觉化的方式全面展示重庆的自然风光、美食文化、历史底蕴和现代魅力，为用户提供沉浸式的重庆文化体验。

## 项目概述

本项目是一个单页应用(SPA)，通过多个精心设计的模块，从不同角度展现重庆这座城市的独特魅力。网站采用现代化的前端技术栈，结合丰富的视觉效果和交互体验，打造了一个富有吸引力的城市展示平台。

### 主要特点
- 响应式设计，适配多种设备屏幕
- 丰富的视觉效果和动画体验
- 瀑布流布局展示城市风光
- 历史时间轴呈现重庆发展历程
- 沉浸式美食文化展示
- 星空背景等特色视觉元素

## 技术栈

- **前端框架**：Vue 3 Composition API <mcfile name="package.json" path="d:\chongqing\package.json"></mcfile>
- **构建工具**：Vite 6 <mcfile name="package.json" path="d:\chongqing\package.json"></mcfile>
- **状态管理**：Pinia <mcfile name="src\main.js" path="d:\chongqing\src\main.js"></mcfile>
- **路由管理**：Vue Router 4 <mcfile name="src\router\index.js" path="d:\chongqing\src\router\index.js"></mcfile>
- **UI组件库**：Element Plus 2.9.5 <mcfile name="package.json" path="d:\chongqing\package.json"></mcfile>
- **样式处理**：Sass、CSS3动画 <mcfile name="package.json" path="d:\chongqing\package.json"></mcfile>
- **动画效果**：Animate.css、自定义动画 <mcfile name="package.json" path="d:\chongqing\package.json"></mcfile>
- **性能优化**：组件懒加载、图片优化

## 项目结构
rc/
├── assets/          # 静态资源目录
│   ├── gif/         # GIF动画资源（如chaoshou_gif.gif, huoguo_gif.gif等）
│   ├── icon/        # 图标资源（如btn-arrow-up.png, btn-arrow-down.png）
│   ├── img/         # 图片资源（景点、美食、山水等图片）
│   └── logo.svg     # 项目logo
├── components/      # Vue组件
│   ├── backHome.vue          # 返回首页组件
│   ├── home_swiper.vue       # 首页轮播组件
│   ├── jingdian_introduction.vue # 景点介绍组件
│   ├── lingxingxiangce.vue   # 菱形相册组件
│   ├── lishiClock.vue        # 历史时钟组件
│   ├── mscontent_1.vue       # 美食内容第一部分
│   ├── mscontent_2.vue       # 美食内容第二部分
│   ├── puBuLiu.vue           # 瀑布流展示组件
│   └── xingkong.vue          # 星空背景组件
├── router/          # 路由配置
│   └── index.js     # 路由定义和配置
├── stores/          # Pinia状态管理
│   └── counter.js   # 示例状态管理
├── util/            # 工具函数
│   └── css/         # 全局样式文件
├── views/           # 页面视图
│   ├── HomeView.vue      # 首页视图
│   ├── lishiDetail.vue   # 历史详情视图
│   ├── lishiView.vue     # 历史视图
│   ├── meishiView.vue    # 美食视图
│   ├── reqingView.vue    # 热情视图
│   ├── shanshuiView.vue  # 山水视图
│   ├── shouyeView.vue    # 首页特色视图
│   └── weilai.vue        # 未来展望视图
├── App.vue          # 根组件
└── main.js          # 入口文件

## 功能模块详解

### 1. 首页展示（HomeView）
项目的入口页面，包含一个全屏轮播组件，展示重庆的标志性景点和特色。轮播内容包括洪崖洞、火锅、仙女山、蚩尤九洲城、小面等重庆元素，配有诗意的描述文字。

### 2. 首页特色（shouyeView）
展示重庆的城市特色和亮点，通过精心设计的布局和交互，让用户快速了解重庆的魅力所在。

### 3. 自然风光（shanshuiView）
以视觉滚动差的方式展示重庆的山水风光和独特地形。内容包括：
- 重庆作为"8D魔幻城市"的独特魅力
- 嘉陵江与长江交汇的地理特点
- 轻轨穿楼、复杂立交桥等城市奇观
- 集成景点介绍和瀑布流图片展示

### 4. 美食文化（meishiView）
通过两个主要内容组件展示重庆丰富的美食文化：
- 使用lingxingxiangce（菱形相册）组件展示美食图片
- 优雅的标题和副标题设计
- 背景使用重庆美食主题图片

### 5. 历史人文（lishiView）
通过lishiClock（历史时钟）组件，以时间轴的形式展示重庆的重要历史事件：
- 1927年重庆地区武装起义
- 1935年红军长征转战重庆
- 1947-1949年重庆革命斗争高潮
- 1949年11月30日重庆解放

### 6. 历史详情（lishiDetail）
展示重庆历史文化的详细内容，提供更深入的历史事件介绍。

### 7. 城市热情（reqingView）
展示重庆的城市活力和热情，通过动态效果和互动元素传达重庆的城市精神。

### 8. 未来展望（weilaiView）
展示重庆的未来发展规划和愿景，通过现代设计元素展现城市的发展潜力。

## 特色组件详解

### 1. home_swiper 轮播组件
全屏轮播组件，展示重庆的标志性景观和特色。每个轮播项包含名称和描述文字，通过精美的视觉设计和动画效果，为用户提供沉浸式的第一印象。

### 2. puBuLiu 瀑布流组件
实现自适应的瀑布流布局，用于展示重庆的各种风光图片。支持响应式设计，根据容器宽度自动调整列数，并对图片进行错落有致的排列。

```javascript
// 瀑布流核心算法
const fWaterFall = () => {
  if (container.value) {
    let clientWidth = container.value.clientWidth;
    let oItems = document.getElementsByClassName('item');
    if (oItems.length > 0) {
      let itemWidth = oItems[0].offsetWidth;
      let num = Math.floor(clientWidth / itemWidth);
      // ...瀑布流布局实现
    }
  }
};
```

### 3. lishiClock 历史时钟组件
结合时钟和时间轴的概念，以交互式方式展示重庆的重要历史事件。用户可以通过上下按钮切换不同时期的历史内容，每个历史事件包含时间、标题和详细描述。

### 4. xingkong 星空背景组件
提供动态的星空背景效果，增强页面的视觉吸引力和沉浸感，为特定页面提供独特的氛围。

### 5. backHome 返回首页组件
统一的返回首页功能组件，出现在各个内容页面的底部，方便用户导航。

## 历史内容精选

项目包含丰富的重庆历史内容，特别是在lishiClock组件中展示了几个重要的历史节点：

1. **1927年** - 重庆地区发生武装起义，如綦江、涪陵、南川的农民武装暴动，为红军在重庆地区的发展奠定了基础。

2. **1935年** - 中央红军长征期间转战重庆綦江，成功扼守重要关隘，赢得当地群众支持。

3. **1947-1949年** - 重庆革命斗争进入高潮，1949年人民解放军发动西南战役解放重庆。

4. **1949年11月30日** - 重庆宣告解放，标志着重庆人民在中国共产党领导下实现民族独立和人民解放。

## 开发环境设置

### 推荐IDE配置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用Vetur）+ [Vue DevTools](https://devtools.vuejs.org/)。

### 项目依赖安装

```bash
# 使用npm安装依赖
npm install

# 或使用pnpm（项目中已有pnpm-lock.yaml）
pnpm install
```

### 开发命令

```bash
# 开发环境运行（热重载）
npm run dev

# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

### 构建优化

- 使用Vite的现代构建工具，提供极快的开发体验和优化的生产构建
- 组件懒加载减少初始加载时间
- 图片资源优化和按需加载
- CSS预处理器（Sass）提高样式开发效率

## 项目亮点

1. **视觉设计** - 采用现代化的UI设计，结合重庆特色元素，创造出独特的视觉体验
2. **交互体验** - 丰富的动画和过渡效果，提升用户体验
3. **响应式布局** - 适配各种屏幕尺寸，提供一致的体验
4. **性能优化** - 组件懒加载、图片优化等技术提升网站性能
5. **文化展示** - 全面展示重庆的自然、美食、历史和现代文化

## Git提交规范

推荐使用以下Git提交信息格式：
其中type可以是：

- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 代码重构
- perf: 性能优化
- test: 测试相关
- build: 构建系统相关
- ci: CI配置相关
## 许可证
MIT

## 贡献指南
欢迎提交Issue和Pull Request来改进这个项目。提交PR前请确保代码符合项目的编码规范，并通过所有测试。

## 致谢
感谢所有为这个项目做出贡献的开发者和设计师。特别感谢Vue.js、Vite等开源项目提供的技术支持。
