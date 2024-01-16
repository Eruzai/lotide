const eqArrays = require("./eqArrays");

const isObject = function(val) { // used to check if an object is actually an object
  return (val !== null && typeof val === "object" && !Array.isArray(val));
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
    } else if (isObject(object1[key]) && isObject(object2[key])) { // if both objects are indeed objects it calls eqObjects (recursion)
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;