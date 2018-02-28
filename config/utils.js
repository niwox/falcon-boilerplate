const addons = (args) => {
  let addons = [].concat.apply([], [args]).filter(Boolean); // flaten and remove undefined

  return addons.map((name) => require(`./addons/webpack.${name}.js`));
}

module.exports = {
  addons
}
