// searches an objects keys and performs callback function on each, returns first key that resolves callback
const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;