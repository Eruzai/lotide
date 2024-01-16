const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true if both arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  it("returns false if both arrays are not equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false)
  });
  it("handles multiple data types", () => {
    assert.deepEqual(eqArrays([1, "Q", null], [1, "Q", null]), true)
  });
  it("handles nested arrays", () => {
    assert.deepEqual(eqArrays([[2, 3, ["a", ["A"], "c"]], [4]], [[2, 3, ["a", ["A"], "c"]], [4]]), true)
  });
});