const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task10");
const syncCheck = require("./syncCheck.spec");

describe("task 10 test running", () => {
  it("should return content of file", () => {
    let pathToFile = "./contents/File3.txt";
    fstasks(pathToFile).then(response => {
      console.log("Content of file /contents/File3.txt")
      console.log(response)
      expect(response).to.be.a("string");
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task10.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return content of file", () => {
    let pathToFile = "./contents/File3.txt";
    fstasks(pathToFile).then(response => {
      console.log("Content of file /contents/File3.txt")
      console.log(response)
      expect(response).to.include("This is File 3 in txt format");
    });
  });
  it("should return appropriate error message #end_test", () => {
    let pathToFile = "./contents/File10.txt";
    fstasks(pathToFile).catch(error => {
      expect(error).to.equal("Error reading file");
    });
  });
});
