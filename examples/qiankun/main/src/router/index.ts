import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vue',
      name: 'vue',
      component: Home,
    },
    {
      path: '/react',
      name: 'react',
      component: Home,
    },
  ],
});

export default router;
