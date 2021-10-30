
/**
 * Is any permutation of a string a palindrome
 *
 * ex: Tact Coa
 * Output: True ('taco cat', 'atco cta', ...)
 *
 * Solution:
 * Time: O(N)
 * Space:
 **/
module.exports = (input) => {
  const isPalyndrome = str => {
    if (str.length <= 2) return true;

    // special case - all matching characters
    // otherwise should have equal # chars w opt. 1
    // bbb, bab
    let counts = {};
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      if (!counts[c]) counts[c] = 1;
      else counts[c] -= 1;
    }
    // Count number of non-paired (odd) characters left.  There should not be more than 1
    let sum = Object.values(counts).reduce((acc, curr) => acc + curr, 0);

    console.log({counts, sum});
    if (sum <= 1) return true;
    return sum === str.length;
  }

  let permCache = {};
  let found = false;

  const str = input[0].toLowerCase()
    .replace(/\s+/g, '');

  return isPalyndrome(str);
};
