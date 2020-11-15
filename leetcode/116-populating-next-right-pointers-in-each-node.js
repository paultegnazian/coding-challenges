/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return root
    let queue = [root] //data type is array of memory addresses
    let level = 0
    while(queue.length > 0) {
        let numToShift = Math.pow(2,level)// same as 1<<level
        let prevNode
        while (numToShift > 0) {
            let node = queue.shift()      
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            if (prevNode) prevNode.next = node
            prevNode = node
            numToShift--
        }
        level++
    }
    return root
};