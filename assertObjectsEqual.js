const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ The objects ${inspect(object1)} and ${inspect(object2)} are equal!`);
  } else {
    console.log(`❌❌❌ The objects ${inspect(object1)} and ${inspect(object2)} are not equal!`);
  }
};

module.exports = assertObjectsEqual;