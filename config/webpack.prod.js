const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
          fallback: "style-loader",
        })
      }
    ],
  },
  plugins:[
    new ExtractTextWebpackPlugin({ filename: 'styles.css'}),
    new UglifyJsWebpackPlugin(),
    new CompressionWebpackPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html|css)$/,
			threshold: 10240,
			minRatio: 0.8
		})
  ]
};

module.exports = config;
