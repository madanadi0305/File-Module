const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task09");
const syncCheck = require("./syncCheck.spec");

describe("task 09 test running", () => {
  it("should return the count of Files at given path", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(count => {
      console.log("Response for contents folder is")
      console.log(count)
      expect(count.countFile).to.equal(26);
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task09.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return the count of Directory at given path", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(count => {
      console.log("Response for contents folder is")
      console.log(count)
      expect(count.countDir).to.equal(3);
      done();
    });
  });
  it("should return the count of Files at given path", done => {
    let pathToDir = "./contents/innerContent";
    fstasks(pathToDir).then(count => {
      console.log("Response for contents/innerContent folder is")
      console.log(count)
      expect(count.countFile).to.equal(10);
      done();
    });
  });
  it("should return the count of Directory at given path #end_test", done => {
    let pathToDir = "./contents/innerContent";
    fstasks(pathToDir).then(count => {
      console.log("Response for contents/innerContent folder is")
      console.log(count)
      expect(count.countDir).to.equal(1);
      done();
    });
  });
});
