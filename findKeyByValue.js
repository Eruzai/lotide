// FUNCTION SCANS AN OBJECT TO RETURN THE FIRST KEY CONTAINING THE GIVEN VALUE
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;