
/**
 * Given 2 strings, check if one is a permutation of the other
 *
 * Solution: Count character frequency in one and decrease with the other.
 * Time: O(A)
 * Space: O(A)
 **/
module.exports = (input) => {
  //console.log({input});
  let a = input[0], b = input[1];

  if (a.length !== b.length) return "False";
  if (!a.length || !b.length) return "False";

  // count character frequency in b
  let bchars = {};
  for (let i = 0; i < b.length; i++) {
    const bc = b[i];
    if (!bchars[bc]) bchars[bc] = 0;
    bchars[bc] += 1;
  }
  // iterate through a
  for (let i = 0; i < a.length; i++) {
    let ac = a[i];
    if (!bchars[ac] || bchars[ac] <= 0) return "False";
    bchars[ac] -= 1;
  }

  return "True";
};
