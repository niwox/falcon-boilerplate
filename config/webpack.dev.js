const path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'app/index.js'),
  output: {
    filename: 'bundle.js',
    // path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ],
  },
};
