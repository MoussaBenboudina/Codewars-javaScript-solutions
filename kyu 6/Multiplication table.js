multiplicationTable = function (size) {
  let result = [],
    x,
    s = [];

  for (let i = 1; i <= size; i++) s.push(i);
  result.push(s);
  for (let i = 2; i <= size; i++) {
    x = s.map((e) => e * i);
    result.push(x);
  }
  return result;
};
