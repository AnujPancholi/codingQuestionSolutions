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
    public ListNode deleteDuplicates(ListNode head) {
        
        ListNode curr = head;
    
        while(curr!=null){
            if(curr.next!=null && curr.val==curr.next.val){
                ListNode nxtNode = curr.next;
                while(nxtNode!=null && nxtNode.val==curr.val){
                    nxtNode = nxtNode.next;
                }
                curr.next = nxtNode;
            } else {
                curr = curr.next;
            }
        }
        
        return head;
        
    }
}