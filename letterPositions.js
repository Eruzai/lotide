// FUNCTION ACCEPTS A STRING AND RETURNS AN OBJECT CONTAINING EACH LETTER AND ALL OF IT'S INDEX LOCATIONS
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;