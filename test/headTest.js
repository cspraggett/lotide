const assert = require("chai").assert;
const head = require("../head");
const assertEqual = require("../assertEqual");

describe("#head", () => {
  it("returns 1 for [1, 2, 3", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns 0 for [0,1]", () => {
    assert.strictEqual(head([0, 1]), 0);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 'hello' for ['Hello', 'World", () => {
    assert.strictEqual(head(["Hello", "World"]), "Hello");
  });
});
