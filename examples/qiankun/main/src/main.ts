import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import router from './router';
import '@arco-design/web-vue/dist/arco.css';
import { getMainAppConfig } from '../../../../configs/shared/app.config';

// 创建 Vue 应用
const app = createApp(App);
app.config.globalProperties.$qiankunHistory = window.history;
app.use(ArcoVue);
app.use(router);
app.mount('#root');

// 获取子应用配置
const mainConfig = getMainAppConfig('qiankun');

// 注册微应用
registerMicroApps(
  mainConfig.subApps.map(app => ({
    ...app,
    container: mainConfig.subContainer!,
    props: {
      routerBase: app.activeRule,
      basename: app.activeRule,
    },
  }))
);

// 启动 qiankun
start({
  prefetch: true,
  sandbox: {
    strictStyleIsolation: true,
  },
  singular: true,
});
