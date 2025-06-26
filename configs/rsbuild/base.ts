import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';

export const getBaseConfig = () => {
  return defineConfig({
    plugins: [pluginLess()],
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
    tools: {
      cssLoader: {
        modules: {
          auto: true,
        },
      },
    },
  });
};
