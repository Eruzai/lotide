const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ The arrays ${arr1} and ${arr2} are equal!`);
  } else {
    console.log(`❌❌❌ The arrays ${arr1} and ${arr2} are not equal!`);
  }
};

// FUNCTION ACCEPTS A STRING AND RETURNS AN OBJECT CONTAINING EACH LETTER AND ALL OF IT'S INDEX LOCATIONS
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// TEST CODE
const stringToShowIndexes = "abra kadabra";
const result1 = letterPositions(stringToShowIndexes);
console.log(result1); // manually ensure that the space wasn't added to the object!
assertArraysEqual(result1["a"], [0, 3, 6, 8, 11]);
assertArraysEqual(result1["b"], [1, 9]);
assertArraysEqual(result1["r"], [2, 10]);
assertArraysEqual(result1["k"], [5]);
assertArraysEqual(result1["d"], [7]);