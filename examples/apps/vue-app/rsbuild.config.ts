import { getChildConfig } from '../../../configs/rsbuild/child';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig(
  getChildConfig({
    port: Number(process.env.PORT) || 8002,
    name: 'vue',
    plugins: [pluginVue()],
  })
);
