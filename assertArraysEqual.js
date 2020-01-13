const eqArrays = require("./eqArrays");

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log(`✅ ✅ ✅ ${arr1} === ${arr2}`)
    : console.log(`🛑 🛑 🛑 ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
