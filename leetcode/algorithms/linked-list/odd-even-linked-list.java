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
        if(head==null || head.next==null || head.next.next==null){
            return head;
        }
        ListNode p=null,q=null,pt=null,qt=null,h1=null,h2=null,t1=null,t2=null;
        while(true){
            p=head;
            q=head.next;
            
            if(p!=null && p.next!=null){
                p.next=p.next.next;
            }
            if(q!=null && q.next!=null){
                q.next = q.next.next;
                head = q.next==null ? null : q.next.next;
            }   else {
                head = null;
            }
            
            pt = p.next;
            qt = q==null ? null : q.next;
            if(pt!=null){
                pt.next=null;
            }
            if(qt!=null){
                qt.next=null;
            }
            
            if(t1==null && t2==null){
                h1=p;
                h2=q;
                t1=pt;
                t2=qt;
            } else { 
                t1.next=p;
                t2.next=q;
                t1= p.next==null ? p : p.next;
                t2= q==null || q.next==null ? q : q.next;
            }
            
            if(head==null){
                break;
            }
        }
        t1.next=h2;
        return h1;
    }
}