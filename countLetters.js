const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

countLetters('lighthouse in the house');

