// 144. Binary Tree Preorder Traversal-Rucursive Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]
var preorderTraversal = function (root) {
  let res = [];
  function traversal(curr) {
    if (!curr) return;
    res.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return res;
};

// 94. Binary Tree Inorder Traversal-Rucursive Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
var inorderTraversal = function (root) {
  let res = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    res.push(curr.val);
    traversal(curr.right);
  }
  traversal(root);
  return res;
};

// 145. Binary Tree Postorder Traversal-Rucursive Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
var postorderTraversal = function (root) {
  let res = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    res.push(curr.val);
  }
  traversal(root);
  return res;
};

// 144. Binary Tree Preorder Traversal-Iterative Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]
var preorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    res.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }
  return res;
};

// 94. Binary Tree Inorder Traversal-Iterative Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
var inorderTraversal = function (root) {
  let ans = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
};

// 145. Binary Tree Postorder Traversal-Iterative Two stack
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
var postorderTraversal = function (root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];
  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr?.left && s1.push(curr.left);
    curr?.right && s1.push(curr.right);
  }
  let res = [];
  while (s2.length) {
    res.push(s2.pop().val);
  }
  return res;
};

// 145. Binary Tree Postorder Traversal-Iterative One stack
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
var postorderTraversal = function (root) {
  let stack = [];
  let curr = root;
  let ans = [];
  let lastVisisted;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    let peekNode = stack[stack.length - 1];
    if (peekNode.right && peekNode.right !== lastVisisted) {
      curr = peekNode.right;
    } else {
      ans.push(peekNode.val);
      lastVisisted = stack.pop();
    }
  }
  return ans;
};

// 102. Binary Tree Level Order Traversal--Iterative Approach
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let q = [root];
  while (q.length) {
    let size = q.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      level.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ans.push(level);
  }
  return ans;
};

// 102. Binary Tree Level Order Traversal--Recursive Approach
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let traversal = (curr, level) => {
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  };
  traversal(root, 0);
  return ans;
};

// 104. Maximum Depth of Binary Tree
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
var maxDepth = function (root) {
  if (!root) return 0;
  let maxLevel = 0;
  let traversal = (curr, level) => {
    maxLevel = Math.max(level, maxLevel);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  };
  traversal(root, 1);
  return maxLevel;
};
// 112. Path Sum
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
var hasPathSum = function (root, targetSum) {
  if (!root) return 0;
  let traversal = (curr, currSum) => {
    let newSum = currSum + curr.val;
    if (!curr.left && !curr.right) {
      if (newSum === targetSum) {
        return true;
      }
    }
    return (
      (curr.left && traversal(curr.left, newSum)) ||
      (curr.right && traversal(curr.right, newSum)) ||
      false
    );
  };
  return traversal(root, 0);
};

// 101. Symmetric Tree--Recursive Approach
// Input: root = [1,2,2,3,4,4,3]
// Output: true
var isSymmetric = function (root) {
  let isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };
  return isMirror(root.left, root.right);
};

// 101. Symmetric Tree--Iterative Approach
// Input: root = [1,2,2,3,4,4,3]
// Output: true
var isSymmetric = function (root) {
  let q = [root.left, root.right];
  while (q.length) {
    let p1 = q.shift();
    let p2 = q.shift();
    if (!p1 && !p2) continue;
    if (!p1 || !p2) return false;
    if (p1.val !== p2.val) return false;
    q.push(p1.left, p2.right);
    q.push(p1.right, p2.left);
  }
  return true;
};

// 226. Invert Binary Tree
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
var invertTree = function (root) {
  if (!root) return root;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// 100. Same Tree
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

// 110. Balanced Binary Tree
// Input: root = [3,9,20,null,null,15,7]
// Output: true
var isBalanced = function (root) {
  let ans = true;
  let calculateHeight = (curr) => {
    if (!curr) return 0;
    let leftHeight = calculateHeight(curr.left);
    let rightHeight = calculateHeight(curr.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  };
  calculateHeight(root);
  return ans;
};

// 543. Diameter of Binary Tree
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3]
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  let findDepth = (curr) => {
    if (!curr) return 0;
    let leftDepth = findDepth(curr.left);
    let rightDepth = findDepth(curr.right);
    let currDepth = leftDepth + rightDepth;
    maxDiameter = Math.max(currDepth, maxDiameter);
    return 1 + Math.max(leftDepth, rightDepth);
  };
  findDepth(root);
  return maxDiameter;
};

// 103. Binary Tree Zigzag Level Order Traversal--Recursive
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let traversal = (curr, level) => {
    if (!res[level]) res[level] = [];
    if (level % 2 === 1) res[level].unshift(curr.val);
    else res[level].push(curr.val);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  };
  traversal(root, 0);
  return res;
};
// 103. Binary Tree Zigzag Level Order Traversal--Iterative
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let level = 0;
  let q = [root];
  while (q.length) {
    let levelArray = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      if (level % 2 === 1) levelArray.unshift(curr.val);
      else levelArray.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    res.push(levelArray);
    level++;
  }
  return res;
};
// 572. Subtree of Another Tree
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);
  return hashRoot.includes(hashSubRoot);
};
let serialize = function (root) {
  let hash = "";
  let traversal = (curr) => {
    if (!curr) {
      hash += "-#";
      return;
    }
    hash = hash + "-" + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  };
  traversal(root);
  return hash;
};
// 236. Lowest Common Ancestor of a Binary Tree
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  let traversal = (curr) => {
    let count = 0;
    if (!curr) return 0;
    let ansOnLeft = traversal(curr.left);
    let ansOnRight = traversal(curr.right);
    if (p.val === curr.val || q.val === curr.val) ++count;
    count = count + ansOnLeft + ansOnRight;
    if (count === 2 && !lca) lca = curr;
    return count;
  };
  traversal(root);
  return lca;
};
// 199. Binary Tree Right Side View-Iterative
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
var rightSideView = function (root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      i == 0 && res.push(curr.val);
      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }
  return res;
};
// 199. Binary Tree Right Side View-Recursive
var rightSideView = function (root) {
  let res = [];
  let traversal = (curr, level) => {
    if (!curr) return;
    if (res.length === level) res.push(curr.val);
    traversal(curr.right, level + 1);
    traversal(curr.left, level + 1);
  };
  traversal(root, 0);
  return res;
};

// 1448. Count Good Nodes in Binary Tree
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
var goodNodes = function (root) {
  let ans = 0;
  let traversal = (curr, maxSeenSoFar) => {
    if (curr.val >= maxSeenSoFar) {
      ++ans;
    }
    let currMax = Math.max(maxSeenSoFar, curr.val);
    curr.left && traversal(curr.left, currMax);
    curr.right && traversal(curr.right, currMax);
  };
  traversal(root, -Infinity);
  return ans;
};

// 116. Populating Next Right Pointers in Each Node
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
var connect = function (root) {
  if (!root) return root;
  let traversal = (curr) => {
    if (curr.left) {
      curr.left.next = curr.right;
    }
    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }
    curr.left && traversal(curr.left);
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return root;
};
// 124. Binary Tree Maximum Path Sum
// Input: root = [1,2,3]
// Output: 6
var maxPathSum = function (root) {
  let maxSumPath = -Infinity;
  let traversal = (curr) => {
    if (!curr) return 0;
    let maxLeft = Math.max(0, traversal(curr.left));
    let maxRight = Math.max(0, traversal(curr.right));
    currMax = curr.val + maxLeft + maxRight;
    maxSumPath = Math.max(currMax, maxSumPath);

    return curr.val + Math.max(maxLeft, maxRight);
  };
  traversal(root);
  return maxSumPath;
};
