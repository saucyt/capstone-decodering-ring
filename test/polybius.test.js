const chai = require("chai");
const { polybius } = require("../src/polybius");
const expect = chai.expect;

describe("polybius function test", () => {
  describe("encoding", () => {
    it("Should encode the letters 'i' and 'J' to 42", () => {
      // assigned variables for test case
      const input = "ij";
      const expected = "4242";
      const actual = polybius(input);
      // sets expectation to be '4242'
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters and maintain spaces after encoding", () => {
      // assigned variables for test case
      const input = "A Message";
      const expected = "11 23513434112251";
      const actual = polybius(input);
      // sets expectation to be '11 23513434112251'
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding", () => {
    it("Should decode 42 to (i/j)", () => {
      // assigned variables for the test case
      const input = "42";
      const expected = "(i/j)";
      const actual = polybius(input, false);
      // sets the expectation to be '(i/j)'
      expect(actual).to.equal(expected);
    });
    it("Should maintain spaces after decoding", () => {
      // assigned variables for the test case
      const input = "11 23513434112251";
      const expected = "a message";
      const actual = polybius(input, false);
      // sets the expectation to be 'a message'
      expect(actual).to.equal(expected);
    });
  });
});
