
/**
 * URLify a string.  Replace all spaces in a string with '%020', in place.
 * Assume you have space at end of the string for the extra characters.
 *
 * ex: 'Mr John Smith    '
 * Length: 17
 * True length: 13
 * Output :'Mr%20John%20Smith'
 *
 * Solution:
 * Time: O(N) N = length of array
 * Space: O(1) operates on input array
 **/
module.exports = (input) => {
  // Convert string to character array for the problem
  let str = input[0].split('');
  let trueLen = input[1];
  console.log({str, trueLen});

  const urlSpace = '%020';
  const numSpaces = Math.floor((str.length - trueLen) / 2); // or count from 0 - trueLen
  console.log({numSpaces, len: str.length});

  if (numSpaces === 0) return str;

  // set write index to end of space padding
  let newIndex = trueLen - 1 + numSpaces * 2;
  console.log({newIndex});

  // step backwards from end of real string
  for (let i = trueLen - 1; i >= 0; i--) {
    // write uri space in space indices
    if (str[i] === ' ') {
      str[newIndex] = '0';
      str[newIndex-1] = '2';
      str[newIndex-2] = '%';
      newIndex -= 3;
    } else {
      // write character at rightward position newIndex and decrement its index
      str[newIndex] = str[i];
      newIndex -= 1;
    }
  }

  return str;
};
