const fs = require("fs")

function out(pathFile) {
    return new Promise((resolve, reject) => {
        fs.access(pathFile, (err) => {
            if (err) {
                reject("File does not exists")
            } else {
                resolve("File exists")
            }
        })
    })
}

module.exports = out
