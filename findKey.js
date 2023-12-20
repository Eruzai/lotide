const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IS HERE
const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// TEST CODE
const testObject = {
  "Blue Hill": { stars: 1, style: "diner"},
  "Akaleri":   { stars: 3, style: "bakery"},
  "noma":      { stars: 2, style: "cafe"},
  "elBulli":   { stars: 3, style: "mexican"},
  "Ora":       { stars: 2, style: "greek"},
  "Akelarre":  { stars: 3, style: "food truck"}
};

assertEqual(findKey(testObject, x => x.stars === 2), "noma");
assertEqual(findKey(testObject, x => x.stars === 4), undefined);
assertEqual(findKey(testObject, x => x.style === "greek"), "Ora");