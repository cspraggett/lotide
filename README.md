# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @cspraggett/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters(sentence)`: counts the letters in a sentence
- `countOnly(allItems, itemsToCount)`: counts the frequency items in allItems occours
- `findKeyByValue(obj, value)`: returns the key in the object when passed it's value
- `findKey(data, callback)`: returns the first key that callback function returns true to
- `flatten(arrs)` : creates a 1d array from nested arrays
- `head(arr)` : returns the 0th element from arr
- `letterPositions(sentence)` : returns an object with the index position of each letter
- `map(array, callback)` : returns an array that transforms each element by the callback
- `middle(arr)` : returns an array with the middle position(s) of arr
- `tail(arr)` : returns an arr starting from index 1
- `takeUntil(arr, callback)` : returns arr until callback returns true
- `without(arr, toRemove)` : removes toRemove from arr
