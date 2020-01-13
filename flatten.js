const flatten = arrs => {
  let output = [];
  for (let value of arrs) {
    if (!Array.isArray(value)) {
      output.push(value);
    } else {
      for (let i = 0; i < value.length; i++) {
        output.push(value[i]);
      }
    }
  }
  return output;
};

module.exports = flatten;
