// eqArrays function takes two arrays and returns true or false, based on a perfect match
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { //checks if both arrays are equal length. if one is longer it ends the function with a return of false.
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { //iterates through the arrays checking each coresponding value to eachother for inequality.
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true; //if no issues are found (different lengths or values) a value of true is returned
};

// assertArraysEqual function takes two arrays and outputs an appropriate message to the console
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ The arrays ${arr1} and ${arr2} are equal!`);
  } else {
    console.log(`❌❌❌ The arrays ${arr1} and ${arr2} are not equal!`);
  }
};

// THIS IS THE TAKEUNTIL FUNCTION
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

// TEST CODE
const words = ["This", "is", "a", "pass", "But", "this", "is", "a", "fail!"];
assertArraysEqual(takeUntil(words, word => word === "But"), ["This", "is", "a", "pass"]);
assertArraysEqual(takeUntil(words, word => word === words[4]), ["This", "is", "a", "pass"]);
assertArraysEqual(words, ["This", "is", "a", "pass", "But", "this", "is", "a", "fail!"]);