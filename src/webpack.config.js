const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle.js",
  },
  mode: "development",
  node: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // ensure compatibility with older browsers
            plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
          },
        },
      },
      {
        test: /\.js$/,
      },
    ],
  },
  devServer: {
    allowedHosts: 'auto',
    watchFiles: ['./index.js', './index.html'],
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 8000,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:9000',
        ws: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};