const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected} ⛔️⛔️⛔️`);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
}

const countLetters = function(sentence) {
  let letterCount = {};
  sentence = sentence.replace(/ /g, '');

  for (let letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

// const countLetters = function(str) {
//   for (const letter of str) {
//     if (letter === ' ') {
//       continue;
//     }
//     if (!result[letter]) {
//       result[letter] = 0;
//     }
//     result[letter]++; **happy path
//   }
// };

console.log(countLetters('lighthouse in the house'));

