/*
    leetcode
    category: "Algorithms"
    problem title: "Odd Even Linked List"
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    
    if(head===null || head.next===null){
        return head;
    }
    let h1=null,h2=null,t1=null,t2=null;
    let p=null,q=null,nextStartNode=null;
    
    while(head!=null){
        p=head;
        q=p.next;
        
        if(h1===null && h2==null){
            h1=p;
            t1=p;
            h2=q;
            t2=q;
        } else {
            t1.next=p;
            t2.next=q;
            t1=p;
            t2=q;
        }
        
        if(q===null){
            head=null;
        } else {
            head=q.next;
        }
        
        p.next=null;
        if(q!=null){
            q.next=null;
        }
    }
    t1.next=h2;
    return h1;
    
    
};