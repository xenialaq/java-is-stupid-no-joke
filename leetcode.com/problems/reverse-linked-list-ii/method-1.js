/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const extraHead = new ListNode(999, head);
    left++; right++;
    // extraHead = [999,1,2,3,4,5], left = 3, right = 5
    let L = extraHead; // left cursor
    for (let i = 0; i < left - 2; i++) {
        L = L.next;
    }
    const LL = L; // saved to link up with 4, after reversing
    L = L.next;
    // L = 2
    let L_ = null; // L for the newly constructed
    let R_ = L; // R for the newly constructed
    for (let i = -1; i < right - left; i++) {
        const nextToMove = L.next;
        L.next = L_;
        L_ = L;
        L = nextToMove;
    }
    R_.next = L; // semantically confusing, but L is RR and is now 5
    LL.next = L_; // semantically confusing, but L_ is LL.next and is now 4
    return extraHead.next;
};
