const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.assert(actual === expected, `${inspect(actual)} !== ${inspect(expected)}`);
  if (actual === expected) {
    console.log(`Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

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
