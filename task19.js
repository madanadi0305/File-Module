const fs = require("fs");
const destinationFile = require("./task04");

async function copy(sourceFile, destinationFile) {
    return new Promise((resolve, reject) => {
        fs.copyFile(sourceFile, destinationFile, (err) => {
            resolve("Content copied successfully");
        });
    });
}

function out(source, destination) {
    return new Promise(async (resolve, reject) => {
        let res = await destinationFile(destination);
        // console.log(res);
        if (res === false) {
            let result = await copy(source, destination);
            resolve(result);
        } else {
            reject("cannot copy data : File exists");
        }
    });
}

module.exports = out;
