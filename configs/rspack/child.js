const { merge } = require('@rspack/core');
const baseConfig = require('./base');

const getPublicPath = (framework, port) => {
  switch (framework) {
    case 'qiankun':
      return `http://localhost:${port}/`;
    case 'micro-app':
      return '/';
    case 'wujie':
      return '/';
    case 'garfish':
      return `http://localhost:${port}/`;
    default:
      return '/';
  }
};

const getChildConfig = (options = {}) => {
  const {
    port,
    framework = process.env.BUILD_ENV,
    entry = './src/main.ts',
    name
  } = options;

  return merge(baseConfig, {
    entry: {
      main: entry
    },
    output: {
      publicPath: getPublicPath(framework, port),
      library: framework === 'qiankun' ? name : undefined,
      libraryTarget: framework === 'qiankun' ? 'umd' : undefined,
    },
    devServer: {
      port,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  });
};

module.exports = getChildConfig;