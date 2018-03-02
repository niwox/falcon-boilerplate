const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { commonPaths } = require('./utils')


const config = {
  entry: commonPaths.ENTRY,
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPaths.OUTPUT
  },
  module: {
    rules: [
      {
        test: /\.js$/, // add jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(),
  ]
};

module.exports = config;
