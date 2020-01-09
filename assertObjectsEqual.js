const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length === arr2.length) {
    for (let text of arr1) {
      if (Array.isArray(object1[text]) && Array.isArray(object2[text])) {
        if (!eqArrays(object1[text], object2[text])) {
          return false;
        }
      } else if (object1[text] !== object2[text]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (actual === expected) {
    console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
  }
};
