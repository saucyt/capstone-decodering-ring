const chai = require("chai");
const { substitution } = require("../src/substitution");
const expect = chai.expect;

describe("substitution function tests", () => {
  describe("error handling", () => {
    it("Should return false if substitution alphabet is missing", () => {
      // sets variables for the test case
      const message = "message";
      const actual = substitution(message);
      // sets expectation to be false
      expect(actual).to.be.false;
    });
    it("Should return false if substitution alphabet is not 26 characters", () => {
      // sets variables for the test case
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      // sets expectation to be false
      expect(actual).to.be.false;
    });
    it("Should return false if the substitution alphabet contains duplicate characters", () => {
      // sets variables for the test case
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      // sets the expectation to be equal to false
      expect(actual).to.be.false;
    });
  });
  describe("encoding", () => {
    it("Should translate the given phrase based on the alphabet given to the function", () => {
      // sets variables for the test case
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "ykrrpik";
      const actual = substitution(message, alphabet);
      // sets the expectation to be equal to 'ykrrpik'
      expect(actual).to.equal(expected);
    });
    it("Should maintain spaces after encoding", () => {
      // sets variables for the test case
      const message = "my message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "ya ykrrpik";
      const actual = substitution(message, alphabet);
      // sets the expectation to be equal to 'ya ykrrpik'
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters after encoding", () => {
      // sets variables for the test case
      const message = "A Message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "p ykrrpik";
      const actual = substitution(message, alphabet);
      // sets the expectation to be equal to 'p ykrrpik'
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("Should translate the given phrase based on the alphabet given to the function", () => {
      // sets variables for the test case
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "message";
      const actual = substitution(message, alphabet, false);
      // sets the expectations to be equal to 'message'
      expect(actual).to.equal(expected);
    });
    //****
    it("should preserve spaces", () => {
      // sets variables for the test case
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const message = "elp xhm mbymwwmfj";
      const actual = substitution(message, alphabet, false);
      const expected = "you are excellent";
      // sets the expectation to be equal to 'you are excellent'
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters after decoding", () => {
      // sets variables for the test case
      const message = "YkRrPiK";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "message";
      const actual = substitution(message, alphabet, false);
      // sets the expectation to be equal to 'message'
      expect(actual).to.equal(expected);
    });
  });
});
