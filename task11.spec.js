const chai = require("chai");
const expect = chai.expect;
const fstask = require("../task11");
const syncCheck = require("./syncCheck.spec");

describe("task 11 test running", () => {
  it("should return content of file if exists or return error", done => {
    let pathToFile = "./contents/File1.md";
    fstask(pathToFile).then(response => {
      console.log("Content of file /contents/File.md")
      console.log(response)
      expect(response).to.be.a("string");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task11.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return content of file if exists or return error", done => {
    let pathToFile = "./contents/File1.md";
    fstask(pathToFile).then(response => {
      console.log("Content of file /contents/File.md")
      console.log(response)
      expect(response).to.include("This is second file in md format");
      done();
    });
  });
  it("should return content of file if exists or return error #end_test", done => {
    let pathToFile = "./conts/File1.md";
    fstask(pathToFile).catch(error => {
      expect(error).to.equal("File does not exists");
      done();
    });
  });
});
