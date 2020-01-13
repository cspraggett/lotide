const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item]++ : (results[item] = 1);
      console.log(item);
    }
  }

  return results;
};

module.exports = countOnly;
