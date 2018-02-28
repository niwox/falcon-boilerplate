const path = require('path');

module.exports = {
  ENTRY: path.join(process.cwd(), 'app/index.js'),
  OUTPUT: path.join(process.cwd(), 'dist'),
}
