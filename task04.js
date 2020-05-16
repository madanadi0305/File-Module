const fs = require("fs");

function pathExists(pathFile) {
  return new Promise((resolve, reject) => {
    fs.access(pathFile, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = pathExists;
