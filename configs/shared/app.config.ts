import type { AppConfigManager, MainAppConfig, MicroFrontendType, SubAppConfig } from './types';

// 主应用配置
export const mainAppsConfig: AppConfigManager = {
  qiankun: {
    port: 8001,
    container: '#root',
    subContainer: '#subapp-container',
    subApps: [
      {
        name: 'vue-app',
        entry: 'http://localhost:8002',
        activeRule: '/vue-app',
      },
      {
        name: 'react-app',
        entry: 'http://localhost:8003',
        activeRule: '/react-app',
      },
    ],
  },
  'micro-app': {
    port: 8001,
    container: '#root',
    subApps: [
      {
        name: 'vue-app',
        entry: 'http://localhost:8002',
        activeRule: '/vue-app',
      },
      {
        name: 'react-app',
        entry: 'http://localhost:8003',
        activeRule: '/react-app',
      },
    ],
  },
  wujie: {
    port: 8001,
    container: '#root',
    subApps: [
      {
        name: 'vue-app',
        entry: 'http://localhost:8002',
        activeRule: '/vue-app',
      },
      {
        name: 'react-app',
        entry: 'http://localhost:8003',
        activeRule: '/react-app',
      },
    ],
  },
  garfish: {
    port: 8001,
    container: '#root',
    subContainer: '#subapp-container',
    subApps: [
      {
        name: 'vue-app',
        entry: 'http://localhost:8002',
        activeRule: '/vue-app',
      },
      {
        name: 'react-app',
        entry: 'http://localhost:8003',
        activeRule: '/react-app',
      },
    ],
  },
};

// 获取主应用配置
export const getMainAppConfig = (type: MicroFrontendType): MainAppConfig => {
  return mainAppsConfig[type];
};

// 获取指定主应用的子应用配置
export const getSubAppsByMainType = (type: MicroFrontendType): SubAppConfig[] => {
  return mainAppsConfig[type].subApps;
};
