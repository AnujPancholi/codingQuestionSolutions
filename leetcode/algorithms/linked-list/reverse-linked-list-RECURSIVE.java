/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Linked List"
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

//recursive solution

class Solution {
    public ListNode reverseList(ListNode head) {
        if(head==null || head.next==null){
            return head;
        }
        ListNode ultimateHead = reverseList(head.next);
        head.next.next=head;
        head.next=null;
        return ultimateHead;
    }
}