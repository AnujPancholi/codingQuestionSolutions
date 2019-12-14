/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Linked List Elements"
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
    public ListNode removeElements(ListNode head, int val) {
        ListNode p = head;
        while(head!=null && head.val==val){
            p=head;
            head=head.next;
            p.next=null;
        }
        p=head;
        ListNode q = null;
        while(p!=null && p.next!=null){
            if(p.next.val==val){
                q=p.next;
                p.next = p.next.next;
                q.next=null;
            } else {
                p=p.next;
            }
        }
        return head;
    }
}