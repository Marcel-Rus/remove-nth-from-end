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
    if (head.next === null) {
        return null;
    }
    
    let nodeArr = [];
    let node = head;
    
    for (let i = 0; node !== null; i++) {
        nodeArr[i] = node;
        node = node.next;
    }

    if (nodeArr.length - n === 0) {
        head = head.next;
    }

    else {
        nodeArr[nodeArr.length - n - 1].next = nodeArr[nodeArr.length - n - 1].next.next;
    }

    return head;
};