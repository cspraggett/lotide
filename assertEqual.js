const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

module.exports = assertEqual;
