/// <reference types="@rsbuild/core" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@arco-design/web-vue' {
  const ArcoVue: any;
  export default ArcoVue;
  export * from '@arco-design/web-vue';
}
