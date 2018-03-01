const path = require('path');


const addons = (args) => {
  let addons = [].concat.apply([], [args]).filter(Boolean); // flaten and remove undefined

  return addons.map((name) => require(`./addons/webpack.${name}.js`));
}


commonPaths = {
  ENTRY: path.join(process.cwd(), 'app/index.js'),
  OUTPUT: path.join(process.cwd(), 'dist'),
}

module.exports = {
  addons,
  commonPaths
}
