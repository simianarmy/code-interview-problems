/**
 * Check if linked list is a palindrom
 * 7 -> 1 -> 1 -> 7 => T
 *
 * Solution:
 * Time:
 * Space
 **/
const { Node, printAll } = require('../lib/LinkedList');

module.exports = (input) => {
  let list = new Node(input[0]);

  for (let i = 1; i < input.length; i++) {
    list.append(input[i]);
  }
  printAll(list);

  function reverseList(l) {
    if (!l.next) {
      return new Node(l.d);
    }
    let rev = reverseList(l.next);
    rev.append(l.d);

    return rev;
  }

  // reverse the list
  let reversed = reverseList(list);
  printAll(reversed);

  let n = list, rev = reversed;
  let equal = true;

  while (n) {
    if (n.d != rev.d) {
      equal = false;
      break;
    }
    n = n.next;
    rev = rev.next;
  }
  return equal;
}
