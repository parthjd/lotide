const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡😡 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(text) {
  const counts = {};
  for (let item of text) {
    if (item !== " ") {
      if (counts[item]) {
        counts[item] += 1;
      } else {
        counts[item] = 1;
      }
    }
  }
  return JSON.stringify(counts, null, 2);
};
countLetters("lighthouse in the house");
