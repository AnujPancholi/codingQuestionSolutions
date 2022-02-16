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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    
    if(head===null){
        return head;
    }
    
    let i: number = 0,ptr: ListNode = head;
    
    while(i<n){
        ptr = ptr.next;
        ++i;
    }
    
    let prevNode: ListNode = null, nextNode: ListNode = head;
    
    while(ptr!==null){
        prevNode = nextNode;
        nextNode = nextNode.next;
        ptr = ptr.next;
    }
    
    if(prevNode===null){
        head = head.next;
    } else {
        prevNode.next = prevNode.next.next;
    }
    
    return head;

};