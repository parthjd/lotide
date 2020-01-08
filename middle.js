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

const middle = function (array) {
  let middleIndex = Math.floor(array.length / 2);
  if (middleIndex < 1) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
}

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1])) // => [2]
