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
    public void reorderList(ListNode head) {
        if(head==null || head.next==null){
            return;
        }
        
        ListNode n = head;
        
        Stack<ListNode> nStack = new Stack<ListNode>();
        while(n!=null){
            nStack.push(n);
            n = n.next;
        }
        
        int halfSize = nStack.size()/2;
        n = head;
        ListNode tailNode = null;
        int i = 0;
        while(i<halfSize){
            ListNode nextNode = n.next;
            ListNode poppedNode = nStack.pop();
            n.next = poppedNode;
            if(tailNode!=null){
                tailNode.next = n;
            }
            tailNode = poppedNode;
            n = nextNode;
            ++i;
        }
        
        if(nStack.size()>halfSize){
            ListNode lastNode = nStack.pop();
            tailNode.next = lastNode;
            tailNode = lastNode;
        }
        tailNode.next = null;
        // return head;
        
    }
}