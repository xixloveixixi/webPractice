import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: () => import('../views/shouyeView.vue')
    },
    {
      path: '/shanshui',
      name: 'shanshui',
      component: () => import('../views/shanshuiView.vue')
    },
    {
      path: '/meishi',
      name: 'zhongzhuan',
      component: () => import('../views/meishiView.vue')
    },
    {
      path: '/lishi',
      name: 'lishi',
      component: () => import('../views/lishiView.vue')
    },
    {
      path:'/reqing',
      name:'reqing',
      component: () => import('../views/reqingView.vue')
    },
    {
      path:'/lishi/detail',
      name:'lishiDetail',
      component: () => import('../views/lishiDetail.vue')
    },  
    {
      path:'/weilai',
      name:'weilai',
      component: () => import('../views/weilai.vue')
    }
  ]
})

export default router