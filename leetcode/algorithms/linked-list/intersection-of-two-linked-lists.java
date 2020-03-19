/*
    leetcode
    category: "Algorithms"
    problem title: "Intersection of Two Linked List"
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        HashSet<ListNode> nodeSet = new HashSet<ListNode>();
        ListNode p = headA;
        while(p!=null){
            nodeSet.add(p);
            p=p.next;
        }
        p = headB;
        while(p!=null){
            if(nodeSet.contains(p)){
                break;
            }
            p=p.next;
        }
        return p;
    }
}