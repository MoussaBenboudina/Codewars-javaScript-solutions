// DESCRIPTION:
// In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

// Disallowed functionality:

// Strings
// Numbers
// Regular Expressions
// Functions named "Hello", "World", "HelloWorld" or anything similar.
// Object keys named "Hello", "World", "HelloWorld" or anything similar.
// Without using the above, output the string "Hello World!" to prove that there is always a way.

// PUZZLESALGORITHMS

var helloWorld = function () {
  const one = Number(true);
  const two = one + one;
  const three = two + one;
  const four = String(null).length;
  const nine = String(undefined).length;

  const seventyTwo = nine * nine - nine;
  const H = String.fromCharCode(seventyTwo);

  const sixtyNine = seventyTwo - three;
  const e = String.fromCharCode(sixtyNine).toLocaleLowerCase();

  const l = [...String(null)][two];

  const seventyآine = nine * nine - two;
  const o = String.fromCharCode(seventyآine).toLocaleLowerCase();

  const eightySeven = nine * nine + nine - three;
  const W = String.fromCharCode(eightySeven);

  const eightyTwo = nine * nine + one;
  const r = String.fromCharCode(eightyTwo).toLocaleLowerCase();

  const sixtyEight = nine * nine - nine - four;
  const d = String.fromCharCode(sixtyEight).toLocaleLowerCase();

  const space = String.fromCharCode((nine + nine) * two - four);

  const EM = String.fromCharCode((nine + nine) * two - three);

  console.log(space);

  const result = H + e + l + l + o + space + W + o + r + l + d + EM;

  return result;
};
