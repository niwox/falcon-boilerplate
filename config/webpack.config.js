const commonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')
const { addons } = require('./utils');

module.exports = (env) => {
  const envConfig = require(`./webpack.${env.env}.js`);

  console.log(webpackMerge(commonConfig, envConfig, ...addons(env.addons)))
  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
};
