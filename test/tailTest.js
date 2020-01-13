const assert = require("chai").assert;
const tail = require("../tail");
//const assertEqual = require("../assertEqual");

describe("#tail", () => {
  it("returns [] for []", () => {
    let empty = [];
    assert.deepEqual(tail(empty), []);
  });
  it('returns 3 for ["yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
