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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let sumRange = 0
  
  function traverse(node) {
      if (!node) return
      traverse(node.left)
      traverse(node.right)
      if (low <= node.val && node.val <= high) {
          sumRange += node.val
      }
  }
  traverse(root)
  return sumRange
};