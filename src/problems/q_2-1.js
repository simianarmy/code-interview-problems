/**
 * Remove duplicates from linked list
 *
 * Solution:
 * Time: O(N)
 *
 **/
const Node = require('../lib/LinkedList');

const solution = (input ) => {
  let head = new Node(input[0]);

  for (let i = 1; i < input.length; i++) {
    head.append(input[i]);
  }

  function removeDuplicates() {
    let prev = head;
    let n = head.next;
    let cache = {};

    cache[prev.d] = 1;

    while (n) {
      if (cache[n.d]) { // dupe!
        prev.next = n.next;
      } else {
        cache[n.d] = 1;
        prev = n;
      }
      n = n.next;
    }
  }

  function printList(n) {
    while (n) {
      console.log(n.d);
      n = n.next;
    }
  }

  removeDuplicates();
  printList(head);

  return;
};

module.exports = solution;
