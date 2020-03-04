/*
    leetcode
    category: "Algorithms"
    problem title: "Insertion Sort List"
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
    public ListNode insertionSortList(ListNode head) {
        ListNode sortedHead = null;
        ListNode p = head;
        while(p!=null){
            ListNode insNode = new ListNode(p.val);
            ListNode q = sortedHead;
            if(q==null){
                sortedHead = insNode;
                p=p.next;
                continue;
            }
            while(q.next!=null && q.next.val<insNode.val){
                q=q.next;
            }
            if(q==sortedHead){
                if(q.val<=insNode.val){
                    insNode.next = q.next;
                    q.next=insNode;
                } else{
                    insNode.next = q;
                    sortedHead = insNode;
                }
            } else {
                if(q.next==null){
                    q.next=insNode;
                } else {
                    insNode.next = q.next;
                    q.next=insNode;
                }
            }
            p=p.next;
        }
        return sortedHead;  
    }
}