function climb(n) {
  let result = [],
    x = 1;
  while (n !== 0) {
    result.unshift(n);
    n = Math.floor(n / 2);
  }
  return result;
}
