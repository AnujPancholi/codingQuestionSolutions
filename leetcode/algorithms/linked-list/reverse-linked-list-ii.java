/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Linked List II"
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
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode trailNode = null,leadNode=null,currNode=head,severedTail=null,severedHead=null;
        int counter = 0;
        while(currNode!=null){
            ++counter;
            if(counter==m-1){
                severedTail=currNode;
            }
            if(counter>=m && counter<=n){
                leadNode = currNode.next;
                currNode.next=trailNode;
                if(trailNode==null){
                    severedHead=currNode;
                }
                trailNode=currNode;
                currNode=leadNode;
            } else {
                currNode=currNode.next;
            }
            if(counter==n){
                if(severedTail!=null){
                    severedTail.next=trailNode;
                } else {
                    head=trailNode;
                }
                severedHead.next=currNode;
                break;
            }
        }
        return head;
        
    }
}