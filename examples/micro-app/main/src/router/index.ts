import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { h } from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vue-app',
      name: 'vue',
      component: {
        render: () => h('micro-app', { name: 'vue-app', url: 'http://localhost:8002/' }),
      },
      // component: () => import('../views/vue-app.vue'),
    },
    {
      path: '/react-app',
      name: 'react',
      component: {
        render: () => h('micro-app', { name: 'react-app', url: 'http://localhost:8003/' }),
      },
      // component: () => import('../views/react-app.vue'),
    },
  ],
});

export default router;
