const { commonPaths } = require('./utils')


const config = {
  mode: 'development',
  devtool: 'source-maps',
  devServer: {
    contentBase: commonPaths.OUTPUT,
    compress: true,
    port: 9000
  },
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
