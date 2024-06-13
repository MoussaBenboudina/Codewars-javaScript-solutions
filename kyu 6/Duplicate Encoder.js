function duplicateEncode(word) {
  const isDuplicate = (char) => {
    return (
      [...word.toLowerCase()].filter((c) => c === char.toLowerCase()).length > 1
    );
  };
  return [...word.toLowerCase()].map((e) => (isDuplicate(e) ? ")" : "("))
    .join``;
}
