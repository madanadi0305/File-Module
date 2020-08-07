const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task15");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 15 test running", () => {
  it("should return proper message if file is written", done => {
    let pathToFile = "./contents/innerContent/new.txt";
    let content = "This file is been created by user and it is file abcd";
    fstasks(pathToFile, content).then(response => {
      console.log("Content written inside contents/innerContent/new.txt")
      console.log(fs.readFileSync(pathToFile))
      expect(response).to.equal("Content written to file successfully");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task15.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return proper error if error appears", done => {
    let pathToFile = "";
    let content = "This file is been created by user and it is file abcd";
    fstasks(pathToFile, content).catch(error => {
      expect(error).to.equal("Error writing content in file");
      done();
    });
  });
  it("should return proper message if file is written", done => {
    let pathToFile = "./contents/innerContent/new.txt";
    checkFile(pathToFile)
      .then(response => {
        console.log("Content available in contents/innerContent/new.txt")
        console.log(fs.readFileSync(pathToFile))
        expect(response).to.equal("File exists");
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("File should contain the data provided #end_test", done => {
    let pathToFile = "./contents/innerContent/new.txt";
    fs.readFile(pathToFile, "utf8", (error, data) => {
      if (!error) {
        expect(data).to.include(
          "This file is been created by user and it is file abcd"
        );
        removeFile().then(result => {
          console.log(result);
        }).catch(err=>{
          console.log("Error is",err);
        });
        done();
      }
    });
  });
});

const checkFile = filename => {
  return new Promise((resolve, reject) => {
    fs.access(filename, error => {
      if (error) {
        reject("File does not exists");
      } else {
        resolve("File exists");
      }
    });
  });
};

const removeFile = () => {
  return new Promise((resolve, reject) => {
    fs.unlink("./contents/innerContent/new.txt", error => {
      if (!error) {
        resolve("File removed");
      } else {
        reject("Error occurred "+error);
      }
    });
  });
};
