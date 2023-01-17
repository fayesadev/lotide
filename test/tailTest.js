const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns the array with the first element removed", () => { 
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("checks if the the function is not modifying the original array", () => { 
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns [] with an array with only one element", () => { 
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] with an empty array", () => { 
    assert.deepEqual(tail([]), []);
  });

});