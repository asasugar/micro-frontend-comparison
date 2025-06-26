import { createRouter, createWebHistory } from 'vue-router';
import { h } from 'vue';
import { getMainAppConfig } from '../../../../../configs/shared/app.config';
import type { SubAppConfig } from '../../../../../configs/shared/types';
import Home from '../views/Home.vue';

const mainConfig = getMainAppConfig('micro-app');

// 生成子应用路由配置
const generateSubAppRoutes = () => {
  return mainConfig.subApps.map((app: SubAppConfig) => ({
    path: app.activeRule,
    name: app.name,
    component: {
      render: () =>
        h('micro-app', {
          name: app.name,
          url: app.entry,
        }),
    },
  }));
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    ...generateSubAppRoutes(),
  ],
});

export default router;
