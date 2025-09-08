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
