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
var findTilt = function(root) {
    let sumTilt = 0
    
    function traverse(node) {
        if (!node) return 0
        const sumL = traverse(node.left)
        const sumR = traverse(node.right)
        const tilt = Math.abs(sumL-sumR)
        sumTilt += tilt
        return sumL + sumR + node.val
    }
    traverse(root)
    return sumTilt
};