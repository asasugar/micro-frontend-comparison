import '@arco-design/web-vue/dist/arco.css';
import { bootstrap, mount, unmount, provider, initializeApp } from './lifecycle';

// 导出 qiankun 生命周期函数
export { bootstrap, mount, unmount };

// 导出 garfish 的 provider
export { provider };

// 初始化应用
initializeApp();
