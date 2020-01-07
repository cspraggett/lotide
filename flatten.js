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

const flatten = arrs => {
  let output = [];
  for (let value of arrs) {
    if (!Array.isArray(value)) {
      output.push(value);
    } else {
      for (let i = 0; i < value.length; i++) {
        output.push(value[i]);
      }
    }
  }
  return output;
};

console.log(flatten([1,2,[3,4],5,[6, 7]]));