/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Node in Linked List"
*/

    //alternate, faster, stack-based solution

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

class ValueToIndexPair {
    public int value;
    public int index;
    public ValueToIndexPair(int val, int ind){
        value = val;
        index = ind;
    }
}

class Solution {
    public int[] nextLargerNodes(ListNode head) {
        Stack<ValueToIndexPair> nextGreaterStack = new Stack<ValueToIndexPair>();
        HashMap<Integer,Integer> indexToAnsMap = new HashMap<Integer,Integer>();
        ListNode currNode = head;
        
        int currIndex = 0;
        while(currNode!=null){
            while(!nextGreaterStack.empty() && nextGreaterStack.peek().value<currNode.val){
                ValueToIndexPair topPair = nextGreaterStack.pop();
                indexToAnsMap.put(topPair.index,currNode.val);
            }
            
            nextGreaterStack.push(new ValueToIndexPair(currNode.val,currIndex));
            
            currNode=currNode.next;
            ++currIndex;
        }
        
        int[] ansArr = new int[currIndex];
        
        for(int i=0;i<ansArr.length;++i){
            ansArr[i] = indexToAnsMap.getOrDefault(i,0);
        }
        
        return ansArr;
        
        
        
    }
}