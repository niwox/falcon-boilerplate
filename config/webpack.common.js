const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(),
  ]
};

module.exports = config;
