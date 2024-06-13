function highestRank(arr) {
  let setArr = [...new Set(arr)],
    arrLength = [],
    max;
  for (let i = 0; i < setArr.length; i++)
    arrLength[i] = arr.filter((l) => l === setArr[i]).length;
  max = Math.max(...arrLength);
  return setArr[arrLength.findIndex((l) => l === max)];
}
