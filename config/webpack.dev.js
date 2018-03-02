const { commonPaths } = require('./utils')


const config = {
  mode: 'development',
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}

module.exports = config;
