const commonPaths = require('./common-paths');

const config = {
  entry: commonPaths.ENTRY,
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPaths.OUTPUT
  },
};

module.exports = config;
