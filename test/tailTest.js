const tail = require('../tail');
const assertEqual = require('../assertEqual');

//returns false because assertEqual cannot compare arrays
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

//assertEqual can confirm if the function is not modifying the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//case test: an array with only one element yields an empty array for tail()
assertEqual(tail([1]).length, 0);

//case test: an empty array should yield an empty array for tail()
assertEqual(tail([]).length, 0);