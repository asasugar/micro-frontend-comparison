import '@arco-design/web-vue/dist/arco.css';
import { bootstrap, mount, unmount, provider, initializeApp } from './lifecycle';

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
    __WUJIE_MOUNT?: () => void;
    __WUJIE_UNMOUNT?: () => void;
    // garfish
    __GARFISH__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
  }
}

// 导出 qiankun 生命周期函数
export { bootstrap, mount, unmount };

// 导出 garfish 的 provider
export { provider };

// 初始化应用
initializeApp();
