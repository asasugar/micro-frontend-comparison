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
      path: '/vue-app/',
      name: 'vue',
      component: () => import('../views/vue-app.vue'),
    },
    {
      path: '/react-app/',
      name: 'react',
      component: () => import('../views/react-app.vue'),
    },
  ],
});

export default router;
