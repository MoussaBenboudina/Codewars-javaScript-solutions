function squareOrSquareRoot(array) {
  return array.map((n) => {
    if (Number.isInteger(Math.sqrt(n))) return Math.sqrt(n);
    else return Math.pow(n, 2);
  });
}
