/*
    leetcode
    category: "Algorithms"
    problem title: "Path Sum"
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
        if(node!=null && node.right==null && node.left==null){
            return true;
        } else {
            return false;
        }
    } 
    public boolean hasPathSum(TreeNode root, int sum) {
        
        if(root==null){
                return false;
        }
        
        if(isLeafNode(root) && sum==root.val){
                return true;
        }
        return hasPathSum(root.right,sum-root.val) || hasPathSum(root.left,sum-root.val);
    }
}