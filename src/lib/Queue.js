class QueueNode {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class Queue {
  first = null; // QueueNode
  last = null;

  add(item) {
    let n = new QueueNode(item);

    if (this.last) {
      this.last.next = n;
    }
    this.last = n;

    if (!this.first) {
      this.first = this.last;
    }
  }

  remove() {
    if (!this.first) throw new Error("empty queue");
    let data = this.first.data;

    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return data;
  }

  peek() {
    if (!this.first) throw new Error("empty queue");
    return this.first.data;
  }

  isEmpty() {
    return !this.first;
  }
}
module.exports = {
  Queue
};



