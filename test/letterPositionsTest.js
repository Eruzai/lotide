const letterPositions = require('../letterPositions.js');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("correctly returns an object with each letter and their index locations", () => {
    assert.deepEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] })
  });
  it("doesn't include spaces in the returned object", () => {
    assert.deepEqual(letterPositions("I am Mia"), { I: [0], a: [2, 7], m: [3], M: [5], i: [6]})
  });
});