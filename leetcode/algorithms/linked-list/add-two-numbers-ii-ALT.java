/*
    leetcode
    category: "Algorithms"
    problem title: "Add Two Numbers II"
*/

    //faster, stack-based solution

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    
    
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<Integer> stack1 = new Stack<Integer>(), stack2 = new Stack<Integer>();
        
        ListNode walker = l1;
        while(walker!=null){
            stack1.push(walker.val);
            walker = walker.next;
        }
        walker=l2;
        while(walker!=null){
            stack2.push(walker.val);
            walker = walker.next;
        }
        
        int carry=0;
        ListNode head = null;
        while((!stack1.empty() && !stack2.empty()) || carry>0){
            int d1 = (stack1.empty() ? 0 : stack1.pop());
            int d2 = (stack2.empty() ? 0 : stack2.pop());
            int currentSum = d1+d2+carry;
            ListNode digitNode = new ListNode(currentSum%10);
            if(head==null){
                head=digitNode;
            } else {
                digitNode.next=head;
                head=digitNode;
            }
            carry = (int)(currentSum/10);
        }
        Stack largerStack = stack1.empty() ? stack2 : stack1;
        while(!largerStack.empty()){
            ListNode digitNode = new ListNode((Integer)(largerStack.pop()));
            digitNode.next = head;
            head=digitNode;
        }
        
        return head;
    }
}