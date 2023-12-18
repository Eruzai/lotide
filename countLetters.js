const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      console.log(letter);
      console.log(results);
    }
  }

  return results;
};

// TEST CODE
const stringToCount = "Hello there!";
const result1 = countLetters(stringToCount);
console.log(result1);
assertEqual(result1["l"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["H"], 1);
assertEqual(result1[" "], undefined);