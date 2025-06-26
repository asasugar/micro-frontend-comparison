import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Garfish from 'garfish';
import type { interfaces } from 'garfish';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import { getMainAppConfig } from '../../../../configs/shared/app.config';
import type { SubAppConfig } from '../../../../configs/shared/types';

// 获取子应用配置
const mainConfig = getMainAppConfig('garfish');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
  ],
});

// 注册微应用
Garfish.run({
  basename: '/',
  domGetter: mainConfig.subContainer as interfaces.DomGetter,
  apps: mainConfig.subApps.map((app: SubAppConfig) => {
    return {
      name: app.name,
      activeWhen: app.activeRule,
      entry: app.entry,
    };
  }),
});
const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.mount(mainConfig.container);
