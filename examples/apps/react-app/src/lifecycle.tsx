import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MicroFrontendType, getMicroFrontendType, configurePublicPath } from './utils/env';
import type { MicroAppProps } from './types/micro-frontend';
import { ConfigProvider } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';

let root: Root | null = null;
let container: HTMLElement | null = null;

// 渲染函数
export const render = (props: MicroAppProps = {}) => {
  const { container, routerBase = '/' } = props;
  const rootElement = container
    ? container.querySelector('#react-app')
    : document.getElementById('react-app');

  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ConfigProvider>
        <BrowserRouter basename={routerBase}>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </React.StrictMode>
  );
};

// 销毁函数
export const destroy = () => {
  if (root) {
    root.unmount();
    root = null;
  }
  if (container) {
    container.innerHTML = '';
    container = null;
  }
};

// 启动应用
export const bootstrap = async () => {
  console.log('[react] react app bootstraped');
};

// 挂载应用
export const mount = async (props: MicroAppProps) => {
  console.log('[react] props from main framework', props);
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
    default:
      render();
      break;
  }
};
