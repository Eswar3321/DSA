// 144. Binary Tree Preorder Traversal-Rucursive Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]
var preorderTraversal = function(root) {
    let res = [];
    function traversal(curr) {
        if(!curr) return
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
var inorderTraversal = function(root) {
    let res = [];
    function traversal(curr) {
        if(!curr) return;
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
var postorderTraversal = function(root) {
    let res = [];
    function traversal(curr) {
        if(!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        res.push(curr.val);
    }
    traversal(root);
    return res;
};

// 144. Binary Tree Preorder Traversal-Interactive Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    let stack = [root];
    while(stack.length) {
        let curr = stack.pop();
        res.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }
    return res;
};

// 94. Binary Tree Inorder Traversal-Interactive Approach
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
var inorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    let curr = root;

    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};

// 145. Binary Tree Postorder Traversal-Interactive Two stack
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
var postorderTraversal = function(root) {
    if(!root) return [];
    let s1 = [root];
    let s2 = [];
    while(s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr?.left && s1.push(curr.left);
        curr?.right && s1.push(curr.right);
    }
    let res = [];
    while(s2.length) {
        res.push(s2.pop().val);
    }
    return res;
};

// 145. Binary Tree Postorder Traversal-Interactive One stack
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
var postorderTraversal = function(root) {
    let stack = [];
    let curr = root;
    let ans = [];
    let lastVisisted;
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        let peekNode = stack[stack.length-1];
        if(peekNode.right && peekNode.right !== lastVisisted) {
            curr = peekNode.right;
        } else {
            ans.push(peekNode.val);
            lastVisisted = stack.pop();
        }
    }
    return ans;
};
