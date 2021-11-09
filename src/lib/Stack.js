class Node {
  data = null;
  next = null;

  constructor(d) {
    this.data = d;
  }
}

class Stack {
  top = null;

  push(d) {
    let node = new Node(d);

    node.next = this.top
    this.top = node;
  }

  pop() {
    if (!this.top) {
      throw new Error("pop: Empty stack");
    }
    let val = this.top.data;
    this.top = this.top.next;

    return val;
  }

  peek() {
    if (!this.top) {
      throw new Error("peek: Empty stack");
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top == null;
  }
}

const printAll = stack => {
  let vals = [];
  let tmp = new Stack();
  while (!stack.isEmpty()) {
    vals.push(stack.pop());
  }
  console.log(vals.join(', '));
  // restore the stack data
  vals.forEach(v => {
    stack.push(v);
  });
};

module.exports = {
  Stack,
  printAll
}


