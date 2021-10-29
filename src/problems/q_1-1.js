/**
 * Implement algorith to determine if string a has all unique characters
 *
 * Solution:
 * Time: 0(n) where n = length of input
 **/
module.exports = (input) => {
  //console.log({input});
  let str = input[0];

  let map = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (map[c]) return "False";
    map[c] = 1;
  }
  return "True";
};
