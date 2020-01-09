const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const findKey = (data, callback) => {
  for (let key of Object.keys(data)) {
    if (callback(data[key])) {
      return key;
    }
  }
  return undefined;
};

let results1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 2
); // => "noma"

console.log(results1);

assertEqual(
  findKey({ x: 2, y: 3, z: 10 }, x => x > 5),
  "z"
);
assertEqual(
  findKey(
    { bob: "pizza", john: "hot dogs", maggie: "fish" },
    x => x === "fish"
  ),
  "maggie"
);
