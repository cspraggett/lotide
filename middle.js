const middle = arr => {
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 0) {
    let mid = Math.floor(arr.length / 2);
    return [mid, mid + 1];
  }
  return [Math.floor(arr.length / 2) + 1];
};

module.exports = middle;
