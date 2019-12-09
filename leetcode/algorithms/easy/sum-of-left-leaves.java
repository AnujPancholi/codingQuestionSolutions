/*
    leetcode
    category: "Algorithms"
    problem title: "Sum of Left Leaves"
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
    
    private boolean isLeafNode(TreeNode node){
        if(node!=null && node.left==null && node.right==null){
            return true;
        } else {
            return false;
        }
    }
    public int sumOfLeftLeaves(TreeNode root) {
        if(root==null){
            return 0;
        } else {
            return (root.left!=null && isLeafNode(root.left) ? root.left.val : 0)+sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right); 
        }
    }
}