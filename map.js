const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

//Testing our map function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i =0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  console.assert(eqArrays(array1, array2), `${array1} !== ${array2}`);
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } 
};

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

//Test Case 1
const results2 = map(words, word => word + 's');
assertArraysEqual(results2, ["grounds", "controls", "tos", "majors", "toms"]);
//Test Case 2
const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);
//Test Case 3
const results4 = map(words, word => word.toUpperCase());
assertArraysEqual(results4, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);