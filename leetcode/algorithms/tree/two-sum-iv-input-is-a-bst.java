/*
    leetcode
    category: "Algorithms"
    problem title: "Two Sum IV - Input is a BST"
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private boolean findTargetMemoized(TreeNode root, int k, HashSet<Integer> intsSet){
        if(root==null){
            return false;
        }
        int complement = k-root.val;
        if(intsSet.contains(complement)){
            return true;
        }
        
        intsSet.add(root.val);
        
        return findTargetMemoized(root.right,k,intsSet) || findTargetMemoized(root.left,k,intsSet);
        
    }
    public boolean findTarget(TreeNode root, int k) {
        
        HashSet<Integer> intsSet = new HashSet<Integer>();
        
        return findTargetMemoized(root,k,intsSet); 
        
        
    }
}