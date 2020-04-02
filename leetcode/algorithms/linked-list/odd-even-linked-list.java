/*
    leetcode
    category: "Algorithms"
    problem title: "Odd Even Linked List"
*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if(head==null || head.next==null){
            return head;
        }
        ListNode p=null,q=null,h1=null,h2=null,t1=null,t2=null;
        while(head!=null){
            p=head;
            q=p.next;
            
            if(h1==null && h2==null){
                h1=p;
                h2=q;
            } else {
                t1.next=p;
                t2.next=q;
            }
            t1=p;
            t2=q;
            
            if(q==null){
                head=null;
            } else {
                head = q.next;
            }
            
            p.next=null;
            if(q!=null){
                q.next=null;
            }
        }
        t1.next=h2;
        return h1;
    }
}