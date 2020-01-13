const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (middleIndex < 1) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;

// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual(middle([1])); // => [2]
