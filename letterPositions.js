const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log(`✅ ✅ ✅ ${arr1} === ${arr2}`) :
    console.log(`🛑 🛑 🛑 ${arr1} !== ${arr2}`);
};

const letterPositions = sentence => {
  const results = {};
  sentence.toLowerCase().replace(/\s/g, '').split('').map((value, i) =>
    results[value] ? results[value].push(i) : results[value] = [i]
  );
  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').l, [2,3]);
assertArraysEqual(letterPositions('hello').o, [4]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3,5,13,15]);