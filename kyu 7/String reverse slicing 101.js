function reverseSlice(str) {
  const newStr = str.split``.reverse().join``;
  const result = [];

  for (let i = 0; i < newStr.length; i++) {
    result.push(newStr.slice(i));
  }

  return result;
}
