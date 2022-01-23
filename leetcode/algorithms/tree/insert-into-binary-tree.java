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
    private void addNewNodeToBST(TreeNode root,int val){
        if(root==null){
            return;
        }
        if(val<=root.val){
            if(root.left==null){
                root.left = new TreeNode(val);
            } else {
                addNewNodeToBST(root.left,val);
            }
        } else {
            if(root.right==null){
                root.right = new TreeNode(val);
            } else {
                addNewNodeToBST(root.right,val);
            }
        }
    }
    
    public TreeNode insertIntoBST(TreeNode root, int val) {
        
        addNewNodeToBST(root,val);
        return root==null ? new TreeNode(val) : root;
        
    }
}