// 98. Validate Binary Search Tree
// Input: root = [2,1,3]
// Output: true
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
var isValidBST = function (root) {
  let validate = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };
  return validate(root, -Infinity, Infinity);
};
