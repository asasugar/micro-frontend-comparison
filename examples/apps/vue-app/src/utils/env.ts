// 微前端环境类型
export enum MicroFrontendType {
  QIANKUN = 'qiankun',
  MICRO_APP = 'micro-app',
  WUJIE = 'wujie',
  GARFISH = 'garfish',
  STANDALONE = 'standalone',
}

// 获取当前环境类型
export const getMicroFrontendType = (): MicroFrontendType => {
  if (window.__POWERED_BY_QIANKUN__) {
    return MicroFrontendType.QIANKUN;
  }
  if (window.__MICRO_APP_ENVIRONMENT__) {
    return MicroFrontendType.MICRO_APP;
  }
  if (window.__POWERED_BY_WUJIE__) {
    return MicroFrontendType.WUJIE;
  }
  if (window.__GARFISH__) {
    return MicroFrontendType.GARFISH;
  }
  return MicroFrontendType.STANDALONE;
};

// 配置 publicPath
export const configurePublicPath = () => {
  const envType = getMicroFrontendType();

  switch (envType) {
    case MicroFrontendType.QIANKUN:
      window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
      break;
    case MicroFrontendType.MICRO_APP:
      if (window.__MICRO_APP_PUBLIC_PATH__) {
        window.__webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
      }
      break;
    case MicroFrontendType.WUJIE:
      // WuJie 特定的 publicPath 配置
      break;
    case MicroFrontendType.GARFISH:
      // Garfish 特定的 publicPath 配置
      break;
  }
};
