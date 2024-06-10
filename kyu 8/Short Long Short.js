function solution(a, b) {
  return String(a).length > String(b).length ? `${b}${a}${b}` : `${a}${b}${a}`;
}
