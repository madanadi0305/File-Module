const chai = require("chai");
const expect = chai.expect;
const fstask = require("../task13");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 13 test running", () => {
  it("should return content of file from a directory if exists or return error", done => {
    let pathToFile = "./contents/";
    let index = 3;
    fstask(pathToFile, index).then(response => {
      console.log("Response of directory /contents/ index 3 is")
      console.log(response)
      expect(response.data).to.be.a("string");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task13.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return size of file", done => {
    let pathToFile = "./contents/";
    let index = 3;
    fstask(pathToFile, index).then(response => {
      console.log("Response of directory /contents/ index 3 is")
      console.log(response)
      expect(response.size).to.equal(
        fs.statSync(pathToFile + response.filename).size
      );
      done();
    });
  });
  it("should return birthtime of file", done => {
    let pathToFile = "./contents/";
    let index = 3;
    fstask(pathToFile, index).then(response => {
      console.log("Response of directory /contents/ index 3 is")
      console.log(response)
      expect(response.birthTime).to.equal(
        fs.statSync(pathToFile + response.filename).birthtimeMs
      );
      done();
    });
  });
  it("should return content of file from a directory if exists or return error", done => {
    let pathToFile = "./contents/";
    let index = 3;
    fstask(pathToFile, index).then(response => {
      console.log("Response of directory /contents/ index 3 is")
      console.log(response)
      expect(response.data).to.include(
        "This is File 4 for FS Module in txt format"
      );
      done();
    });
  });
  it("should return name of file from a directory if exists or return error", done => {
    let pathToFile = "./contents/";
    let index = 3;
    fstask(pathToFile, index).then(response => {
      console.log("Response of directory /contents/ index 3 is")
      console.log(response)
      expect(response.filename).to.equal("File4.txt");
      done();
    });
  });
  it("should return content of file if exists or return error #end_test", done => {
    let pathToFile = "./conts/";
    fstask(pathToFile, 3).catch(error => {
      expect(error).to.include(
        "Error occured while fetching files from Directory"
      );
      done();
    });
  });
});
