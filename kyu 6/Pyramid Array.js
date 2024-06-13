function pyramid(n) {
  let x = 1,
    result = [],
    s = [];
  for (let i = 0; i < n; i++) {
    s = [];
    for (let j = 0; j < x; j++) s.push(1);
    result.push(s);
    x++;
  }
  return result;
}
