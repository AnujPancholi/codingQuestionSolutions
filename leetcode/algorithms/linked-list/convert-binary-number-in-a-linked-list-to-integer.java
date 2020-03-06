/*
    leetcode
    category: "Algorithms"
    problem title: "Convert Binary Number in a Linked List to Integer"
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
    public int getDecimalValue(ListNode head) {
        int len = 0;
        ListNode p = head;
        while(p.next!=null){
            ++len;
            p=p.next;
        }
        p=head;
        int sum=0;
        while(p!=null){
            
            sum+= len==0 ? p.val : Math.pow(p.val*2,len--);
            p=p.next;
        }
        return sum;
    }
}