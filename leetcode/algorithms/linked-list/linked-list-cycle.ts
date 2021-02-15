/*
    leetcode
    category: "Algorithms"
    problem title: "Linked List Cycle"
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

function hasCycle(head: ListNode | null): boolean {
    let h=head,t=head;
    if(head===null || head.next===null){
        return false;
    }
    do{
        h = !h || h.next===null ? null : h.next.next;
        t = t.next;
    }while(h!==t && h!==null && t!==null);
    
    return (h===t);
};