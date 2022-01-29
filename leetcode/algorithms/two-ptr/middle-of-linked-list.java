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
    public ListNode middleNode(ListNode head) {
        int i = 0;
        ListNode fast = head,slow = head;
        while(fast!=null){
            fast = fast.next;
            if(i%2==1)slow = slow.next;
            ++i;
        }
        return slow;
        
    }
}