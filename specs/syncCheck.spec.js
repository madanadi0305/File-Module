module.exports = function syncCheck (pathToFile) {
  let flag = true;
  return new Promise((resolve, reject) => {
      const fs = require("fs");
      fs.readFile(pathToFile, "utf8", (err, data) => {
        let lineToken = data.split("\n");
        for (let i = 0; i < lineToken.length; i++) {
          
          if (!lineToken[i].includes("module.exports")) {
            if (lineToken[i].includes("Sync")) {
              flag = false;
              console.log(flag);
            }
          } else {
            break;
          }
        }
        resolve(flag);
      });
  });
};