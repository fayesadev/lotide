const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected} ⛔️⛔️⛔️`);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
}

//take 2 arrays as passed arguments to the function
const eqArrays = function(array1, array2) {
//compare only element at respective index for both arrays ie. array1[1] === array2[1], etc.
  for (let i =0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
//return true if all elements pass, false if even one element is different
  return true;
}

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])
eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3])

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
