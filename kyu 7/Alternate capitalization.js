function capitalize(s) {
  const arr = s.split(``);
  const result = [];
  let str = [];
  for (let i = 0; i < arr.length; i++)
    if (i % 2 == 0) str.push(arr[i].toUpperCase());
    else str.push(arr[i].toLowerCase());
  result.push(str.join``);

  str = [];

  for (let i = 0; i < arr.length; i++)
    if (i % 2 == 1) str.push(arr[i].toUpperCase());
    else str.push(arr[i].toLowerCase());
  result.push(str.join``);

  return result;
}
