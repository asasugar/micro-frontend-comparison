import { pluginReact } from '@rsbuild/plugin-react';
import { getChildConfig } from '../../../configs/rsbuild/child';

export default getChildConfig({
  entry: './src/main.tsx',
  port: Number(process.env.PORT) || 8003,
  publicPathName: '/react-app/',
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'automatic',
        importSource: 'react',
      },
    }),
  ],
});
