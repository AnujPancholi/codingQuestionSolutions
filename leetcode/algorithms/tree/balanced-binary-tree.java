/*
    leetcode
    category: "Algorithms"
    problem title: "Balanced Binary Tree"
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
    private long getHeight(TreeNode root){
        if(root==null){
            return -1;
        } else return 1+Math.max(getHeight(root.left),getHeight(root.right));
    }
    public boolean isBalanced(TreeNode root) {
        if(root==null){
            return true;
        } 
        return Math.abs(getHeight(root.left)-getHeight(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right);
    }
}