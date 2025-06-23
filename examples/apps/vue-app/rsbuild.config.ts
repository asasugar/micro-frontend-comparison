import { getChildConfig } from '../../../configs/rsbuild/child';
import { pluginVue } from '@rsbuild/plugin-vue';

export default getChildConfig({
  port: Number(process.env.PORT) || 8002,
  publicPathName: '/vue-app/',
  plugins: [pluginVue()],
});
