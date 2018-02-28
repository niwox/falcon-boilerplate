const commonPaths = require('./common-paths')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
  }
};

module.exports = config;
