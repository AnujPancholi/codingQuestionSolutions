/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if(list1==null){
            return list2;
        }
        if(list2==null){
            return list1;
        }
        ListNode head = null, tail = null;
        
        while(list1!=null && list2!=null){
            ListNode nextNode = list1.val<=list2.val ? list1 : list2;
            if(head==null){
                head = nextNode;
                tail = nextNode;
            } else {
                tail.next = nextNode;
                tail = nextNode;
            }
            if(nextNode==list1){
                list1 = list1.next;
            } else {
                list2 = list2.next;
            }
        }
        
        ListNode nonNullNode = list1==null ? list2 : list1;
        
        tail.next = nonNullNode;
        return head;
        
    }
}