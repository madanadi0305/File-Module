const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task24");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 24 test running", () => {
  it("should remove file from given path", done => {
    let pathToFile = "./files/newFile.txt";
    fileBna(pathToFile)
      .then(result => {
        fstasks(pathToFile)
          .then(userResult => {
            expect(userResult).to.equal("File deleted successfully");
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
  it("should not contain synchronous function",done => {
    syncCheck("./task24.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("File should be removed", done => {
    let pathToFile = "./files/newFile.txt";
    fileHaiYaNhi(pathToFile).catch(error => {
      expect(error).to.equal("File does not exists");
      done();
    });
  });
  it("should return error #end_test", done => {
    let pathToFile = "";
    fstasks(pathToFile).catch(error => {
      expect(error).to.equal("error deleting file");
      done();
    });
  });
});

const fileBna = pathToFile => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathToFile, "some content", error => {
      if (error) {
        reject("error occured");
      } else {
        resolve("file written");
      }
    });
  });
};

const fileHaiYaNhi = pathToFile => {
  return new Promise((resolve, reject) => {
    fs.access(pathToFile, error => {
      if (error) {
        reject("File does not exists");
      } else {
        resolve("File exists");
      }
    });
  });
};
