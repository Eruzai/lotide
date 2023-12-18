const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// FUNCTION RETURNS TRUE IF BOTH OBJECTS HAVE IDENTICAL KEYS WITH IDENTICAL VALUES
const eqObjects = function(object1, object2) {
  const objectKeys = Object.keys(object1);

  if (objectKeys.length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key of objectKeys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const result1 = eqObjects(shirtObject, anotherShirtObject); // should return true
assertEqual(result1, true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const result2 = eqObjects(shirtObject, longSleeveShirtObject); // should return false
assertEqual(result2, false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const result3 = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // should return true
assertEqual(result3, true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const result4 = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // should return false
assertEqual(result4, false);