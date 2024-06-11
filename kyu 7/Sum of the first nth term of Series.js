function SeriesSum(n) {
  let result = 0,
    x = -2;
  for (let i = 1; i <= n; i++) result += 1 / (x += 3);

  return String(result.toFixed(2));
}
