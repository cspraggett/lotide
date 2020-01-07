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

const middle = arr => {
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 0) {
    let mid = Math.floor(arr.length / 2);
    return [mid, mid + 1];
  }
  return [Math.floor(arr.length / 2) + 1];
};

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2]), []);