const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 ssertion Failed: ${actual} !== ${expected}`);

const tail = arr => arr.slice(1);

const empty = [];
assertEqual(tail(empty).length, 0);

// const words = ["yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// console.log([2, 3].toString());
// console.log(tail([1, 2, 3]).toString());
// assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
