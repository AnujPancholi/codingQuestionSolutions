/*
    leetcode
    category: "Algorithms"
    problem title: "Linked List Random Node"
*/

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
    
    int length;
    ListNode listHead;

    /** @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node. */
    public Solution(ListNode head) {
        length=0;
        listHead = head;
        ListNode walker = head;
        while(walker!=null){
            walker=walker.next;
            ++length;
        }
        
    }
    
    /** Returns a random node's value. */
    public int getRandom() {
        int randomPos = ((int)(Math.random()*100000))%length,i=0;
        ListNode walker = listHead;
        
        while(i<randomPos){
            walker=walker.next;
            ++i;
        }
        
        return walker.val;
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.getRandom();
 */