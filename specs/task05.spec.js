const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task05");
const syncCheck = require("./syncCheck.spec");

describe("task 05 test running", () => {
  it("should return array of files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(files => {
      console.log("Files array is")
      console.log(files)
      expect(files).to.be.an("array");
      done();
    });
  });
  it("should return array of files ", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(files => {
      console.log("Files array is")
      console.log(files)
      expect(files).to.include("File3.txt");
      done();
    });
  });
  it("should return array of files", done => {
    let pathToDir = "./files/";
    fstasks(pathToDir).then(files => {
      console.log("Files array is")
      console.log(files)
      expect(files).to.be.an("array");
      expect(files).to.include("ex1.exe");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task05.js").then(res => {
    expect(res).to.equal(true);
    done();
  });
});
  it("should throw error #end_test", done => {
    let pathToDir = "./jajaj/";
    fstasks(pathToDir).catch(error => {
      expect(error).to.equal("Error occured while reading directory");
      done();
    });
  });
});
