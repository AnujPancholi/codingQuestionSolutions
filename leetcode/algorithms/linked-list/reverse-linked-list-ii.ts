/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Linked List II"
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

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    let counter: number = 1;
    if(head===null){
        return null;
    }
    let p: ListNode | null = head, t: ListNode | null = null;
    while(counter<m){
        if(counter===m-1){
            t=p;
        }
        p = p!.next;
        ++counter;
    }
    let h = p;
    let l: ListNode | null = null, q = p;
    while(counter<=n){
        q = p!.next;
        p!.next = l;
        l = p;
        p = q;
        ++counter;
    }
    
    if(t===null){
        head = l;
    } else {
        t!.next = l;
    }
    h!.next = p;
    
    return head;
        
};