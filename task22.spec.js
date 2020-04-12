const chai = require("chai");
const expect = chai.expect;
const fs = require("fs");
const fstasks = require("../task22");
const syncCheck = require("./syncCheck.spec");

describe("task 22 test running", () => {
  it("should delete the directory or return error", done => {
    let pathToDir = "./files/nayaFolder";
    fs.mkdir(pathToDir, error => {
      if (!error) {
        fstasks(pathToDir).then(result => {
          expect(result).to.equal("File exists : Directory removed");
          done();
        });
      }
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task22.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should delete the directory or return error #end_test", done => {
    let pathToDir = "./files/nayaFolder";
    fstasks(pathToDir).catch(result => {
      expect(result).to.equal(
        "cannot remove directory because : File does not exists"
      );
      done();
    });
  });
});
