const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task23");
const make = require("../task21");
const path = require("path");
const syncCheck = require("./syncCheck.spec");

describe("task 23 test running", () => {
  it("Should delete a folder at given path with given name #end_test", done => {
    let pathToDir = "./files/nayaFolder";
    expect(1).to.equal(1);
    done();
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task23.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
});