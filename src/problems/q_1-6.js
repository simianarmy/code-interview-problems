
/**
 * Compress string
 * Ex: aabccccccaaa => a2b1c5a3
 *
 * Solution:
 * Time: (Java answer: O(N + k^2) where k = # char seqs because string concatenation is N^2)
 * (JS answer: O(N))
 * Optimization: count size of compressed string first and return original str if larger
 * Space:
 **/
module.exports = (input) => {
  const str = input[0];

  if (str.length <= 1) return str;

  let compressed = '';
  let currChar = str[0];
  let currCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === currChar) {
      currCount += 1;
    } else {
        // add last char + count to list
      compressed += currChar + currCount;

      currCount = 1;
      currChar = str[i];
    }
  }
  compressed += currChar + currCount;
  console.log({compressed});
  let res = compressed;

  return res.length < str.length ? res : str;
};
