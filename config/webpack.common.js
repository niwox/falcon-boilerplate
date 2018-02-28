const path = require('path');
const config = {
  entry: path.join(process.cwd(), 'app/index.js'),
  output: {
    filename: '[chunkhash].bundle.js',
    // path: path.join(__dirname, 'build')
  },
};

module.exports = config;
