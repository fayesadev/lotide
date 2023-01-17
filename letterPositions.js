const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results; 
};

module.exports = letterPositions;

//expected output {h: [0], e: [1], l: [2, 3], o: [4]}
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);