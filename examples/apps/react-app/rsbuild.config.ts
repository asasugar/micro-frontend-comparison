import { getChildConfig } from '../../../configs/rsbuild/child';
import { defineConfig } from '@rsbuild/core';

export default defineConfig(
  getChildConfig({
    port: Number(process.env.PORT) || 8003,
    name: 'react',
    entry: './src/index.tsx',
  })
);
