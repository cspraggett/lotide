const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

let isObject = ob => typeof ob === "object" && !Array.isArray(ob);

const eqObjects = (ob1, ob2) => {
  if (Object.keys(ob1).length !== Object.keys(ob2).length) return false;
  for (const keys of Object.keys(ob1)) {
    if (Array.isArray(ob1[keys])) {
      if (!Array.isArray(ob2[keys])) return false;
      if (!eqArrays(ob1[keys], ob2[keys])) {
        return false;
      }
    } else if (isObject(ob1[keys])) {
      if (isObject(ob2[keys])) {
        if (!eqObjects(ob1[keys], ob2[keys])) {
          return false;
        } else continue;
      } else return false;
    } else if (ob1[keys] !== ob2[keys]) return false;
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2,", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(
  eqObjects({ a: { b: 2, c: { x: 7 } } }, { a: { b: 2, c: { x: 7 } } }),
  true
);
