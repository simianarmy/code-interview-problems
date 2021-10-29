/**
 * Implement algorith to determine if string a has all unique characters.
 * Do not use additional data structures.
 *
 * Solution:
 * Time: 0(N log N) to sort the string
 **/
module.exports = (input) => {
  //console.log({input});
  let str = input[0];

  const sorted = str.split('').sort();
  let lastChar = str[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === lastChar) return "False";
    lastChar = sorted[i];
  }
  return "True";
};
