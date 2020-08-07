const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const fs = require("fs");
const fstask = require("../task02");
const syncCheck = require("./syncCheck.spec");

describe("task 02 test running", async () => {
  it("should return the size of the file ", done => {
    let filename = path.join(__dirname, "../files/Konfinity.txt");
    let stats = fs.statSync(filename);
    fstask(filename)
      .then(res => {
        expect(res).to.equal(stats.size);
        done();
      })
      .catch(error => {
        console.log("Your Promise Is returning some error : ", error);
      });
  });
  it("should not contain synchronous function",done => {
      syncCheck("./task02.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return appropriate error message #end_test", done => {
    let filename = path.join(__dirname, "../files/abcdefg.txt");
    fstask(filename).catch(error => {
      expect(error).to.equal("Error occured while calculating stats");
      done();
    });
  });
});
