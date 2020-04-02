/*
    leetcode
    category: "Algorithms"
    problem title: "Odd Even Linked List"
*/

//alternatives solution, more elegant

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if(head==null || head.next==null){
            return head;
        }
        
        ListNode firstWalker=head;
        ListNode secondWalker = head.next;
        ListNode secondHead = head.next;
        
        while(secondWalker!=null && secondWalker.next!=null){
            firstWalker.next = secondWalker.next;
            firstWalker=firstWalker.next;
            secondWalker.next = firstWalker.next;
            secondWalker = secondWalker.next;
        }
        
        firstWalker.next = secondHead;
        return head;
        
        
    }
}