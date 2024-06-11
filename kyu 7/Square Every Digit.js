function squareDigits(num) {
  return +[...String(num)].map((n) => +n * +n).join``;
}
