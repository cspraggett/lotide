const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it('"drama" when passed "The Wire"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined when passed \"That 70's Show", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(
      findKeyByValue(bestTVShowsByGenre, "That 70's Show"),
      undefined
    );
  });
});
