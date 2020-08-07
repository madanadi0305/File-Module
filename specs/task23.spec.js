const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task23");
const make = require("../task21");
const path = require("path");
const syncCheck = require("./syncCheck.spec");

describe("FS Module testing #start_test", () => {
  it("Should delete a folder at given path with given name", done => {
    let pathToDir = "./files/nayaFolder";
    make(pathToDir).then(result => {
      fstasks(pathToDir).then(userResult => {
        expect(userResult).to.equal("File exists : Directory removed");
        done();
      });
    });
  });
  it("Should create and delete a folder at given path with given name", done => {
    let pathToDir = "./files/nayaFolder";
    fstasks(pathToDir).then(userResult => {
      expect(userResult).to.equal("New directory created : Directory removed");
      done();
    });
  });
  it("Should delete a folder at given path with given name", done => {
    let pathToDir = "./files/newFolder1";
    make(pathToDir).then(result => {
      fstasks(pathToDir).then(userResult => {
        expect(userResult).to.equal("File exists : Directory removed");
        done();
      });
    });
  });
  it("should not contain synchronous function", done => {
    syncCheck("./task23.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("Should create and delete a folder at given path with given name #end_test", done => {
    let pathToDir = "./files/newFolder6";
    fstasks(pathToDir).then(userResult => {
      expect(userResult).to.equal("New directory created : Directory removed");
      done();
    });
  });
});

