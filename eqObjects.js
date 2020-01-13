const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
