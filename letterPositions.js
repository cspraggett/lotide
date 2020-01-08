const letterPositions = sentence => {
  const results = {};
  sentence.toLowerCase().replace(/\s/g, '').split('').map((value, i) =>
    results[value] ? results[value].push(i) : results[value] = [i]
  );
  return results;
};

console.log(letterPositions('Hello'));