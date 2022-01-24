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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        
        TreeNode gNode = p.val>=q.val ? p : q;
        TreeNode lNode = p.val>=q.val ? q : p;
        
        if(root==null || root.val>=lNode.val && root.val<=gNode.val){
            return root;
        }
        
        return root.val>gNode.val ? lowestCommonAncestor(root.left,lNode,gNode) : lowestCommonAncestor(root.right,lNode,gNode);
        
    }
}