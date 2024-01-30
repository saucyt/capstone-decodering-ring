// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //assigns and set up polybius square
    const square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
    // stores results
    let result;
    //encoding section
    if (encode) {
      // converts input to lowercase, split into characters, and handle "(i/j)"
      const fixedInputArray = input
        .toLowerCase()
        .split("")
        .map((char) => (char === "i" || char === "j" ? "(i/j)" : char));
      // mapped each letter to its own position within the polybius square
      const coordinates = fixedInputArray.map((letter) => {
        // ignores spaces
        if (letter === " ") return " ";
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.includes(letter)) {
            return `${row.indexOf(letter) + 1}${i + 1}`;
          }
        }
      });
      // joins the cordinates from the mapping above and forms the encoded results
      result = coordinates.join("");
    } else {
      // Use replace to replace spaces with "65"
      let spacesAdded = input.replace(/ /g, "65");

      // checks that there are an even number of characters so that all coordinate pairs are kept together
      if (spacesAdded.length % 2 !== 0) return false;
      // matches cordinates
      const coordinates = spacesAdded.match(/(\d{1,2}|\s)/g);
      // maps each of the coordinates to appropriate letter from the square
      result = coordinates
        .map((yx) => {
          // preserves spaces
          if (yx.trim() === " ") return " ";
          const rowIndex = parseInt(yx.slice(-1), 10) - 1;
          const columnIndex = parseInt(yx.slice(0, -1), 10) - 1;
          // checks if coordinates can be parsed as integers, if it can be done returns false
          if (isNaN(rowIndex) || isNaN(columnIndex)) {
            return false;
          }
          // returns the letter at specified coordinate
          return square[rowIndex][columnIndex];
        })
        .join("");
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
