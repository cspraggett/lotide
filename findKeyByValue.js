const findKeyByValue = (obj, value) => {
  for (let keyPair of Object.entries(obj)) {
    if (keyPair[1] === value) return keyPair[0];
  }
  return undefined;
};

module.exports = findKeyByValue;
