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
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow=head,fast=head;
    while(fast!=null){
        if(fast.next===null){
            return false;
        }
        fast = fast.next.next;
        slow= slow.next;
        if(fast===slow){
            return true;
        }
    }
    return false;
};