const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = (ob1, ob2) => {
  if (Object.keys(ob1).length !== Object.keys(ob2).length) return false;
  for (const keys of Object.keys(ob1)) {
    if (Array.isArray(ob1[keys])) {
      if (!Array.isArray(ob2[keys])) return false;
      if (!(eqArrays(ob1[keys], ob2[keys]))) {
        return false;
      }
    } else if (ob1[keys] !== ob2[keys]) return false;
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅ ✅ ✅ ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑 🛑 🛑 ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({a:1,b:2}, {a:1,b:2});
assertObjectsEqual({a:1,b:2}, {a:1,b:3});
assertObjectsEqual({a:1,b: [1,2,3]}, {a:1,b: [1,2,3]});
assertObjectsEqual({a:1,b: [1,2,3]}, {a:1,b: [1,2,4]});
assertObjectsEqual({a:1,b: [1,2,3]}, {a:1,b: [1,2,3,4]});
assertObjectsEqual({a:1,b: [1,2,3]}, {a:1,b: 3});
