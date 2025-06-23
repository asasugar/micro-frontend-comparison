const { merge } = require('@rspack/core');
const baseConfig = require('./base');

const getMainConfig = (options = {}) => {
  const { port = 8000 } = options;

  return merge(baseConfig, {
    entry: {
      main: "./src/main.ts"
    },
    devServer: {
      port,
      historyApiFallback: true
    }
  });
};

module.exports = getMainConfig;