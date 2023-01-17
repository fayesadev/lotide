const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!source.includes(itemsToRemove[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports =  without;

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);