// flatten function will take an array containing elements including nested arrays of elements, and return a "flattened" version of the array
const flatten = function(arrayOfArrays) {
  let flattenedArray = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (Array.isArray(arrayOfArrays[i])) {
      flattenedArray = flattenedArray.concat(arrayOfArrays[i]);
    } else {
      flattenedArray.push(arrayOfArrays[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;