class BinTreeNode {
  left = null;
  right = null;
  data = null;

  constructor(val) {
    this.data = val;
  }
}

function inOrderTraversal(node, visitFn) {
  if (node) {
    inOrderTraversal(node.left, visitFn);
    visitFn(node);
    inOrderTraversal(node.right, visitFn);
  }
}

function preOrderTraversal(node, visitFn) {
  if (node) {
    visitFn(node);
    inOrderTraversal(node.left, visitFn);
    inOrderTraversal(node.right, visitFn);
  }
}

function traverse(node, fn, level=0) {
    if (node === null) return;
    // Use .repeat():
    fn(node, level);

    if (node.left) {
      traverse(node.left, fn, level + 1);
    }
    if (node.right) {
      traverse(node.right, fn, level + 1);
    }
}

function printAll(root) {
  traverse(root, (node, level) => console.log(" ".repeat(level), node.data));
}

module.exports = {
  BinTreeNode,
  inOrderTraversal,
  printAll
};

