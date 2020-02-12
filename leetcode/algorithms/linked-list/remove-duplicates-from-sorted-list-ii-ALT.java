/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Duplicates From Sorted List - II"
*/
    //Alternative solution - in-place modification of list, rather than new list creation

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head==null || head.next==null){
            return head;
        }
        ListNode walkerNode = head;
        boolean isHead = true;
        while(walkerNode!=null && walkerNode.next!=null){
            ListNode originalWalkerNode = isHead ? walkerNode : walkerNode.next;
            ListNode scoutNode = isHead ? walkerNode : walkerNode.next;
            while(scoutNode!=null && scoutNode.next!=null && scoutNode.next.val==scoutNode.val){
                scoutNode=scoutNode.next;
            }
            if(!scoutNode.equals(originalWalkerNode)){
                if(isHead){
                    head=scoutNode.next;
                    walkerNode=head;
                } else {
                    walkerNode.next=scoutNode.next;
                }
            } else if (isHead){
                isHead=false;
                
            } else {
                walkerNode=walkerNode.next;
            }
        }
        return head;
        
    }
}