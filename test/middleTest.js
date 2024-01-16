const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for ['a']", () => {
    assert.deepEqual(middle(['a']), []);
  });
  it("returns [] for ['a', 'b']", () => {
    assert.deepEqual(middle([['a', 'b']]), []);
  });
  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b']);
  });
  it("returns ['c'] for ['a', 'b', 'c', 'd', 'e']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
  });
  it("returns ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
  });
  it("returns ['c', 'd'] for ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c', 'd']);
  });
});