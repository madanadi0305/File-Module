const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task16");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 16 test running", () => {
  it("should ensure whether file exists or not", done => {
    let pathToFile = "./contents/File1.md";
    let content = "Content provided by user.";
    fstasks(pathToFile, content).catch(error => {
      console.log("Trying to write in contents/File1.md")
      expect(error).to.equal("File already exists provide another name");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task16.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should create a file and write the content in the file", done => {
    let pathToFile = "./contents/innerContent/konfinityMember.txt";
    let content = "This file contains data of student";
    fstasks(pathToFile, content).then(response => {
      console.log("Trying to write in /contents/innerContent/konfinityMember.txt")
      expect(response).to.equal("Content written to file successfully");
      done();
    });
  });
  it("file should be created and contain the content", done => {
    let pathToFile = "./contents/innerContent/konfinityMember.txt";
    checkFile(pathToFile).then(response => {
      console.log("Checking existence of /contents/innerContent/konfinityMember.txt")
      console.log(response)
      expect(response).to.equal("File exists");
      done();
    });
  });
  it("File should contain the data provided #end_test", done => {
    let pathToFile = "./contents/innerContent/konfinityMember.txt";
    fs.readFile(pathToFile, "utf8", (error, data) => {
      if (!error) {
        console.log("Content inside /contents/innerContent/konfinityMember.txt")
        console.log(data)
        expect(data).to.include("This file contains data of student");
        removeFile("./contents/innerContent/konfinityMember.txt").then(
          result => {
            console.log("Task completed");
          }
        );
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

const removeFile = filename => {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, error => {
      if (!error) {
        resolve("File removed");
      } else {
        reject("Error occured");
      }
    });
  });
};
