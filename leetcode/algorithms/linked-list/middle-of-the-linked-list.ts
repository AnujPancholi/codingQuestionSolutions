/*
    leetcode
    category: "Algorithms"
    problem title: "Middle of the Linked List"
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

function middleNode(head: ListNode | null): ListNode | null {
    let length: number = 0;
    
    let wNode: ListNode | null = head;
    
    while(wNode!=null){
        wNode=wNode.next;
        ++length;
    }
    
    wNode = head;
    let num: number = 0;
    while(num<Math.floor(length/2)){
          wNode=wNode!.next;
        ++num;
          }
    
    return wNode;
    
};