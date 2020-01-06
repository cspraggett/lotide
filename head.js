const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 ssertion Failed: ${actual} !== ${expected}`);

const head = arr => arr[0];

assertEqual(head([0, 1]), 0);
assertEqual(head([0, 1]), 1);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "World"]), "Hello");
