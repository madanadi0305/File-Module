const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task06");
const syncCheck = require("./syncCheck.spec");
const fs = require("fs");

describe("task 06 test running", () => {
  it("should return the count of js files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(userResult => {
      console.log("For content folder output object is")
      console.log(userResult)
      expect(userResult.countJs).to.equal(6);
      done();
    });
  });
  it("should return the count of txt files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(userResult => {
      console.log("For content folder output object is")
      console.log(userResult)
      expect(userResult.countTxt).to.equal(2);
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task06.js").then(res => {
    expect(res).to.equal(true);
    done();
  });
});
  it("should return the count of remaining files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(userResult => {
      console.log("For content folder output object is")
      console.log(userResult)
      expect(userResult.count).to.equal(5);
      done();
    });
  });
  it("should return the count of js files #end_test", done => {
    let pathToDir = "./jshdjas/";
    fstasks(pathToDir).catch(userResult => {
      expect(userResult).to.equal("Error occured while reading directory");
      done();
    });
  });
});
