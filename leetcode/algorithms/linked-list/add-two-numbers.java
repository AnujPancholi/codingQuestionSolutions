/*
    leetcode
    category: "Algorithms"
    problem title: "Add Two Numbers"
*/

    //an easier version of a question I solved earlier

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
        
        ListNode head = null,tail=null,w1=l1, w2=l2;
        int carry=0;
        while((w1!=null && w2!=null) || carry>0){
            int sum = (w1==null ? 0 : w1.val) + (w2==null ? 0 : w2.val) + carry;
            ListNode dNode = new ListNode(sum%10);
            carry = (int)(sum/10);
            if(w1!=null)w1=w1.next;
            if(w2!=null)w2=w2.next;
            
            if(head==null){
                head = dNode;
                tail = dNode;
            } else {
                tail.next=dNode;
                tail=dNode;
            }
        }
        ListNode remainderNode = w1==null ? w2 : w1;
        while(remainderNode!=null){
            ListNode dNode = new ListNode(remainderNode.val);
            tail.next=dNode;
            tail=dNode;
            remainderNode = remainderNode.next;
        }
        
        return head;
        
    }
}