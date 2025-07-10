import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MicroFrontendType, getMicroFrontendType, configurePublicPath } from '@examples/shared';
import type { MicroAppProps } from '@examples/shared';
import { ConfigProvider } from 'antd';

let root: Root | null = null;
let container: HTMLElement | null = null;

// 渲染函数
export const render = (props: MicroAppProps = {}) => {
  const { container, routerBase = '/' } = props;
  const rootElement = container
    ? container.querySelector('#react-antd-app')
    : document.getElementById('react-antd-app');

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
    case MicroFrontendType.GARFISH:
      console.log('garfish 通过 provider 挂载');
      break;
    default:
      render();
      break;
  }
};

// 导出 garfish 的 provider
export const provider = () => {
  let root: Root | null = null;

  return {
    render({ basename, appName, dom }: Record<string, any>) {
      const container = dom.querySelector(`#${appName}`);
      root = createRoot(container!);
      root.render(
        <React.StrictMode>
          <ConfigProvider>
            <BrowserRouter basename={basename}>
              <App />
            </BrowserRouter>
          </ConfigProvider>
        </React.StrictMode>
      );
    },
    destroy() {
      root?.unmount();
    },
  };
};
