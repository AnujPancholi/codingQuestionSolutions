/*
    leetcode
    category: "Algorithms"
    problem title: "Merge in Between Linked List"
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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    
    let w: ListNode | null = list1, aNode: ListNode | null = null, bNode: ListNode | null = null;
    
    let i: number = 0;
    
    while(i<b){
        if(i===a-1){
            aNode = w;
        }
        w=w.next;
        ++i;
    }
    bNode = w;
    
    w = list2;
    while(w.next!==null){
        w=w.next;
    }
    
    aNode.next = list2;
    w.next=bNode.next;
    
    return list1;
    

};