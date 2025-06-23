const { VueLoaderPlugin } = require('vue-loader');

/** @type {import('@rspack/cli').Configuration} */
const baseConfig = {
  context: process.cwd(),
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.vue', '.js', '.jsx'],
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
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
            },
          },
        },
      },
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader', // 开发环境使用style-loader提高HMR编译效率
          'css-loader',
          'less-loader',
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = baseConfig;
