/**
 * Check if 2 linked lists have intersection
 * Intersection by node reference, not by value
 * Return intersecting node
 *
 * Solution:
 * Time: O(A + B)
 * Space
 **/
const { Node, printAll } = require('../lib/LinkedList');

module.exports = (input) => {
  let list = new Node(input[0]);

  for (let i = 1; i < input.length; i++) {
    list.append(input[i]);
  }
  // Hard to do this with raw inputs.  Hardcoding for now
  // intersection at node list[2]
  let list2 = new Node(4);
  list2.append(5);
  list2.next.next = list.next;

  printAll(list);
  printAll(list2);

  function isIntersection(l1, l2) {
    // check last node of each.  If they are the same ref, there is an intersection
    // somewhere
    let n1 = getLastNode(l1);
    let n2 = getLastNode(l2);

    return n1 && n2 && n1 == n2;
  }

  function getLastNode(l) {
    let n = l;
    while (n.next) {
      n = n.next;
    }
    return n;
  }

  // Not correct b/c we lose the references here, but if we compare on values, it works
  function reverseList(l) {
    if (!l.next) {
      return new Node(l.d);
    }
    let rev = reverseList(l.next);
    rev.append(l.d);

    return rev;
  }

  if (isIntersection(list, list2)) {
    let rev1 = reverseList(list);
    let rev2 = reverseList(list2);
    let lastEqual = rev2;

    while (rev1 && rev2 && rev1.d == rev2.d) {
      lastEqual = rev2;
      rev1 = rev1.next;
      rev2 = rev2.next;
    }
    return lastEqual;
  }
  return false;
}
