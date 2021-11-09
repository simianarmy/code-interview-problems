// TODO: The linkedlist class
//
class Node {
  d = 0;
  next = null;

  constructor(val) {
    this.d = val;
  }

  append(val) {
    let end = new Node(val);
    let n = this;
    while (n.next) {
      n = n.next;
    }
    n.next = end;
  }
}

function  printAll(node) {
  let all = [];
  let n = node;

  while (n) {
    all.push(n.d);
    n = n.next;
  }
  console.log(all);
}

module.exports = {
  Node,
  printAll
};
