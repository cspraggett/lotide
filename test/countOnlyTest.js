const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns {Jason: 1} when passed Jason", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { Jason: true }), { Jason: 1 });
  });
  it("returns {} when passed {Karima: true}", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { Karima: true }), {});
  });
  it("returns {Fang: 2} when passed {Fang: true}", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { Fang: true }), { Fang: 2 });
  });
});

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
