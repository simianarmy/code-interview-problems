/**
 * Detect loop in a linked list
 * Return node at begin. of loop if it exists
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
  // create loop at the end
  let tail = list;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = list.next.next;
  console.log('loop at ', tail.next);

  let refMap = {};
  let n = list;

  while (n.next) {
    if (refMap[n.next]) {
      console.log('Loop at ', n.next);
      return;
    }
    refMap[n] = 1;
    n = n.next;
  }

  return false;
}
