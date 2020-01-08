const eqArrays = function (arr1, arr2) {
  let value = "test";
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        value = true;
      }
    }
  }
  return value;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const without = function(array1, array2){
  for ( let i of array1) {
    console.log(i);
    if (i === array2) {
      
    }
  }
}

console.log(without([1, 2, 3], [1]));