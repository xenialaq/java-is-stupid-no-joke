/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (fast === null) {
        // delete head
        return head.next;
    }
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

//[1] 1
//[1,2] 1
//[1,2] 2
//[1,2,3,4] 1
//[1,2,3,4] 2
//[1,2,3,4] 3
//[1,2,3,4] 4
