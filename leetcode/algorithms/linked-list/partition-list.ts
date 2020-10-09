/*
    leetcode
    category: "Algorithms"
    problem title: "Partition List"
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

function partition(head: ListNode | null, x: number): ListNode | null {
    let firstHead: ListNode | null = null,secondHead: ListNode | null = null;
    let tail1: ListNode | null = null,tail2: ListNode | null = null;
    
    let walker: ListNode | null = head;
    
    while(walker!==null){
        if(walker!.val<x){
            if(firstHead===null){
                firstHead = walker;
                tail1 = walker;
            } else {
                tail1!.next = walker;
                tail1 = walker;
            }
            walker = walker!.next;
            tail1!.next=null;
        } else {
            if(secondHead===null){
                secondHead = walker;
                tail2=walker;
            } else {
                tail2!.next = walker;
                tail2 = walker;
            }
            walker = walker!.next;
            tail2!.next=null;
        }
    }
    
    if(tail1===null){
        return secondHead;
    } else {
        tail1!.next=secondHead;
        return firstHead;
    }
    

};