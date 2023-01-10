const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected} ⛔️⛔️⛔️`);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

