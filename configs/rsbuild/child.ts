import { mergeRsbuildConfig } from '@rsbuild/core';
import type { RsbuildConfig } from '@rsbuild/core';
import { baseConfig } from './base';

interface ChildOptions {
  port?: number;
  framework?: 'qiankun' | 'micro-app' | 'wujie' | 'garfish';
  entry?: string;
  name?: string;
  plugins?: RsbuildConfig['plugins'];
}

const getPublicPath = (framework: string, port: number): string => {
  switch (framework) {
    case 'qiankun':
      return `http://localhost:${port}/`;
    case 'micro-app':
      return '/';
    case 'wujie':
      return '/';
    case 'garfish':
      return `http://localhost:${port}/`;
    default:
      return '/';
  }
};

export const getChildConfig = (options: ChildOptions = {}): RsbuildConfig => {
  const {
    port = 8001,
    framework = process.env.BUILD_ENV as string,
    entry = './src/main.ts',
    name = 'child',
    plugins = [],
  } = options;

  return mergeRsbuildConfig(baseConfig, {
    source: {
      entry: {
        [name]: entry,
      },
    },
    output: {
      assetPrefix: getPublicPath(framework, port),
    },
    tools: {
      rspack: {
        output: {
          library: framework === 'qiankun' ? name : undefined,
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
      assetPrefix: getPublicPath(framework, port),
    },
    plugins,
  });
};
