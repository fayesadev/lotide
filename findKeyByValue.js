const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  for (let property in obj) {
    if (obj[property] === value) {
    return property;
    }
  }
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestFoodByCuisine = { 
  Japanese: "Ramen",
  Indian: "Butter Chicken",
  Korean:  "Cheese Buldak"
};

assertEqual(findKeyByValue(bestFoodByCuisine, "Ramen"), "Japanese");
assertEqual(findKeyByValue(bestFoodByCuisine, "Cheese Buldak"), "Korean");