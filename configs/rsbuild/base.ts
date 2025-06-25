import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import type { RsbuildConfig } from '@rsbuild/core';

export const baseConfig: RsbuildConfig = defineConfig({
  source: {
    entry: {
      index: './src/main.ts',
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.js', '.jsx'],
    alias: {
      '@': './src',
    },
  },
  dev: {
    assetPrefix: '/',
  },
  output: {
    sourceMap: true,
  },
  plugins: [pluginLess()],
});
