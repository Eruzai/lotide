const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

//TEST CODE
//test 1, checks if array is propery transformed to have only the tail of the original array
let array = [1, 2, 3];
let result = tail(array);
assertEqual(result.length, 2);

//test 2, what happens if the array has only one item?
array = [1];
result = tail(array);
assertEqual(result.length, 0);

//test 3, what happens if the array has zero items?
array = [];
result = tail(array);
assertEqual(result.length, 0);

//test 4, checks if result array has the proper head matching index 1 of the original array
array = [1, 2, 3];
result = tail(array);
assertEqual(result[0], array[1]);

//test 5, checks if original array is unaltered
array = [1, 2, 3];
tail(array);
assertEqual(array.length, 3);