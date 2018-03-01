const commonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')
const { addons } = require('./utils');

module.exports = (env) => {
  if (!env) {
    throw new Error('You must specify --env flag')
  }

  const envConfig = require(`./webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
};
