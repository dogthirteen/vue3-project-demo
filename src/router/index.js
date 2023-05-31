import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/todoList',
      name: 'admin',
      children: [
        {
          path: 'todoList',
          name: 'todoList',
          meta: { title: '首页', icon: 'Document' },
          component: () => import('../views/todoList.vue')
        }
      ]
    },
    {
      path: '/map',
      component: Layout,
      name: "map",
      children: [
        {
          path: 'index',
          name: 'chinaMap',
          meta: { title: '地图', icon: 'Location' },
          component: () => import('../views/map/index.vue')
        }
      ]
    },
    {
      path: '/draggable',
      component: Layout,
      name: "draggable",
      children: [
        {
          path: 'index',
          name: 'draggable',
          meta: { title: '拖拽', icon: 'Aim' },
          component: () => import('../views/draggable/index.vue')
        }
      ]
    },

    {
      path: '/chart',
      component: Layout,
      meta: { title: '图表', icon: 'Histogram' },
      redirect: '/chart/option1',
      children: [
        {
          path: 'option1',
          name: 'option1',
          meta: { title: 'option1', icon: 'Histogram' },
          component: () => import('../views/chart/option1.vue')
        },
        {
          path: 'option2',
          name: 'option2',
          meta: { title: 'option2', icon: 'Histogram' },
          component: () => import('../views/chart/option2.vue')
        },
        {
          path: 'option3',
          name: 'option3',
          meta: { title: 'option3', icon: 'Histogram' },
          component: () => import('../views/chart/option3.vue')
        }
      ]
    }
  ],
  scrollBehavior: () => ({ y: 0 })
})

export default router
