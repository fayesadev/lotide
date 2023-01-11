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

const middle = function(array) {
  let middleNumber = [];

  if (array.length <= 2) {
    return middleNumber;
  }
  if (array.length % 2 === 0) {
    let firstIndex = array.length/2 - 1;
    let secondIndex = array.length/2;
    middleNumber.push(array[firstIndex]);
    middleNumber.push(array[secondIndex]);
  } 
  else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length/2);
    middleNumber.push(array[middleIndex]);
  } 
  return middleNumber;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]


assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]