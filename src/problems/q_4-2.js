/**
 * Create binary search tree w min height from sorted array
 *
 * Solution:
 * Time:
 * Space
 **/
const {Node, inOrderTraversal} = require('../lib/BinaryTree');

module.exports = (input) => {

  function getArrayMid(arr) {
    if (arr.length === 0) throw new Error("empty array");
    return Math.floor(arr.length / 2);
  }

  function createBinTree(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) {
      return new Node(arr[0]);
    }
    // bisect array and recurse
    let midIndex = getArrayMid(arr);
    let val = arr[midIndex];
    let node = new Node(val);
    node.left = createBinTree(arr.slice(0, midIndex));
    node.right = createBinTree(arr.slice(midIndex + 1));
    return node;
  }

  let tree = createBinTree(input);
  inOrderTraversal(tree, (node) => console.log(node.data));
}
