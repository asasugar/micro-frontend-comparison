const { defineConfig } = require('@rspack/cli');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: false,
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    port: process.env.PORT || 8001,
    historyApiFallback: true,
  },
});
