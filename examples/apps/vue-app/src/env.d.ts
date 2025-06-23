/// <reference types="@rsbuild/core" />

declare module '@vue-app/*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare let __webpack_public_path__: string;

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
