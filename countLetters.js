const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const countLetters = sentence => {
  let results = {};
  sentence.replace(/\s/g, '').toLowerCase().split('').map(value => results[value] ?
    results[value]++ : results[value] = 1);
  return results;
};

console.log(countLetters('Hello there'));