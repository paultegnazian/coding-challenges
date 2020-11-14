/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //counter is backwards, right to left --> stack is a good idea in this case
    let node1 = l1
    let node2 = l2
    let stack1 = []
    let stack2 = []
    // build stacks
    while (node1 != null) {
        stack1.push(node1.val)
        node1 = node1.next
    }
    while (node2 != null) {
        stack2.push(node2.val)
        node2 = node2.next
    }
    // build new singly linked list, looping and creating new heads
    let result = null
    let value1, value2, newValue, sumVal
    let carry = 0
    while (stack1.length > 0 || stack2.length > 0) {
        value1 = stack1.pop() // 8
        value2 = stack2.pop() // 9
        if (value1 === undefined) {
            value1 = 0
        }
        if (value2 === undefined) {
            value2 = 0
        }
        sumVal = value1 + value2 + carry
        newValue = sumVal % 10
        result = new ListNode(newValue, result)
        carry = Math.floor(sumVal / 10)
    }
    if (carry > 0) {
        newValue = carry
        result = new ListNode(newValue, result)
    }
    return result
}