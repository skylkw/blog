import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },

    {
      path: '/blog',
      component: () => import('@/layout/index.vue'),
      redirect: { name: 'BlogHome' },
      children: [
        {
          path: 'home',
          name: 'BlogHome',
          component: () => import('@/views/BlogHome.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/About.vue'),
        },
      ],
    },
  ],
})

export default router
