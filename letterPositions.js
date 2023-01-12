const eqArrays = function(array1, array2) {
  for (let i =0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  console.assert(eqArrays(array1, array2), `${array1} !== ${array2}`);
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } 
}

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

//expected output {h: [0], e: [1], l: [2, 3], o: [4]}
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);