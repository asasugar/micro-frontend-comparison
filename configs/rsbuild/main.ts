import { mergeRsbuildConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import type { RsbuildConfig } from '@rsbuild/core';
import { baseConfig } from './base';

interface MainOptions {
  port?: number;
}

export const getMainConfig = (options: MainOptions = {}): RsbuildConfig => {
  const { port = 8001 } = options;

  return mergeRsbuildConfig(baseConfig, {
    server: {
      port,
    },
    plugins: [pluginVue()],
  });
};
