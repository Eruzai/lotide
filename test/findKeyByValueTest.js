const findKeyByValue = require('../findKeyByValue.js');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine_Nine",
  drama: "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns first key of given value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });
  it("returns undefined if value doesn't exist", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  });
});