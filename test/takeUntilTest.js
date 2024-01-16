const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;

const words = ["This", "is", "a", "pass", "But", "this", "is", "a", "fail!"];

describe("#takeUntil", () => {
  it("creates an array containing the values up to a given value determined via callback", () => {
    assert.deepEqual(takeUntil(words, word => word === "But"), ["This", "is", "a", "pass"])
  });
  it("can use an index callback", () => {
    assert.deepEqual(takeUntil(words, word => word === words[4]), ["This", "is", "a", "pass"])
  });
});