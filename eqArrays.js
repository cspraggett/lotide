const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (Array.isArray(arr2[i])) {
        if (!eqArrays(arr1[i], arr2[i])) return false;
      } else return false;
    } else if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// assertEqual(eqArrays([1,2,3], [1,2,3]), true);
// assertEqual(eqArrays([1,2,3],[1,2,'3']),false);
// assertEqual(eqArrays(['a','b','c'],['A','B','C']),false);
// assertEqual(eqArrays(['x'],['x']),true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5]
    ]
  ),
  false
); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
