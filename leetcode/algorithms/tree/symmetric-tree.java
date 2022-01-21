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
    private boolean areNodesSymmetric(TreeNode t1,TreeNode t2){
        return (t1==null && t2==null) || ((t1!=null && t2!=null && t1.val==t2.val) && areNodesSymmetric(t1.left,t2.right) && areNodesSymmetric(t1.right,t2.left));
    }
    public boolean isSymmetric(TreeNode root) {
        return areNodesSymmetric(root,root);
    }
}