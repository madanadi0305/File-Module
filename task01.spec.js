const chai = require("chai");
const expect = chai.expect;
const fstask = require("../task01");

describe("task 01 test running", () => {
  it("should return details of path ", () => {
    let pathToFile = "/home/company/konfinity/konfinity.txt";
    let position = "start";
    let data = "myComputer";
    let result = fstask(pathToFile, position, data);
    expect(result.baseName).to.equal("konfinity.txt");
    expect(result.dirName).to.equal("/home/company/konfinity");
    expect(result.finalPath).to.equal(
      "myComputer/home/company/konfinity/konfinity.txt"
    );
  });
  it("should return details of path ", () => {
    let pathToFile = "/home/company/konfinity/konfinity";
    let position = "end";
    let data = "konfinityMoto.txt";
    let result = fstask(pathToFile, position, data);
    expect(result.baseName).to.equal("konfinity");
    expect(result.dirName).to.equal("/home/company/konfinity");
    expect(result.finalPath).to.equal(
      "/home/company/konfinity/konfinity/konfinityMoto.txt"
    );
  });
  it("should return details of path #end_test", () => {
    let pathToFile = "/home/company/konfinity.js";
    let position = "end";
    let data = "somecontent";
    let result = fstask(pathToFile, position, data);
    expect(result.baseName).to.equal("konfinity.js");
    expect(result.dirName).to.equal("/home/company");
    expect(result.finalPath).to.equal("/home/company/konfinity.js/somecontent");
  });
});
