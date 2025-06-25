import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Garfish from 'garfish';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
  ],
});

const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.mount('#root');

Garfish.run({
  basename: '/',
  domGetter: '#subapp-container',
  apps: [
    {
      name: 'vue-app',
      activeWhen: '/vue-app',
      entry: 'http://localhost:8002',
    },
    // {
    //   name: 'react-app',
    //   activeWhen: '/react-app',
    //   entry: 'http://localhost:8003',
    // },
  ],
});
