import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: () => import('@/views/Main'),
    children: [
      {
        path: 'recommend',
        component: () => import('@/components/main/Recommend')
      },
      {
        path: 'music_hall',
        component: () => import('@/components/main/Music_hall')
      },
      {
        path: 'tingshu',
        component: () => import('@/components/main/Tingshu')
      },
      {
        path: '/*',
        redirect: 'recommend'
      }
    ]
  },
  {
    path: '/audio',
    component: () => import('@/views/Audio')
  },
  {
    path: '/putong',
    component: () => import('@/views/Putong')
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine')
  },
  {
    path: '/*',
    redirect: '/main'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
