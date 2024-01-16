// FUNCTION WILL RETURN A COUNT OF EACH LETTER IN A GIVEN STRING
const countLetters = function(string) {
  let results = {};

  for (const letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;