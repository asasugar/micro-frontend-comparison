import { mergeRsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { getChildConfig } from '../../../configs/rsbuild/child';

const baseChildConfig = getChildConfig({
  name: 'react-app',
  port: Number(process.env.PORT) || 8003,
});

export default mergeRsbuildConfig(baseChildConfig, {
  source: {
    entry: {
      index: './src/main.tsx',
    },
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'automatic',
        importSource: 'react',
      },
    }),
  ],
});
