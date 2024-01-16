const eqObjects = require('../eqObjects.js');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true if two objects are equal", () => {
    assert.deepEqual(eqObjects({ color: "red", size: "medium" }, { color: "red", size: "medium" }), true)
  });
  it("returns true if two objects containing arrays are equal", () => {
    assert.deepEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] } ), true)
  });
  it("returns false if two objects are not equal", () => {
    assert.deepEqual(eqObjects({ size: "medium", color: "red", sleeveLength: "long" }, { color: "red", size: "medium" }), false)
  });
  it("returns false if two objects containing arrays are not equal", () => {
    assert.deepEqual(eqObjects({ size: "medium", colors: ["red", "blue"], sleeveLength: "long" }, { colors: ["red", "blue"], size: "medium" }), false)
  });
  it("returns true if two objects containing nested objects are equal", () => {
    assert.deepEqual(eqObjects({ a: { y: { s: 1, t: 2 }, z: 1 }, b: { x: 1, y: { s: 1, t: { j: 1 } }, z: 3 } }, { a: { y: { s: 1, t: 2 }, z: 1 }, b: { x: 1, y: { s: 1, t: { j: 1 } }, z: 3 } }), true)
  });
  it("returns false if two objects containing nested objects are not equal", () => {
    assert.deepEqual(eqObjects({ a: { y: { s: 1, t: 2 }, z: 0 }, b: { x: 1, y: { s: 1, t: { j: 1 } }, z: 3 } }, { a: { y: { s: 1, t: 2 }, z: 1 }, b: { x: 1, y: { s: 1, t: { j: 1 } }, z: 3 } }), false)
  });
});