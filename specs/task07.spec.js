const chai = require("chai");
const expect = chai.expect;
const syncCheck = require("./syncCheck.spec");
const fstasks = require("../task07");

describe("task 07 test running", () => {
  it("should return count of files or error generated", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir)
      .then(response => {
        console.log("Response is")
        console.log(response)
        expect(response.countFile).to.equal(11);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task07.js").then(res => {
    expect(res).to.equal(true);
    done();
  });
});
  it("should return count of directories or error generated", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir)
      .then(response => {
        console.log("Response is")
        console.log(response)
        expect(response.countDir).to.equal(2);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("should return count of files or error generated #end_test", done => {
    let pathToDir = "./conts/";
    fstasks(pathToDir).catch(error => {
      expect(error).to.include("Error occured");
      done();
    });
  });
});
