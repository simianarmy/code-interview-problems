/**
 * Check if binary tree is balanced: any 2 subtree depths diff <= 1
 *
 * Solution:
 * Time:
 * Space
 **/
const {BinTreeNode, printAll} = require('../lib/BinaryTree');

module.exports = (input) => {
  // hardcode a binary tree
  let root = new BinTreeNode(10);
  root.left = new BinTreeNode(5);
  root.left.left = new BinTreeNode(6);
  root.right = new BinTreeNode(20);
  root.right.left = new BinTreeNode(3);
  root.right.right = new BinTreeNode(7);
  root.right.left.left = new BinTreeNode(9);
  root.right.left.right = new BinTreeNode(18);

  printAll(root);

  function checkBalanced(node, depth, balanced = true) {
    if (!node || !balanced) return [depth, balanced];

    let [leftHeight, leftBal] = checkBalanced(node.left, depth + 1, balanced);
    let [rightHeight, rightBal] = checkBalanced(node.right, depth + 1, balanced);
    console.log({data: node.data, leftHeight, rightHeight});

    if (!leftBal || !rightBal || Math.abs(leftHeight - rightHeight) > 1) { // inbalanced
      return [depth, false];
    }
    return [Math.max(leftHeight, rightHeight), balanced];
  }

  let [, isBalanced] = checkBalanced(root, 0);
  return isBalanced;
}
