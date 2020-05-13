const fs = require("fs")
const path = require("path")

const destinationFile = path.join(__dirname, "task04.js");


async function copy(sourceFile, destinationFile) {
    return new Promise((resolve, reject) => {
        fs.copyFile(sourceFile, destinationFile, (err) => {
            resolve("Content copied successfully")
        })
    })
}

function out(source, destinationFile) {
    destinationFile =destinationFile
    return new Promise((resolve, reject) => {
        fs.access(destinationFile, async (err) => {
            if (err) {
                let result = await copy(source, destinationFile)
                resolve(result)
            } else {
                reject("cannot copy data : File exists")
            }
        })
    })
}

module.exports = out
