const commonConfig = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.log('cwd', process.cwd());

module.exports = env => {
  console.log('env', env);

  return {
    ...commonConfig,
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
