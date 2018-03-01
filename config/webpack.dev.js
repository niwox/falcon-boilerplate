const { commonPaths } = require('./utils')


const config = {
  mode: 'development',
  devtool: 'source-maps',
  devServer: {
    contentBase: commonPaths.OUTPUT,
    compress: true,
    port: 9000
  }
}

module.exports = config;
