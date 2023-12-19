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

// THIS IS THE MAP FUNCTION
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CODE
const testWords = ["This", "is", "a", "test!"];
assertArraysEqual(map(testWords, word => word[0]), ["T", "i", "a", "t"]);
assertArraysEqual(map(testWords, word => word.toUpperCase()), ["THIS", "IS", "A", "TEST!"]);
assertArraysEqual(testWords, ["This", "is", "a", "test!"]);
const testNumbers = [1, 2, 3, 4, 5];
assertArraysEqual(map(testNumbers, num => num * 10), [10, 20, 30, 40, 50]);