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
    public ListNode swapPairs(ListNode head) {
        
        if(head==null || head.next==null){
            return head;
        }
        
        ListNode p1 = head,p2 = null,nextPairHead = null,prevPairTail = null;
        while(p1!=null){
            p2 = p1.next;
            if(p2==null){
                break;
            }
            
            nextPairHead = p2.next;
            p2.next = p1;
            p1.next = nextPairHead;
            if(p1==head){
                head = p2;
            }
            if(prevPairTail!=null){
                prevPairTail.next = p2;
            }
            prevPairTail = p1;
            p1 = nextPairHead;
        }
        
        
        return head;
    }
}