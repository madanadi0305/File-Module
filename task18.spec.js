const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task18");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 18 test running", () => {
  it("should display error if source file does not exists", done => {
    let sourceFile = "./contents/innerContent/sjhdjsad.txt";
    let destFile = "./contents/innerContent/abcd.txt";
    fstasks(sourceFile, destFile).catch(error => {
      expect(error).to.include("File does not exists");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task18.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should copy the content of source file to destination", done => {
    let sourceFile = "./contents/File1.md";
    let destFile = "./contents/innerContent/abcdef.txt";
    fstasks(sourceFile, destFile).then(response => {
      expect(response).to.equal("Content written to file successfully");
      done();
    });
  });
  it("destination file should contain the copied content of source file  #end_test", done => {
    let destFile = "./contents/innerContent/abcdef.txt";
    fs.readFile(destFile, "utf8", (error, data) => {
      if (!error) {
        expect(data).to.include("This is second file in md format");
        removeFile(destFile).then(result => {
          console.log("Task completed");
        }).catch(error=>{
          console.log(error)
        });
        done();
      }
    });
  });
});

const removeFile = filename => {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, error => {
      if (!error) {
        resolve("File removed");
      } else {
        reject("Error occured"+error);
      }
    });
  });
};
