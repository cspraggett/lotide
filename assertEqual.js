const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("chris", "chris");
assertEqual(1.333, 1.33);
