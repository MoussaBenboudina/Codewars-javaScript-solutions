function isVow(a) {
  const cracters = ["a", "e", "i", "o", "u"];
  return a.map((n) =>
    cracters.includes(String.fromCharCode(n)) ? String.fromCharCode(n) : n
  );
}
