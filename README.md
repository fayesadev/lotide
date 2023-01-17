
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fayesadev/lotide`

**Require it:**

`const _ = require('@fayesadev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [assertEqual](/assertEqual.js): Assert if two values are equal
* [head](/head.js): Returns the first item in an array
* [tail](/tail.js): Returns an array with the first item removed
* [eqArrays](/eqArrays.js): Checks if two arrays are equal
* [assertArraysEqual](/assertArraysEqual.js): Asserts if two arrays are equal
* [without](/without.js): Returns a new array without the items passed without modifying the original array
* [middle](/middle.js): Returns the middle elements of an array
* [countOnly](/countOnly.js): Counts how many times an item appears in an array
* [countLetters](/countLetters.js): Counts how many times each letter appears in a string
* [letterPositions](/letterPositions.js): Returns the index of each letter in a string
* [findKeybyValue](/findKeyByValue.js): Returns the key of a passed value
* [eqObjects](/eqObjects.js): Checks if two objects are equal
* [assertObjectsEqual](/assertObjectsEqual.js): Asserts if two objects are equal
* [map](/map.js): Maps an array
* [takeUntil](/takeUntil.js):Returns a new array of items in a given array until the given condition is satisfied
* [findKey](/findKey.js): Finds key in an object based on a given condition
* [Test Directory](/test/)
  * [assertArraysEqualTest](/test/assertArraysEqualTest.js)
  * [assertEqualTest](/test/assertEqualTest.js)
  * [eqArraysTest](/test/eqArraysTest.js)
  * [headTest](/test/headTest.js)
  * [middleTest](/test/middleTest.js)
  * [tailTest](/test/tailTest.js)