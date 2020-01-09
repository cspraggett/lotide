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

const takeUntil = (array, callback) => {
  let results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else break;
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

assertArraysEqual(
  takeUntil([1, 3, 5, 6], x => x % 2 === 0),
  [1, 3, 5]
);

assertArraysEqual(
  takeUntil(["How", "are", "you", "today"], x => x.length > 3),
  ["How", "are", "you"]
);
