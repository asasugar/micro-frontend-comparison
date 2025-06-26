import { mergeRsbuildConfig } from '@rsbuild/core';
import { getChildConfig } from '../../../configs/rsbuild/child';
import { pluginVue } from '@rsbuild/plugin-vue';

const baseChildConfig = getChildConfig({
  name: 'vue-app',
  port: Number(process.env.PORT) || 8002,
});

export default mergeRsbuildConfig(baseChildConfig, {
  plugins: [pluginVue()],
});
