// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // Checks if the substitution value is present
    if (!alphabet) {
      return false;
    }

    // Checks if the substitution alphabet is exactly 26 characters
    if (alphabet.length !== 26) {
      return false;
    }

    // Checks for any duplicate characters in the substitution alphabet using .filter() method
    const onlyUniqueChars = alphabet
      .split("")
      .filter((item, index, self) => self.indexOf(item) === index);
    if (onlyUniqueChars.length !== alphabet.length) {
      return false;
    }

    // Converts the input to lowercase
    const inputArray = input.toLowerCase().split("");

    // assigns the real alphabet
    const realAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

    // assigns the substitution alphabet
    const subAlphabetArray = alphabet.toLowerCase().split("");
    // assigns an empty array to the result
    let result = [];
    // iterates through the characters within the input
    for (let i = 0; i < input.length; i++) {
      const char = inputArray[i];

      // maintains spaces in the message
      if (char === " ") {
        result.push(" ");
        continue;
      }

      // Performs substitutions based on the alphabet using arrays
      const index = encode
        ? realAlphabetArray.indexOf(char)
        : subAlphabetArray.indexOf(char);
      result.push(encode ? subAlphabetArray[index] : realAlphabetArray[index]);
    }
    // returns the result
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
