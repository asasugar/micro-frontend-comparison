// 微前端框架类型
export type MicroFrontendType = 'qiankun' | 'micro-app' | 'wujie' | 'garfish';

// 子应用配置
export interface SubAppConfig {
  name: string;
  entry: string;
  activeRule: string;
}

// 主应用配置
export interface MainAppConfig {
  port: number;
  container: string | HTMLElement;
  subContainer?: string | HTMLElement;
  subApps: SubAppConfig[];
}

// 配置管理器类型
export type AppConfigManager = Record<MicroFrontendType, MainAppConfig>;

// 子应用类型
export type SubAppType = 'vue' | 'react';

// 环境配置
export interface EnvConfig {
  development: boolean;
  production: boolean;
  test: boolean;
}

// 路由配置
export interface RouteConfig {
  path: string;
  name?: string;
  component?: any;
  children?: RouteConfig[];
}
