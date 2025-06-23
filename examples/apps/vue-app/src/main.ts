import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import router from './router';
import '@arco-design/web-vue/dist/arco.css';

declare global {
  interface Window {
    // qiankun
    __POWERED_BY_QIANKUN__?: boolean;
    // micro-app
    __MICRO_APP_ENVIRONMENT__?: boolean;
    __MICRO_APP_PUBLIC_PATH__?: string;
    // wujie
    __POWERED_BY_WUJIE__?: boolean;
    __WUJIE_PUBLIC_PATH__?: string;
    // garfish
    __GARFISH__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
  }
}

let app: any;

// qiankun 生命周期
const render = (props: any = {}) => {
  const { container } = props;
  app = createApp(App);
  app.use(ArcoVue);
  app.use(router);
  app.mount(container ? container.querySelector('#app') : '#app');
};

// qiankun 导出
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props: any) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  app.$destroy();
  app?.unmount();
  app.$el.innerHTML = '';
  app = null;
}

// micro-app 环境
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 设置 publicPath
  if (window.__MICRO_APP_PUBLIC_PATH__) {
    __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
  }
}

// wujie 环境
if (window.__POWERED_BY_WUJIE__) {
  const path = window.__WUJIE_PUBLIC_PATH__ || '/';
  router.beforeEach((to, from, next) => {
    if (to.path === '/') {
      next();
    } else {
      next(path);
    }
  });
}

// garfish 环境
if (window.__GARFISH__) {
  // garfish 相关配置
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
} else {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
