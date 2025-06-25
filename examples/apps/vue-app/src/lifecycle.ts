import { App as VueApp, h, createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import router from './router';
import { MicroFrontendType, getMicroFrontendType, configurePublicPath } from './utils/env';
import { vueBridge } from '@garfish/bridge-vue-v3';
interface RenderProps {
  container?: any;
  routerBase?: string;
}

let app: VueApp | null = null;

// 渲染函数
export const render = (props: RenderProps = {}) => {
  const { container } = props;
  app = createApp(App);
  app.use(ArcoVue);
  app.use(router);
  app.mount(container ? container.querySelector('#vue-app') : '#vue-app');
};

// 销毁函数
export const destroy = () => {
  app?.unmount();
  if (app?._container) {
    app._container.innerHTML = '';
  }
  app = null;
};

// 启动应用
export const bootstrap = async () => {
  console.log('[vue] vue app bootstraped');
};

// 挂载应用
export const mount = async (props: RenderProps) => {
  console.log('[vue] props from main framework', props);
  render(props);
};

// 卸载应用
export const unmount = async () => {
  destroy();
};

// 初始化应用
export const initializeApp = () => {
  const envType = getMicroFrontendType();
  configurePublicPath();

  switch (envType) {
    case MicroFrontendType.WUJIE:
      window.__WUJIE_MOUNT = () => render();
      window.__WUJIE_UNMOUNT = () => destroy();
      break;

    case MicroFrontendType.GARFISH:
      console.log('garfish 通过 provider 挂载');
      break;
    default:
      render();
      break;
  }
};

// 导出 garfish 的 provider
export const provider = vueBridge({
  rootComponent: App,
  appOptions: ({ appName }) => {
    return {
      el: `#${appName}`,
      render: () => h(App),
    };
  },
  // 可选，注册 vue-router、ArcoVue等
  handleInstance: vueInstance => {
    vueInstance.use(ArcoVue);
    vueInstance.use(router);
  },
});
