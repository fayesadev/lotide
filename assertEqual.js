const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected} ⛔️⛔️⛔️`);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual("Hello", "hello");
assertEqual(40, 40);
assertEqual(2, '2');
assertEqual(10, 'ten');