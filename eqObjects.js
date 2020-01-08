const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const eqObjects = (ob1, ob2) => {
  if (Object.keys(ob1).length !== Object.keys(ob2).length) return false;
  for (const keys of Object.keys(ob1)) {
    if (ob1[keys] !== ob2[keys]) return false;
  }
  return true;
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab, abc), false); // => false
