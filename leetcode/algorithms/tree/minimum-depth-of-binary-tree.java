/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Depth of Binary Tree"
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
        if(node.left==null && node.right==null){
            return true;
        } else {
            return false;
        }
    }
    public int minDepth(TreeNode root) {
        
        if(root==null){
            return 0;
        } else if((isLeafNode(root))){
            
            return 1;
        } 
        else {
            // int minOfSubtrees = Math.min(minDepth(root.left),minDepth(root.right));
            int mLeft=minDepth(root.left);
            int mRight=minDepth(root.right);
            if(mRight==0 && mLeft!=0){
                return 1+mLeft;
            } else if(mLeft==0 && mRight!=0){
                return 1+mRight;
            } else {
                return 1+Math.min(mLeft,mRight);
            }
        }       
    }
}