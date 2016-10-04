const path = require('path');
const fs = require('fs');

module.exports = (srcpath) => {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};
