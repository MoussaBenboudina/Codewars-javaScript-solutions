function removeUrlAnchor(url) {
  url = [...url];
  let result = [],
    x = true;
  for (let i = 0; i < url.length && x; i++) {
    if (url[i] === "#") {
      x = false;
      break;
    } else {
      result.push(url[i]);
    }
  }

  return result.join``;
}
