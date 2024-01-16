const countOnly = require('../countOnly.js');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns object with correct count of specified items held within an array", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Fang": true }), { "Jason": 1, "Fang": 2 })
  });
  it("returns correct counts if passed an item that doesn't exist within the array to be counted", () => {
    assert.deepEqual(countOnly(firstNames, { "Karima": true }), {})
  });
  it("returns correct counts if passed an item that exists but told not to count it", () => {
    assert.deepEqual(countOnly(firstNames, { "Agouhanna": false }), {})
  });
});