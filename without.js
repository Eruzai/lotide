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

// without function will return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let wantedItems = [];
  
  source.forEach(item => {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (item === itemsToRemove[i]) {
        return;
      }

      if (i === itemsToRemove.length - 1) {
        wantedItems.push(item);
      }
    }
  });
  return wantedItems;
}

// test code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", 1, "3", 2, 3], [1, 2, "3"]), ["1", 3]);
assertArraysEqual(without(["1", , null, true], [1, false, "1", ]), [null, true]);
assertArraysEqual(without([1, 2, 1, 2, 1, 2, 3,], [1, 3, true]), [2, 2, 2]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);