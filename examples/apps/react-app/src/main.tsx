import { bootstrap, mount, unmount, initializeApp, provider } from './lifecycle';

// 导出 qiankun 生命周期函数
export { bootstrap, mount, unmount };

// 导出 garfish 的 provider
export { provider };

// 初始化应用
initializeApp();
