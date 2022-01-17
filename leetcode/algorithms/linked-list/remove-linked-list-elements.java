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
    public ListNode removeElements(ListNode head, int val) {
        
        while(head!=null && head.val==val){
            head = head.next;
        }
        
        ListNode cursorNode = head;

        while(cursorNode!=null){
            if(cursorNode.next!=null && cursorNode.next.val==val){
                ListNode nextNode = cursorNode.next;
                while(nextNode!=null && nextNode.val==val){
                    nextNode = nextNode.next;
                }
                cursorNode.next = nextNode;
            }
            cursorNode = cursorNode.next;
        }
        
        return head;
    }
}