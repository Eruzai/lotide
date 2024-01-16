// without function will return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let wantedItems = [];
  
  source.forEach(item => {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (item === itemsToRemove[i]) {
        return;
      }

      if (i === itemsToRemove.length - 1) {
        wantedItems.push(item);
      }
    }
  });
  return wantedItems;
};

module.exports = without;