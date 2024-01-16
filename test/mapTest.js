const map = require('../map.js');
const assert = require('chai').assert;

describe("#map", () => {
  it("performs a given function on the strings held within an array and returns a new array with the new strings", () => {
    assert.deepEqual(map(["This", "is", "a", "test!"], word => word[0]), ["T", "i", "a", "t"])
  });
  it("works with numbers!", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num => num * 10), [10, 20, 30, 40, 50])
  });
});