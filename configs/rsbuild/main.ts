import { mergeRsbuildConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { getMainAppConfig } from '../shared/app.config';
import type { BuildConfigOptions } from './types';
import { getBaseConfig } from './base';

export const getMainConfig = ({ type, port, name }: BuildConfigOptions) => {
  const mainConfig = getMainAppConfig(type);
  const baseConfig = getBaseConfig();

  return mergeRsbuildConfig(baseConfig, {
    plugins: [pluginVue()],
    server: {
      port: port ?? mainConfig.port,
    },
    html: {
      title: name,
    },
    source: {
      define: {
        'process.env.APP_TYPE': JSON.stringify(type),
        'process.env.APP_NAME': JSON.stringify(name),
      },
    },
  });
};
