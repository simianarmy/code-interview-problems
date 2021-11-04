/**
 * Partition linked list around value x
 * All nodes values < x on the left
 * All nodes values >= x on the right
 *
 * Solution:
 * Time:
 * Space
 **/
const { Node, printAll } = require('../lib/LinkedList');

module.exports = (input) => {
  let middleVal = parseInt(input[0]); // target node value
  let head = new Node(parseInt(input[1]));

  for (let i = 2; i < input.length; i++) {
    head.append(parseInt(input[i]));
  }
  console.log({partition: middleVal});
  printAll(head);

  let n = head;
  while (n) {
    if (n.d < middleVal && n != head) {
      console.log({n});
      // add to head
      let nn = new Node(n.d);
      nn.next = head;
      head = nn;
      // remove
      if (n.next) {
        n.d = n.next.d;
        n.next = n.next.next;
      } else {
        break;
      }
      printAll(head);
    } else {
      n = n.next;
    }
  }
  // handle end of list case
  n = head;
  while (n.next) {
    // if at end of list
    if (!n.next.next && n.next.d < middleVal) {
      // remove from end
      n.next = null;
      break;
    }
    n = n.next;
  }

  printAll(head);
}
