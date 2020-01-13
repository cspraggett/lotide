const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true when passed [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('returns false when passed [1,2,3] [1,2,"3"]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, "3"]));
  });
  it("returns true when passed [[2, 3], [4]], [[2, 3], [4]]", () => {
    const a = [[2, 3], [4]];
    const b = [[2, 3], [4]];
    assert.isTrue(eqArrays(a, b));
  });
  it("returns false when passed [[2, 3], [4]] and [[2, 3],[4, 5]]", () => {
    const a = [[2, 3], [4]];
    const b = [
      [2, 3],
      [4, 5]
    ];
    assert.isFalse(eqArrays(a, b));
  });
});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
// assertEqual(eqArrays(["a", "b", "c"], ["A", "B", "C"]), false);
// assertEqual(eqArrays(["x"], ["x"]), true);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5]
//     ]
//   ),
//   false
// ); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
