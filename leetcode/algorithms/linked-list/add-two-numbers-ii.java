/*
    leetcode
    category: "Algorithms"
    problem title: "Add Two Numbers II"
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
    private ListNode reverseList(ListNode head){
        if(head==null || head.next==null){
            return head;
        }
        ListNode headNode = reverseList(head.next);
        head.next.next=head;
        head.next=null;
        return headNode;
        
    }
    
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        l1 = reverseList(l1);
        l2 = reverseList(l2);
        ListNode resultHead=null,resultTail=null,t1=l1,t2=l2;
        int sumResult=0,carry=0;
        while((t1!=null && t2!=null) || (carry>0)){
            sumResult=(t1!=null ? t1.val : 0)+(t2!=null ? t2.val : 0)+carry;
            ListNode resultNode = new ListNode(sumResult%10);
            if(resultHead==null){
                resultHead=resultNode;
                resultTail=resultNode;
            } else{
                resultTail.next = resultNode;
                resultTail=resultNode;
            }
            carry = (int)(sumResult/10);
            if(t1!=null){
                t1=t1.next;
            }
            if(t2!=null){
                t2=t2.next;
            }
        }
        
        ListNode remainderNode = t1==null ? t2 : t1;
        while(remainderNode!=null){
            ListNode resultNode = new ListNode(remainderNode.val);
            resultTail.next = resultNode;
            resultTail = resultNode;
            remainderNode=remainderNode.next;
        }
        return reverseList(resultHead);
    }
}