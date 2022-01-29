/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode slow = head,fast = head,trail = null;
        
        int i = 0;
        while(i<n){
            fast = fast.next;
            ++i;
        }
        
        while(fast!=null){
            fast = fast.next;
            trail = slow;
            slow = slow.next;
        }
        if(slow==head){
            return head.next;
        }
        trail.next = trail.next.next;
        return head;
    }
}