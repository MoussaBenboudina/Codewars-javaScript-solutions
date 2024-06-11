function twoArePositive(a, b, c) {
  return [a, b, c].filter((n) => n > 0).length == 2;
}
