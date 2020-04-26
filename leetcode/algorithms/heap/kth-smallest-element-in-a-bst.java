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
    private void populateHeapWithTree(TreeNode node, int k,PriorityQueue<Integer> heap){
        if(node==null){
            return;
        }
        heap.add(node.val);
        if(heap.size()>k){
            heap.poll();
        }
        populateHeapWithTree(node.left,k,heap);
        populateHeapWithTree(node.right,k,heap);
    }
    public int kthSmallest(TreeNode root, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(new Comparator(){
            public int compare(Object i1, Object i2){
                return (Integer)(i2) - (Integer)(i1);
            }
        });
        
        populateHeapWithTree(root.left,k,maxHeap);
        if(maxHeap.size()<k){
            maxHeap.add(root.val);
            if(maxHeap.size()>k){
                maxHeap.poll();
            }
            populateHeapWithTree(root.right,k,maxHeap);
        }
        return maxHeap.peek();
        
    }
}