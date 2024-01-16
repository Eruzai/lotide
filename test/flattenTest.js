const flatten = require('../flatten.js');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("creates one dimensional array with values from nested arrays", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
  it("properly handles numerous data types", () => {
    assert.deepEqual(flatten([[1, "2"], [null], " ", []]), [1, "2", null, " "])
  });
});