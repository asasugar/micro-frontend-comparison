const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const baseConfig = {
  context: process.cwd(),
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".vue", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true
        }
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        type: "typescript"
      },
      {
        test: /\.css$/,
        type: "css"
      },
      {
        test: /\.less$/,
        type: "css",
        use: [
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = baseConfig;