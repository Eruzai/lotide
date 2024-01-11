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

const isObject = function(val) {
  return (typeof val === "object" && !Array.isArray(val));
};

// FUNCTION RETURNS TRUE IF BOTH OBJECTS HAVE IDENTICAL KEYS WITH IDENTICAL VALUES
const eqObjects = function(object1, object2) {
  const objectKeys = Object.keys(object1); //creates array with keys from object1

  if (objectKeys.length !== Object.keys(object2).length) { //compares both objects number of keys to see if not equal
    return false;
  }
  for (const key of objectKeys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if both objects are arrays then compares them
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (isObject(object1[key]) && isObject(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
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

const result5 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
assertEqual(result5, true);

const result6 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertEqual(result6, false);

const result7 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
assertEqual(result7, false);

const result8 = eqObjects({ a: { y: { s: 1, t: 2 }, z: 1 }, b: 2 }, { a: { y: {s: 1, t: 2 }, z: 1 }, b: 2 }); // => true
assertEqual(result8, true);

const result9 = eqObjects({ a: { y: { s: 1, t: 2 }, z: 1 }, b: { x: 1, y: { s: 1, t: { j: 1 } }, z: 3 } }, { a: { y: { s: 1, t: 2 }, z: 1 }, b: { x: 1, y: { s: 1, t: { j: 1 } }, z: 3 } }); // => true
assertEqual(result9, true);