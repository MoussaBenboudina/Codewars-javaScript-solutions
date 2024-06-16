function encode(string) {
  return string.split``.map((c) => {
    return c == "a"
      ? "1"
      : c == "e"
      ? "2"
      : c == "i"
      ? "3"
      : c == "o"
      ? "4"
      : c == "u"
      ? "5"
      : c;
  }).join``;
}

function decode(string) {
  return string.split``.map((c) => {
    return c == "1"
      ? "a"
      : c == "2"
      ? "e"
      : c == "3"
      ? "i"
      : c == "4"
      ? "o"
      : c == "5"
      ? "u"
      : c;
  }).join``;
}
