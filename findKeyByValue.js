const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ ✅ ✅ consoleAssertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);

const findKeyByValue = (obj, value) => {
  for (let keyPair of Object.entries(obj)) {
    if (keyPair[1] === value) return keyPair[0];
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const programmingLanguages = {
  c: 'low level',
  javaScript: 'high level',
  golang: 'low level',
  python: 'high level',
  html: 'not a programming language'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70's Show"), undefined);
assertEqual(findKeyByValue(programmingLanguages, 'not a programming language'), 'html');
assertEqual(findKeyByValue(programmingLanguages, 'high level'), 'javaScript');
assertEqual(findKeyByValue(programmingLanguages, 'low level'), 'c');