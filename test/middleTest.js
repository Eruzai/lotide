const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// test code
assertArraysEqual(middle(["a"]), []);
assertArraysEqual(middle(["a", "b"]), []);
assertArraysEqual(middle(["a", "b", "c"]), ["b"]);
assertArraysEqual(middle(["a", "b", "c", "d", "e"]), ["c"]);
assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f"]), ["c", "d"]);