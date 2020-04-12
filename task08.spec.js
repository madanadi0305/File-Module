const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task08");
const syncCheck = require("./syncCheck.spec");

describe("task 08 test running", () => {
  it("should return array1 of files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(response => {
      console.log("Response for contents folder is")
      console.log(response)
      expect(response).to.be.an("array");
      done();
    });
  });
  it("should return array2 of files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(response => {
      console.log("Response for contents folder is")
      console.log(response)
      expect(response.length).to.equal(13);
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task08.js").then(res => {
    expect(res).to.equal(true);
    done();
  });
});
  it("should return array3 of files", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(response => {
      console.log("Response for contents folder is")
      console.log(response)
      expect(response).to.include("1.Introduction.md");
      done();
    });
  });
  it("should return error4", done => {
    let pathToDir = "./conts/";
    fstasks(pathToDir).catch(response => {
      expect(response).to.include("Error occured while reading directory");
      done();
    });
  });
  it("should return array of files5 #end_test", done => {
    let pathToDir = "./contents/";
    fstasks(pathToDir).then(response => {
      console.log("Response for contents folder is")
      console.log(response)
      expect(response).to.include.an("array");
      done();
    });
  });
});
