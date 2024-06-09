var solution = function (firstArray, secondArray) {
  const result = [];

  for (let i = 0; i < firstArray.length; i++)
    result.push(Math.pow(firstArray[i] - secondArray[i], 2));

  return result.reduce((acc, cur) => acc + cur, 0) / firstArray.length;
};
