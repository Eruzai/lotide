const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns correct counts of letters in a string", () => {
    assert.deepEqual(countLetters("test"), {t: 2, e: 1, s: 1})
  });
  it("doesn't count spaces", () => {
    assert.deepEqual(countLetters("a b c"), {a: 1, b: 1, c: 1})
  });
});