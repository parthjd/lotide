const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectName, key) {
  let arr1 = Object.keys(objectName);
  for (let text of arr1) {
    if (objectName[text] === key) {
      return text;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
