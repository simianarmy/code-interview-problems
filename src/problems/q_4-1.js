/**
 * Find if there is a path from nodes S to E in a directed graph
 *
 * Solution:
 * Time:
 * Space
 **/
const { DirectedGraph, BFSearch } = require('../lib/Graph');
const { Queue } = require('../lib/Queue');

module.exports = (input) => {
  let g = new DirectedGraph();

  // just hardcode graph nodes
  let s = g.addChild('S');
  let b = g.addChild('B');
  let d = g.addChild('D');
  let e = g.addChild('E');

  g.addEdge(s, b);
  g.addEdge(b, d);
  g.addEdge(d, e);

  function isConnection(start, end) {
    let queue = new Queue();
    start.marked = true;
    queue.add(start);

    while (!queue.isEmpty()) {
      let r = queue.remove();

      for (let n of r.getAdjacent()) {
        if (!n.marked) {
          if (n.name === end.name) {
            return true;
          }
          n.marked = true;
          queue.add(n);
        }
      }
    }
    return false;
  }

  return isConnection(s, e);
}
