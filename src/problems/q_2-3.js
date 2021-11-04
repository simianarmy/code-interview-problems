/**
 * Delete middle node from linked list
 * Only given access to the node to delete
 * Node is not first or last element
 *
 * Solution:
 * Time: O(1)
 * Space: O(1)
 **/
const { Node, printAll } = require('../lib/LinkedList');

module.exports = (input) => {
  let middleVal = input[0]; // target node value
  let head = new Node(input[1]);

  for (let i = 2; i < input.length; i++) {
    head.append(input[i]);
  }

  // simulate passing in of a node reference
  let n = head;
  while (n.d != middleVal) {
    n = n.next;
  }
  console.log({n});

  // algorithm here
  if (n.next) {
    // copy right neighbor to ourself
    n.d = n.next.d;
    n.next = n.next.next;
  }

  printAll(head);
}
