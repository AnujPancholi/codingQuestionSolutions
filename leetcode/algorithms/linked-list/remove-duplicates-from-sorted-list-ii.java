/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Duplicates From Sorted List - II"
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
    public ListNode deleteDuplicates(ListNode head) {
        if(head==null){
            return null;
        }
        ListNode cleanedListHead = null, cleanedListTail=null;
        ListNode walkerNode = head;
        
        while(walkerNode!=null){
            ListNode originalWalkerNode = walkerNode;
            while(walkerNode.next!=null && walkerNode.next.val==walkerNode.val){
                walkerNode=walkerNode.next;
            }
            if(walkerNode.equals(originalWalkerNode)){
                ListNode nodeToInsert = new ListNode(walkerNode.val);
                if(cleanedListHead==null){
                    cleanedListHead=nodeToInsert;
                    cleanedListTail=nodeToInsert;
                } else {
                    cleanedListTail.next=nodeToInsert;
                    cleanedListTail=nodeToInsert;
                }
            }
            walkerNode=walkerNode.next;
        }
        
        return cleanedListHead;
        
    }
}