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
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode trailer = null,current=head;
        while(current!=null){
            ListNode nextNode = current.next;
            current.next=trailer;
            trailer=current;
            current=nextNode;
        }
        return trailer;
    }
}