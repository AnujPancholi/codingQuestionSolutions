/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Linked List"
*/


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    
    let walker: ListNode | null = head, prev: ListNode | null = null,lead: ListNode | null = null;
    
    if(walker===null){
        return walker;
    }
    
    while(walker!==null){
        lead = walker.next;
        walker.next = prev;
        prev = walker;
        walker = lead;
    }
    
    
    return prev;

};