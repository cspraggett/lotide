const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const findKeyByValue = (obj, value) => {
  for (let keyPair of Object.entries(obj)) {
    if (keyPair[1] === value) return keyPair[0];
  }
  return undefined;
};

console.log(findKeyByValue({a:1,b:2}, 3));