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

const without = (arr, toRemove) => {
  console.log('before:', arr);
  let output = [];
  for (let value of arr) {
    let match = false;
    for (let j = 0; j < toRemove.length; j++) {
      if (value === toRemove[j]) {
        match = true;
        break;
      }
    }
    if (!match) {
      output.push(value);
    }
  }
  console.log('after', arr);
  return output;
};

const words = ['hello', 'world', 'lighthouse'];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(['1','2','3'], [1,2,'3']), ['1','2']);