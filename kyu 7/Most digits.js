function findLongest(arr) {
  const maxLength = Math.max(...arr.map((n) => String(n)).map((n) => n.length));
  for (num of arr) if (String(num).length === maxLength) return num;
}
