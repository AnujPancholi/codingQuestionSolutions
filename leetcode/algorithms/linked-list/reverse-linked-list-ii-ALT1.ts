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
    let st: ListNode | null = null, rt: ListNode | null = null, i: number = 1;
    let w1: ListNode | null = head;
    while(i<m){
        if(i===m-1){
            st = w1;
        }
        w1=w1.next;
        ++i;
    }
    
    let ih: ListNode = w1, leader: ListNode = w1,prev: ListNode | null = null;
    
    while(i<n){
        leader = w1.next;
        w1.next = prev;
        prev = w1;
        w1=leader;
        ++i;
    }
    
    // console.log(w1.val)
    
    rt=w1.next;
    w1.next = prev;
    
    if(st===null){
        head = w1;
    } else {
        st.next = w1;
    }
    
    ih.next = rt;
    
    return head;
    
};