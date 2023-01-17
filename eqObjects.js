const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(longSleeveShirtObject, shirtObject), false);

const multiColorShirtObject = { colors: ["red", "green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["blue", "green"] };
console.log("eqObjects,", eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
