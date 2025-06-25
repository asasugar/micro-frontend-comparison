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
  ],
});

const childrenPath = ['/vue-app', '/react-app'];

router.beforeEach((to, from, next) => {
  if (to.name) {
    // 有 name 属性，说明是主应用的路由
    return next();
  }
  if (childrenPath.some(item => to.path.includes(item))) {
    return next();
  }
  next({ name: '404' });
});
export default router;
