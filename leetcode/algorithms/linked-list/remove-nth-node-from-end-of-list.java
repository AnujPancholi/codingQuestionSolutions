/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Nth Node From End of List"
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        ListNode primaryNode=head,scoutNode=null;
        while(primaryNode!=null){
            scoutNode=primaryNode;
            int i=0;
            while(i<=n && scoutNode!=null){
                scoutNode=scoutNode.next;
                ++i;
            }
            if(i<=n){
                head = head.next;
                break;
            }
            if(scoutNode==null){
                primaryNode.next = primaryNode.next.next;
                break;
            }
            primaryNode=primaryNode.next;
        }
        return head;
        
        
    }
}