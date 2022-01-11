/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    return helper(0, root)
};

var helper = function(base, node) {
    if (!node) {
        // do not skip
        return 0
    }
    if (node.val !== undefined && node.left === null && node.right === null) {
        // leaf
        return base * 2 + node.val
    } else {
        const partial = base * 2 + node.val
        return helper(partial, node.left) + helper(partial, node.right) 
    }
}
