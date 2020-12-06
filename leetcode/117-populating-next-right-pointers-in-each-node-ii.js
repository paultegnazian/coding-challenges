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
  if (!root) return null
  const queue = [root, null]
  while (queue.length) {
    const node = queue.shift()
    node.next = queue[0] || queue.shift()
    //undefined queue[0] assigned null (the shifted value),
    //and shifts the queue
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    if (!node.next && queue.length) queue.push(null)
  }
  return root;
};