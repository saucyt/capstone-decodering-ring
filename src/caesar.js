// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
// seperate decoder ring file saved in different location

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // checks if shift isnt provided, or out of valid range of -25 , 25
    if (!shift || shift < -25 || shift > 25) {
      // returns false if invalid
      return false;
    }
    // converts to lowercase  and created an empty string to store results
    input = input.toLowerCase();
    let result = "";
    // looped through each character in array and grabbed the current character
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];
      // checks if the character is an alphabetical character then calculates the new position based on the shift
      if (/^[a-z]$/.test(currentChar)) {
        let newPosition = currentChar.charCodeAt(0) + (encode ? shift : -shift);
        // wraps around the alphabet as needed
        if (newPosition > "z".charCodeAt(0)) {
          newPosition -= 26;
        } else if (newPosition < "a".charCodeAt(0)) {
          newPosition += 26;
        }
        // converts back to a character and appends to the results
        result += String.fromCharCode(newPosition);
      } else {
        // non alphabetic characters are then added as they are
        result += currentChar;
      }
    }
    return result;
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
