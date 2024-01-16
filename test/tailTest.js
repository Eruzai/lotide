const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("doesn't alter the original array", () => {
    const testArray = [5, 6, 7];
    tail(testArray);
    assert.deepEqual(testArray, [5, 6, 7]);
  });
});