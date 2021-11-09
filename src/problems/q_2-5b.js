/**
 * Sum Lists
 * 7 -> 1 -> 6 + 5 -> 9 -> 2 = 716 + 592 = 1308
 * Return sum as list: 1 -> 3 -> 0 -> 8
 *
 * Solution:
 * Time:
 * Space
 **/
const { Node, printAll } = require('../lib/LinkedList');

module.exports = (input) => {
  let in1 = input[0].split(' ');
  let in2 = input[1].split(' ');

  let l1 = new Node(parseInt(in1));

  for (let i = 1; i < in1.length; i++) {
    l1.append(parseInt(in1[i]));
  }
  let l2 = new Node(parseInt(in2));

  for (let i = 1; i < in2.length; i++) {
    l2.append(parseInt(in2[i]));
  }
  printAll(l1);
  printAll(l2);

  // algorithm here
  class PartialSum {
    sum = null;
    carry = 0;
  }

  /**
   * @return {PartialSum}
   */
  function sumLists(l1, l2) {
    if (l1 == null || l2 == null) {
      return new PartialSum();
    }
    let sum = sumLists(l1.next, l2.next);
    console.log({sum});

    // add carry to current val
    let val = sum.carry + l1.d + l2.d;
    let fullResult = insertBefore(sum.sum, val % 10);

    sum.sum = fullResult;
    sum.carry = Math.round(val / 10);

    return sum;
  }

  function insertBefore(list, val) {
    let node = new Node(val);
    if (list) {
      node.next = list;
    }
    return node;
  }

  const res = sumLists(l1, l2);
  console.log({res});
  printAll(res.sum);
}
