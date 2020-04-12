const chai = require("chai");
const expect = chai.expect;
const fstask = require("../task04");
const syncCheck = require("./syncCheck.spec");

describe("task 04 test running", () => {
  it("should ensure whether file exists or not1", done => {
    let filename = "./contents/File1.md";
    fstask(filename).then(res => {
      expect(res).to.equal("File exists");
      done();
    });
  });
  it("should ensure whether file exists or not2", done => {
    let filename = "./contents/File5.md";
    fstask(filename).then(res => {
      expect(res).to.equal("File exists");
      done();
    });
  });
  it("should ensure whether file exists or not3", done => {
    let filename = "./abcd.txt";
    fstask(filename).catch(error => {
      expect(error).to.equal("File does not exists");
      done();
    });
  });
  it("should ensure whether file exists or not4 #end_test", done => {
    let filename = "./nothing.txt";
    fstask(filename).catch(error => {
      expect(error).to.equal("File does not exists");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task04.js").then(res => {
    expect(res).to.equal(true);
    done();
  });
});
}); 
