import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import router from './router';
import '@arco-design/web-vue/dist/arco.css';

// 创建 Vue 应用
const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.mount('#app');

// 注册微应用
registerMicroApps([
  {
    name: 'vue-app',
    entry: '//localhost:8002',
    container: '#subapp-container',
    activeRule: '/vue',
  },
  {
    name: 'react-app',
    entry: '//localhost:8003',
    container: '#subapp-container',
    activeRule: '/react',
  },
]);

// 启动 qiankun
start();
