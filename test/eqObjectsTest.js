const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it('returns true when passed ab{a: "1", b: "2"} ba{b: "2", a: "1"}', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });
  it('returns false when passed ab = { a: "1", b: "2" } and abc = { a: "1", b: "2", c: "3" }', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });
  it("returns true when passed { a: { b: 2, c: { x: 7 } } }, { a: { b: 2, c: { x: 7 } } }", () => {
    const a = { a: { b: 2, c: { x: 7 } } };
    const b = { a: { b: 2, c: { x: 7 } } };
    assert.isTrue(eqObjects(a, b));
  });
});

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2,", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(
//   eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
//   false
// ); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
// assertEqual(
//   eqObjects({ a: { b: 2, c: { x: 7 } } }, { a: { b: 2, c: { x: 7 } } }),
//   true
// );
