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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head===null){
        return head;
    }
    
    let duplicateNumber = null;
    while(head.next!==null && head.next.val===head.val){
        duplicateNumber = head.val;
        head.next = head.next.next;
    }
    
    if(head.val===duplicateNumber){
        return deleteDuplicates(head.next)
    }
    
    head.next = deleteDuplicates(head.next);
    
    
    return head;

};