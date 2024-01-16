# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eruzai/lotide`

**Require it:**

`const _ = require('@eruzai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the head (first element) of an array
* `tail(...)`: returns the tail (every element following the head) of an array
* `middle(...)`: returns the middle-most element(s) of an array
* `assertArraysEqual(...)`: takes two arrays, compares them for equality, and outputs an appropriate message to the console
* `assertEqual(...)`: takes two values, compares them for equality, and outputs an appropriate message to the console
* `assertObjectsEqual(...)`: returns true if both objects have identical keys with identical values
* `countLetters(...)`: return a count of each letter in a given string
* `countOnly(...)`: returns an object with counts of all specified items within source object given by array.
* `eqArrays(...)`: takes two arrays and returns true or false, based on a perfect match
* `eqObjects(...)`: returns true if both objects have identical keys with identical values
* `findKey(...)`: searches an objects keys and performs callback function on each, returns first key that resolves callback
* `findKeyByValue(...)`: scans an object to return the first key containing the given value
* `flatten(...)`: takes an array or nested arrays of elements, and returns a "flattened" version of the array
* `letterPositions(...)`: accepts a string and returns an object containing each letter and all of it's index locations
* `map(...)`: creates a new array after resolving callback function on each element
* `takeUntil(...)`: creates a new array with elements up to the callback resolution
* `without(...)`: return a subset of a given array, removing unwanted elements