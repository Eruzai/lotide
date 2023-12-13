//USED TO TEST FOR EXPECTED VALUES
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//RETURNS THE HEAD (FIRST ELEMENT) OF AN ARRAY
const head = function(arr) {
  return arr[0];
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["one"]), "one");
assertEqual(head([]), undefined);