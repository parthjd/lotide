const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const eqArrays = function(arr1, arr2) {
  let value = "test";
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        value = true;
      }
    }
  }
  return value;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
  }
};

map(assertEqual(eqArrays("ground", "ground", true)));
