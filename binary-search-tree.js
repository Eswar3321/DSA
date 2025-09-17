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

// 700. Search in a Binary Search Tree
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
var searchBST = function (root, val) {
  if (!root || root.val === val) return root;

  return root.val < val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
};

// 701. Insert into a Binary Search Tree
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};

// 230. Kth Smallest Element in a BST
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;
  let traversal = (curr) => {
    if (ans !== null) return;
    curr.left && traversal(curr.left);
    --count;
    if (count === 0) {
      ans = curr.val;
    }
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return ans;
};

// 235. Lowest Common Ancestor of a Binary Search Tree
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
