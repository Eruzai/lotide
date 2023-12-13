//USED TO TEST FOR EXPECTED VALUES
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//RETURNS THE TAIL (EVERY ELEMENT FOLLOWING THE HEAD) OF AN ARRAY
const tail = function(arr) {
  return arr.slice(1);
};

//TEST CODE
//test 1
let array = [1, 2, 3];
let result = tail(array);
assertEqual(result.length, 2);

//test 2
array = [1];
result = tail(array);
assertEqual(result.length, 0);

//test 3
array = [];
result = tail(array);
assertEqual(result.length, 0);