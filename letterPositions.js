const counts = {};
const letterPositions = function(text) {
  for (i = 0; i < text.length; i++) {
    let current = text[i];
    if (current !== " ") {
      if (counts[current]) {
        counts[current].push(i);
      } else {
        counts[current] = [i];
      }
    }
  }
  console.log(counts);
};

letterPositions("lighthouse in the house");
