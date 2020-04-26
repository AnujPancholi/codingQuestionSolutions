/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Smallest Element in a BST"
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private void populateHeapFromTree(TreeNode node,int k,PriorityQueue<Integer> heap){
        if(node==null){
            return;
        }
        heap.add(node.val);
        if(heap.size()>k){
            heap.poll();
        }
        populateHeapFromTree(node.left,k,heap);
        populateHeapFromTree(node.right,k,heap);
    }
    public int kthSmallest(TreeNode root, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(new Comparator(){
            public int compare(Object i1, Object i2){
                return ((Integer)i2)-((Integer)i1);
            }
        });
        
        populateHeapFromTree(root,k,maxHeap);
        
        return maxHeap.peek();
        
        
    }
}