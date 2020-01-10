const flatten = function(arr) {
  let arr1 = [];
  for (i of arr) {
    if (Array.isArray(i)) {
      arr1 = arr1.concat(i);
    } else {
      arr1.push(i);
    }
  }
  return arr1;
};

const flattenResult = flatten([1, 2, [3, 4], 5, [6]]);

console.log(flattenResult);

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        return true;
      }
    }
  }
  return false;
};
const exp = [1, 2, 3, 4, 5, 6];

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual(flattenResult, exp);
