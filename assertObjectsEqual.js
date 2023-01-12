const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let property in object1) {  
    if (typeof object1[property] === "object") {
      return eqArrays(object1[property], object2[property]);
    } 
    else if (object1[property] !== object2[property]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.assert(actual === expected, `${inspect(actual)} !== ${inspect(expected)}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), false);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(eqObjects(longSleeveShirtObject, shirtObject), false);


const multiColorShirtObject = { colors: ["red", "green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["blue", "green"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => false
assertObjectsEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false);
