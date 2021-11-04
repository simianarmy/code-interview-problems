/**
 * Sum Lists
 * 7 -> 1 -> 6 + 5 -> 9 -> 2 = 617 + 295 = 912
 * Return sum as list reversed: 2 -> 1 -> 9
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

  function listToNum(l, pow) {
    if (!l) return 0;
    return l.d * pow + listToNum(l.next, pow * 10);
  }
  let n1 = listToNum(l1, 1);
  let n2 = listToNum(l2, 1);
  let sum = n1 + n2;
  let digits = sum.toString().split('').reverse();

  let res = new Node(digits[0]);
  for (let i = 1; i < digits.length; i++) {
    res.append(digits[i]);
  }
  printAll(res);
}
