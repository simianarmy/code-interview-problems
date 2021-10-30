
/**
 * is1Away
 * Can you edit string one or less times to match another
 * Edit: add, edit, replace
 * Ex: pale, ple => true
 * pales, pale => true
 * pale, bale => true
 * pale, bake => true
 *
 *
 * Solution:
 * Time: O(N)
 * Space:
 **/
module.exports = (input) => {
  const [a, b] = input;

  if (a.length === 0 || b.length === 0) return false;
  if (Math.abs(a.length - b.length) > 1) return false;

  if (a.length > b.length) {
    return canRemoveOne(a, b);
  } else if (a.length < b.length) {
    return canRemoveOne(b, a);
  } else {
    // lengths are equal
    // make a dictionary of b characters
    const bchars = b.split('').reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      return acc;
    }, {});

    // check how many missing characters are in a
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      let c = a[i];

      if (!bchars[c]) {
        diff += 1;
      } else {
        bchars[c] -= 1;
      }
    };
    console.log({bchars, diff});

    return diff <= 1;
  }

  function canRemoveOne(str, cmp) {
    for (let i = 0; i < str.length; i++) {
      if (a.slice(0, i) + a.slice(i + 1) === cmp) return true;
    }
    return false;
  }
};
