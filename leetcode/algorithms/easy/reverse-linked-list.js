/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Linked List"
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

//recursive solution
var reverseList = function(head) {
    if(!head){
        return head;
    }
    let reversedListHead = head.next ? reverseList(head.next) : head;
    if(reversedListHead!=head){
        head.next.next = head;
        head.next = null;
    }
    return reversedListHead;
};