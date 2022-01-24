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
    private boolean isValidBSTImpl(TreeNode root,long minVal,long maxVal){
        if(root==null){
            return true;
        }
        
        return root.val<maxVal && root.val>minVal && isValidBSTImpl(root.left,minVal,root.val) && isValidBSTImpl(root.right,root.val,maxVal);
    }
    
    public boolean isValidBST(TreeNode root) {
        
        return isValidBSTImpl(root,((long)Integer.MIN_VALUE) - 1,((long)Integer.MAX_VALUE) + 1);
    }
}