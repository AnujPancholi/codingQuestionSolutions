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
    let duplicateVal = head.next && head.next.val===head.val ? head.val : null;
    while(duplicateVal!==null && head!==null && head.val==duplicateVal){
        const nextNode = head.next;
        head.next = null;
        head = nextNode;
        duplicateVal =  head!==null && head.next!==null && head.next.val===head.val ? head.val : duplicateVal;
    }
    
    if(head){
        head.next = deleteDuplicates(head.next);
    }
    
    return head;

};