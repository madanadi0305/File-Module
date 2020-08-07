const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task19");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 19 test running", () => {
  it("should return proper message ", done => {
    let sourceFile = "./files/Konfinity.txt";
    let destinationFile = "./files/NewFile.txt";
    fstasks(sourceFile, destinationFile)
      .then(userResult => {
        expect(userResult).to.equal("Content copied successfully");
        done();
      })
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task19.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return proper message ", done => {
    let sourceFile = "./files/Konfinity.txt";
    let destinationFile = "./files/NewFile.txt";
    fstasks(sourceFile, destinationFile)
      .catch(error => {
        expect(error).to.equal("cannot copy data : File exists");
        done();
      });
  });
  it("should use old tasks ", done => {
    fileDataChecker("./task19.js").then(result => {
      expect(result.count).to.be.above(1);
      done();
    });
  });
  it("should create the destination file first", done => {
    let destinationFile = "./files/NewFile.txt";
    fileChecker(destinationFile).then(result => {
      expect(result).to.equal("File exists");
      done();
    });
  });
  it("file should contain the data #end_test", done => {
    let sourceFile = "./files/Konfinity.txt";
    let destinationFile = "./files/NewFile.txt";
    fileDataChecker(sourceFile)
      .then(sresult => {
        fileDataChecker(destinationFile)
          .then(dresult => {
            expect(dresult).to.include(sresult);
            removeFile(destinationFile).then(result => {
              console.log("Task completed");
            });
            done();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  });
});

const fileDataChecker = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (error, data) => {
      if (error) {
        reject("ye wali error h kya File does not exists");
      } else {
        let count = 0;
        let elem = "ggfjtyhyugtrfvrtyhju";
        let tokenLine = data.split("\n");
        tokenLine.forEach(element => {
          if (element.startsWith("//")) {
          } else {
            if (element.includes('require("./task04");' || 'require("./task04") ;')) {
              let tokens = element.split("=");
              let interElem = tokens[0].split(" ");
              let i = 1;
              while (interElem[interElem.length - i].length < 1) {
                i++;
              }
              elem = interElem[interElem.length - i];
            }
            if (element.includes(elem)) {
              count += 1;
            }
          }
        });
        resolve({ elem: elem, count: count, data: data });
      }
    });
  });
};

const fileChecker = filename => {
  return new Promise((resolve, reject) => {
    fs.access(filename, error => {
      if (error) {
        reject("File does not exists");
      } else {
        resolve("File exists");
      }
    });
  });
};

const removeFile = filename => {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, error => {
      if (!error) {
        resolve("File removed");
      } else {
        reject("Error occured");
      }
    });
  });
};
