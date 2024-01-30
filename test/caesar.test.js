const chai = require("chai");
const { caesar } = require("../src/caesar.js");
const expect = chai.expect;

describe("Ceasar function test", () => {
  it("Should return fale if shift is not present", () => {
    // assigned variables for test case
    const message = "test message";
    const actual = caesar(message);
    // sets expectation to equate to false
    expect(actual).to.be.false;
  });

  it("Should return false if shift is equal to 0", () => {
    // assigns variables to test cases
    const message = "test message";
    const shift = 0;
    const actual = caesar(message, shift);
    // sets excpectation to equate to false
    expect(actual).to.be.false;
  });

  it("Should return false if shift is less than -25", () => {
    // assigns variables to test case
    const message = "test message";
    const shift = -30;
    const actual = caesar(message, shift);
    // sets expectations to be equalt to false
    expect(actual).to.be.false;
  });

  it("Should return false if shift is greater than 25", () => {
    // assigns variables to test case
    const message = "test message";
    const shift = 30;
    const actual = caesar(message, shift);
    // sets expectations to equate to false
    expect(actual).to.be.false;
  });

  it("Should maintain spaces throughout and other symbols", () => {
    // assigns variables to test case
    const message = "test message ! 123";
    const shift = 3;
    const actual = caesar(message, shift);
    // sets expectations to be equaled to "whvw phvvdjh ! 123"
    expect(actual).to.equal("whvw phvvdjh ! 123");
  });

  it("Should ignore capital letters", () => {
    // assigns variables to test case
    const message = "TeSt MeSsAgE";
    const shift = 3;
    const actual = caesar(message, shift);
    // sets the expectationt to be equaled to "whvw phvvdjh"
    expect(actual).to.equal("whvw phvvdjh");
  });

  it("If a letter is shifted based on the alphabet it should wrap around the front of the letter", () => {
    // assigns variables to test case
    const message = "xyz";
    const shift = 3;
    const actual = caesar(message, shift);
    // sets expectation to be equal to "abc"
    expect(actual).to.equal("abc");
  });
});
// Write your tests here!
