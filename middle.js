// middle function will take an array and return the middle-most element(s) of the array
const middle = function(arr) {
  let middleArray = [];

  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middleArray.push(arr[(arr.length / 2) - 1]);
      middleArray.push(arr[arr.length / 2]);
    } else {
      middleArray.push(arr[((arr.length - 1) / 2)]);
    }
  }

  return middleArray;
};

module.exports = middle;