const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task17");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 17 test running", () => {
  it("should return proper error message if file does not exists", done => {
    let pathToFile = "./contents/djskfha.md";
    let content = "New content";
    fstasks(pathToFile, content).catch(error => {
      console.log("Response for appending in /contents/djskfha.md")
      console.log(error)
      expect(error).to.equal("File does not exists provide another name");
      done();
    });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task17.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should read content of file and append given content to it", done => {
    let pathToFile = "./contents/File3.txt";
    let content = " new content added by spec";
    fstasks(pathToFile, content).then(response => {
      console.log("Response for appending in /contents/File3.txt")
      console.log(response)
      expect(response).to.equal("Content appended to file successfully");
      done();
    });
  });
  it("file should contain new content added to it", done => {
    let pathToFile = "./contents/File3.txt";
    fs.readFile(pathToFile, "utf8", (error, data) => {
      if (!error) {
        console.log("Content in file /contents/File3.txt is", data)
        expect(data).to.include("new content added by spec");
        done();
      }
    });
  });
  it("should return proper error message if file does not exists", done => {
    let pathToFile = "./contents/jdhfjkafhk.md";
    let content = "New content";
    fstasks(pathToFile, content).catch(error => {
      expect(error).to.equal("File does not exists provide another name");
      done();
    });
  });
  it("should read content of file and append given content to it", done => {
    let pathToFile = "./contents/File3.txt";
    let content = " another content added";
    fstasks(pathToFile, content).then(response => {
      expect(response).to.equal("Content appended to file successfully");
      done();
    });
  });
  it("file should contain new content added to it #end_test", done => {
    let pathToFile = "./contents/File3.txt";
    fs.readFile(pathToFile, "utf8", (error, data) => {
      if (!error) {
        expect(data).to.include("another content added");
        fs.writeFile(pathToFile, "This is File 3 in txt format", err =>{
          if(err) console.log(err)
          console.log("Task complete")
        })
        done();
      }
    });
  });
});
