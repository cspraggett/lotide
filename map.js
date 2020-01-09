const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log(`✅ ✅ ✅ ${arr1} === ${arr2}`)
    : console.log(`🛑 🛑 🛑 ${arr1} !== ${arr2}`);
};

const words = ["ground", "control", "to", "major", "tom"];

let map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(
  map([1, 2, 3, 4], value => value * 10),
  [10, 20, 30, 40]
);

assertArraysEqual(
  map(["a", "b", "c"], value => value.toUpperCase()),
  ["A", "B", "C"]
);

assertArraysEqual(
  map(
    ["tom", "dick", "harry"],
    value => value.substring(0, 1).toUpperCase() + value.substring(1)
  ),
  ["Tom", "Dick", "Harry"]
);
