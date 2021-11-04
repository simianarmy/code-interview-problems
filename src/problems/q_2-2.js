/**
 * Return Kth to last element in linked list
 *
 * Solution:
 * Time: O(N)
 *
 **/
const Node = require('../lib/LinkedList');

module.exports = (input) => {
  let k = input[0];
  let head = new Node(input[1]);

  for (let i = 2; i < input.length; i++) {
    head.append(input[i]);
  }

  // trivial version - we know the list size
  /*
  // get count
  let size = 0;
  let n = head;

  while (n) {
    size++;
    n = n.next;
  }
  if (k < 0 || k > size) {
    return null;
  }
  let elementIndex = size - k;
  n = head;

  for (let i = 0; i < elementIndex; i++) {
    n = n.next;
  }
  */

  // recursive version
  function printKth(node, k) {
    if (!node) return 0;

    let i =  printKth(node.next, k) + 1;
    if (k == i) {
      console.log('kth ', node.d);
    }
    return i;
  }

  printKth(head, k);
}
