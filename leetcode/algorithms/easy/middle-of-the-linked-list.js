/*
    leetcode
    category: "Algorithms"
    problem title: "Middle of the Linked List"
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
var middleNode = function(head) {
    let fast=head,slow=head,counter=0;
    while(fast.next!=null){
        fast = fast.next;
        if(counter%2==0){
            slow=slow.next;
        }
        ++counter;
    }
    return slow;
    
};