import { defineConfig } from '@rsbuild/core';
import type { RsbuildConfig } from '@rsbuild/core';

export const baseConfig: RsbuildConfig = defineConfig({
  source: {
    entry: {
      index: './src/main.ts',
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
});
