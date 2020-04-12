const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task14");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 14 test running", () => {
  it("should return the count of the function", done => {
    let filename = "./helper1.js";
    fstasks(filename).then(userResult => {
      console.log("Response of /helper1.js is")
      console.log(userResult)
      expect(userResult.functionCount).to.equal(3);
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task14.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return the count of the variable", done => {
    let filename = "./helper1.js";
    fstasks(filename).then(userResult => {
      console.log("Response of /helper1.js is")
      console.log(userResult)
      expect(userResult.variableCount).to.equal(10);
      done();
    });
  });
  it("should return the count of the function", done => {
    let filename = "./helper2.js";
    fstasks(filename).then(userResult => {
      console.log("Response of /helper2.js is")
      console.log(userResult)
      expect(userResult.functionCount).to.equal(4);
      done();
    });
  });
  it("should return the count of the variable #end_test", done => {
    let filename = "./helper2.js";
    fstasks(filename).then(userResult => {
      console.log("Response of /helper2.js is")
      console.log(userResult)
      expect(userResult.variableCount).to.equal(8);
      done();
    });
  });
});
