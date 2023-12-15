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
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["a", 2, 3], [1, , 3]);