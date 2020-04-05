/*
    leetcode
    category: "Algorithms"
    problem title: "Linked List Cycle"
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head===null || head.next===null){
        return null;
    }
    let slow=head.next,fast=head.next.next;
    while(fast!=null && fast.next!=null && fast!=slow){
        slow=slow.next;
        fast=fast.next.next;
    }
    if(fast!=slow){
        return null;
    }
    slow=head;
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next;
    }
    return slow;
    
};