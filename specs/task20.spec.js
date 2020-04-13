const chai = require("chai");
const expect = chai.expect;
const fstasks = require("../task20");
const fs = require("fs");
const syncCheck = require("./syncCheck.spec");

describe("task 20 test running", () => {
  it("should use task04 to check file existence", done => {
    fileDataChecker("./task20.js")
      .then(result => {
        expect(result.count).to.be.above(1);
        done();
      })
      .catch(error => {
        console.error("First complete exercise number 4 and import it in current file");
      });
  });
  it("should not contain synchronous function",done => {
    syncCheck("./task20.js").then(res => {
      expect(res).to.equal(true);
      done();
    });
  });
  it("should return proper message", done => {
    let pathToFile = "./contents/File3.txt";
    let content = " This is specs doing";
    fstasks(pathToFile, content)
      .then(result => {
        expect(result).to.equal("Data appended successfully");
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("should append data in file", done => {
    let pathToFile = "./contents/File3.txt";
    let content = " This is specs doing";
    fs.readFile(pathToFile, "utf8", (error, data) => {
      if (!error) {
        expect(data).to.include(content);
        fs.writeFile(pathToFile, "This is File 3 in txt format", err=>{
          if(err) console.log(err)
        })
        done();
      }
    });
  });
  it("should return error message if file doesn't exists #end_test", done => {
    fstasks("./shhgdsd.txt", "New content").catch(error => {
      expect(error).to.equal(
        "Cannot append data because : File does not exists"
      );
      done();
    });
  });
});

const fileDataChecker = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (error, data) => {
      if (error) {
        reject("ye wali error h kya File does not exists");
      } else {
        let count = 0;
        let elem = "ggfjtyhyugtrfvrtyhju";
        let tokenLine = data.split("\n");
        tokenLine.forEach(element => {
          if (element.startsWith("//")) {
          } else {
            if (element.includes('require("./task04");' || 'require("./task04") ;')) {
              let tokens = element.split("=");
              let interElem = tokens[0].split(" ");
              let i = 1;
              while (interElem[interElem.length - i].length < 1) {
                i++;
              }
              elem = interElem[interElem.length - i];
            }
            if (element.includes(elem)) {
              count += 1;
            }
          }
        });
        resolve({ elem: elem, count: count, data: data });
      }
    });
  });
};
