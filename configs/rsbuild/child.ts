import { mergeRsbuildConfig } from '@rsbuild/core';
import type { RsbuildConfig } from '@rsbuild/core';
import { baseConfig } from './base';

interface ChildOptions {
  port?: number;
  framework?: 'qiankun' | 'micro-app' | 'wujie' | 'garfish';
  entry?: string;
  publicPathName?: string;
  plugins?: RsbuildConfig['plugins'];
}

const getPublicPath = (framework: string, publicPathName: string, port: number): string => {
  switch (framework) {
    case 'qiankun':
      return `http://localhost:${port}/`;
    case 'micro-app':
      return publicPathName;
    case 'wujie':
      return publicPathName;
    case 'garfish':
      return `http://localhost:${port}/`;
    default:
      return '/';
  }
};

export const getChildConfig = (options: ChildOptions = {}): RsbuildConfig => {
  const {
    port = 8002,
    framework = process.env.BUILD_ENV as string,
    entry = './src/main.ts',
    publicPathName = '/',
    plugins = [],
  } = options;

  return mergeRsbuildConfig(baseConfig, {
    html: {
      template: './index.html',
    },
    source: {
      entry: {
        index: entry,
      },
    },
    output: {
      assetPrefix: getPublicPath(framework, publicPathName, port),
    },
    tools: {
      rspack: {
        output: {
          library: framework === 'qiankun' ? publicPathName : undefined,
          libraryTarget: framework === 'qiankun' ? 'umd' : undefined,
        },
      },
    },
    server: {
      port,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    dev: {
      assetPrefix: getPublicPath(framework, publicPathName, port),
    },
    plugins,
  });
};
