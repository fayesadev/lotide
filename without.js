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

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);