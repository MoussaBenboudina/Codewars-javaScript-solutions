function magicSquare(arr) {
  if (
    arr == null ||
    arr.length == 0 ||
    arr.includes(null) ||
    arr.includes(undefined)
  )
    return false;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[0][i];
  }

  function isEquls(arr) {
    return arr.reduce((arr, current) => arr + current, 0) === sum;
  }

  for (let i = 0; i < arr.length; i++) if (!isEquls(arr[i])) return false;

  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s = 0;
    for (let j = 0; j < arr[i].length; j++) s += arr[j][i];
    if (s !== sum) return false;
  }
  s = 0;
  for (let i = 0; i < arr.length; i++) s += arr[i][i];
  if (s !== sum) return false;

  s = 0;
  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) s += arr[i][j];
  if (s !== sum) return false;

  return true;
}
