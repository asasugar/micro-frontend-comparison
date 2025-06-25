declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
    __MICRO_APP_ENVIRONMENT__?: boolean;
    __MICRO_APP_PUBLIC_PATH__?: string;
    __POWERED_BY_WUJIE__?: boolean;
    __WUJIE_PUBLIC_PATH__?: string;
    __WUJIE_MOUNT?: () => void;
    __WUJIE_UNMOUNT?: () => void;
    __GARFISH__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
    __webpack_public_path__: string;
  }
}

export interface MicroAppProps {
  container?: HTMLElement;
  routerBase?: string;
  [key: string]: any;
}

export interface LifecycleHooks {
  bootstrap?: () => Promise<void>;
  mount?: (props: MicroAppProps) => Promise<void>;
  unmount?: () => Promise<void>;
  update?: (props: MicroAppProps) => Promise<void>;
}
