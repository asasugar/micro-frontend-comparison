/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

interface Window {
  __POWERED_BY_QIANKUN__?: boolean;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  microApp?: boolean;
  __WUJIE?: {
    mount: Function;
    unmount: Function;
    props: Record<string, any>;
  };
  $wujie?: {
    props: Record<string, any>;
  };
}
