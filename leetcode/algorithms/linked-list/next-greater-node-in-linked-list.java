/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Node in Linked List"
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
    private int getNextLargerNode(ListNode node){
        int VAL = node.val;
        int nextLargerNode = 0;
        while(node.next!=null){
            node=node.next;
            if(node.val>VAL){
                nextLargerNode=node.val;
                break;
            }
        }
        return nextLargerNode;
    }
    public int[] nextLargerNodes(ListNode head) {
        ListNode p = head;
        ArrayList<Integer> largerNodesList = new ArrayList<Integer>();
        while(p!=null){
            largerNodesList.add(getNextLargerNode(p));
            p=p.next;
        }
        int[] ans = new int[largerNodesList.size()];
        int index = 0;
        for(Integer i : largerNodesList){
            ans[index++] = i.intValue();
        }
        return ans;
    }
}