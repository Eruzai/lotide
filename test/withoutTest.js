const without = require('../without.js');
const assert = require('chai').assert;

describe("#without", () => {
  it("will return a new array with specified values removed", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3])
  });
  it("will still work if given a value that doesn't exist in the original array", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  });
  it("will handle multiple data types", () => {
    assert.deepEqual(without(["1", " ", null, true], [" ", null, "1"]), [true])
  });
  it("will remove all occurences of a value, not just the first", () => {
    assert.deepEqual(without([1, 1, 2, 1, 3, 1], [1]), [2, 3])
  });
});