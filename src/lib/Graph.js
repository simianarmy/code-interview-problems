const { Queue } = require('./Queue');

class Node {
  name = '';
  children = [];

  constructor(name) {
    this.name = name;
  }

  getAdjacent() {
    return this.children;
  }

  addEdge(n2) {
    this.children.push(n2);
  }
}

class DirectedGraph {
  nodes = [];

  getNodes() {
    return this.nodes;
  }

  addChild(val) {
    let n = new Node(val);
    this.nodes.push(n);
    return n;
  }

  addEdge(node1, node2) {
    node1.addEdge(node2);
  }
}

function BFSearch(root, visitFn) {
  let queue = new Queue();
  root.marked = true;
  queue.add(root);

  while (!queue.isEmpty()) {
    let r = queue.remove();
    //console.log({r});
    visitFn(r);

    for (const n of r.getAdjacent()) {
      if (!n.marked) {
        n.marked = true;
        queue.add(n);
      }
    }
  }
}

module.exports = {
  DirectedGraph,
  BFSearch
};
