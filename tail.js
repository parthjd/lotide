const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
    }
  };
const tail = function(array) {
      return array.slice(1);
  };

const result = tail(["Hello", "Lighthouse", "Labs"]);
    assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!