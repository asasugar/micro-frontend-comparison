import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import WujieVue from 'wujie-vue3';
import App from './App.vue';
import router from './router';
import '@arco-design/web-vue/dist/arco.css';
import { getMainAppConfig } from '../../../../configs/shared/app.config';

// 获取子应用配置
const mainConfig = getMainAppConfig('wujie');

const app = createApp(App);

app.use(ArcoVue);
app.use(router);
app.use(WujieVue);

app.mount(mainConfig.container);
