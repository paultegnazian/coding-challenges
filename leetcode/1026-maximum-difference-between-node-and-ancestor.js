/** in-order traversal
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
var maxAncestorDiff = function(root) {
    let localMax = -Infinity
    let localMin = Infinity

    function traverse(node, localMax, localMin) {
        if (!node) return localMax-localMin
        const newLocalMax = Math.max(node.val, localMax)
        const newLocalMin = Math.min(node.val, localMin)
        const diffL = traverse(node.left, newLocalMax, newLocalMin)        
        const diffR = traverse(node.right, newLocalMax, newLocalMin)
        return Math.max(diffL, diffR)
    }
    return traverse(root, localMax, localMin)
};