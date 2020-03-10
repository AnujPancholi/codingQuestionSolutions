/*
    leetcode
    category: "Algorithms"
    problem title: "Linked List Components"
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
    public int numComponents(ListNode head, int[] G) {
        HashSet<Integer> subset = new HashSet<Integer>();
        for(int i=0;i<G.length;++i){
            subset.add(G[i]);
        }
        ListNode p = head;
        int totalCount = 0, currentCount=0;
        while(p!=null){
            if(subset.contains(p.val)){
                if(currentCount!=1){
                    ++currentCount;
                }
            } else {
                totalCount+=currentCount;
                currentCount=0;
            }
            p=p.next;
        }
        totalCount+=currentCount;
        return totalCount;
        
    }
}