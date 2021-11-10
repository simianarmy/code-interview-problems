/**
 * Create list of depths of a binary tree
 *
 * Solution:
 * Time:
 * Space
 **/
const {BinTreeNode, printAll} = require('../lib/BinaryTree');
const {Node: LLNode, printAll: printList} = require('../lib/LinkedList');

module.exports = (input) => {
  // hardcode a binary tree
  let root = new BinTreeNode('A');
  root.left = new BinTreeNode('B');
  root.right = new BinTreeNode('C');
  root.left.left = new BinTreeNode('D');
  root.left.right = new BinTreeNode('E');
  root.right.left = new BinTreeNode('F');
  root.left.left.left = new BinTreeNode('G');

  printAll(root);

  let depths = [];

  function dfs(node, depth) {
    if (!node) return;
    if (!depths[depth]) {
      depths[depth] = new LLNode(node.data);
    } else {
      depths[depth].append(node.data);
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  for (let d = 0; d < depths.length; d++) {
    console.log({depth: d});
    printList(depths[d]);
  }
}
