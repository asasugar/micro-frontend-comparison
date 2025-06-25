import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@arco-design/web-react/dist/css/arco.css';

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
  }
}

let root: ReactDOM.Root | null = null;

// qiankun 生命周期
function render(props: any = {}) {
  const { container } = props;
  const rootElement = container
    ? container.querySelector('#root')
    : document.getElementById('root');

  root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// qiankun 导出
export async function bootstrap() {}
export async function mount(props: any) {
  render(props);
}
export async function unmount() {
  root?.unmount();
}

// micro-app 环境
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 设置 publicPath
}

// wujie 环境
if (window.__POWERED_BY_WUJIE__) {
  // wujie 相关配置
}

// garfish 环境
if (window.__GARFISH__) {
  // garfish 相关配置
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
