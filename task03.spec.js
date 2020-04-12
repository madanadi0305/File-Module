const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const fs = require("fs");
const fstask = require("../task03");
const syncCheck = require("./syncCheck.spec");

describe("task 03 test running", () => {
  it("should return the size, birthtime, modifiedtime, type of the file1", done => {
    let filename = path.join(__dirname, "../contents/File4.txt");
    let stats = fs.statSync(filename);
    fstask(filename)
      .then(res => {
        expect(res.size).to.equal(stats.size);
        expect(res.birthTime).to.equal(stats.birthtimeMs);
        expect(res.modifiedTime).to.equal(stats.mtimeMs);
        expect(res.type).to.equal("File");
        done();
      })
      .catch(error => {
        console.log("Your Promise Is returning some error : ", error);
      });
  });
  it("should return the size, birthtime, modifiedtime, type of the file", done => {
    let filename = path.join(__dirname, "../contents");
    let stats = fs.statSync(filename);
    fstask(filename)
      .then(res => {
        expect(res.size).to.equal(stats.size);
        expect(res.birthTime).to.equal(stats.birthtimeMs);
        expect(res.modifiedTime).to.equal(stats.mtimeMs);
        expect(res.type).to.equal("Directory");
        done();
      })
      .catch(error => {
        console.log("Your Promise Is returning some error : ", error);
      });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task03.js").then(res => {
    expect(res).to.equal(true);
    done();
  });
});
  it("should return the error as per asked #end_test", done => {
    let filename = path.join(__dirname, "../contents/konfiny2.txt");
    fstask(filename).catch(error => {
      expect(error).to.equal("Error occured while calculating stats");
      done();
    });
  });
});
