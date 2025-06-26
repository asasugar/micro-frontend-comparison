import { mergeRsbuildConfig } from '@rsbuild/core';
import type { ChildConfigOptions } from './types';
import { getBaseConfig } from './base';

export const getChildConfig = ({ name, port }: ChildConfigOptions) => {
  const baseConfig = getBaseConfig();
  const finalPort = port ?? 8002;

  return mergeRsbuildConfig(baseConfig, {
    html: {
      title: name,
    },
    source: {
      define: {
        'process.env.APP_NAME': JSON.stringify(name),
      },
    },
    tools: {
      rspack: {
        output: {
          // 默认配置支持 qiankun 和 garfish
          library: name,
          libraryTarget: 'umd',
        },
      },
    },
    server: {
      port: finalPort,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    dev: {
      assetPrefix: `http://localhost:${finalPort}/`,
    },
  });
};
