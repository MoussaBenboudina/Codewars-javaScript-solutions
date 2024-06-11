function maskify(cc) {
  return [...cc].map((e, index) => {
    return index < cc.length - 4 ? "#" : e;
  }).join``;
}
