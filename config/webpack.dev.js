const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.log('cwd', process.cwd());

module.exports = env => {
  console.log('env', env);

  return {
    entry: path.join(process.cwd(), 'app/index.js'),
    output: {
      filename: '[chunkhash].bundle.js',
      // path: path.join(__dirname, 'build')
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
    plugins: [new UglifyJsPlugin()],
  };
};
