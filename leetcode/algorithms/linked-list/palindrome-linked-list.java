/*
    leetcode
    category: "Algorithms"
    problem title: "Palindrome Linked List"
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
    public boolean isPalindrome(ListNode head) {
        Stack<Integer> valueStack = new Stack<Integer>();
        int len = 0;
        ListNode p = head;
        while(p!=null){
            ++len;
            p=p.next;
        }
        if(len==1){
            return true;
        }
        int disregardIndex = -1;
        if(len%2!=0){
            disregardIndex = (int)(len/2);
        }
        p=head;
        int counter=0;
        while(p!=null){
            if(counter!=disregardIndex){
                if(!valueStack.empty() && valueStack.peek()==p.val){
                    valueStack.pop();
                } else {
                    valueStack.push(p.val);
                }
            }
            p=p.next;
            ++counter;
        }
        return valueStack.empty();
    }
}