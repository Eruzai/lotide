const findKey = require('../findKey.js');
const assert = require('chai').assert;

const testObject = {
  "Blue Hill": { stars: 1, style: "diner"},
  "Akaleri":   { stars: 3, style: "bakery"},
  "noma":      { stars: 2, style: "cafe"},
  "elBulli":   { stars: 3, style: "mexican"},
  "Ora":       { stars: 2, style: "greek"},
  "Akelarre":  { stars: 3, style: "food truck"}
};

describe("#findKey", () => {
  it("returns first key of given value via callback", () => {
    assert.equal(findKey(testObject, x => x.stars === 2), "noma")
  });
  it("returns undefined if value given via callback doesn't exist", () => {
    assert.equal(findKey(testObject, x => x.stars === 4), undefined)
  });
});