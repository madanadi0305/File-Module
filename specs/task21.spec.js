const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task21");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 21 test running", () => {
  it("should return message when directory created", done => {
    let pathToDir = "./files/newFolder";
    fstasks(pathToDir).then(result => {
      expect(result).to.equal("New directory created");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task21.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should create directory", done => {
    let pathToDir = "./files/newFolder";
    fileStatus(pathToDir).then(result => {
      expect(result).to.equal("File exists");
      done();
    });
  });
  it("should return proper error message #end_test", done => {
    let pathToDir = "./files/newFolder";
    fstasks(pathToDir).catch(result => {
      expect(result).to.equal("Error occured while making directory");
      removeFile(pathToDir).then(result => {
        console.log("Task completed");
      }).catch(err=>{
        console.log(err)
      });
      done();
    });
  });
});

const fileStatus = pathToDir => {
  return new Promise((resolve, reject) => {
    fs.access(pathToDir, error => {
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
    fs.rmdir(filename, error => {
      if (!error) {
        resolve("File removed");
      } else {
        reject("Error occured");
      }
    });
  });
};
