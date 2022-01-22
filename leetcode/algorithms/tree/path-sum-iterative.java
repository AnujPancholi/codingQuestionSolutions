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
    private boolean isLeafNode(TreeNode node){
        return node.left==null && node.right==null;
    }
    public boolean hasPathSum(TreeNode root, int targetSum) {
        
        if(root==null){
            return false;
        }
        
        Stack<Pair<TreeNode,Integer>> stk = new Stack<Pair<TreeNode,Integer>>();
        
        boolean containsSum=false;
        
        stk.push(new Pair<TreeNode,Integer>(root,0));
        
        while(!stk.isEmpty()){
            Pair<TreeNode,Integer> currPair = stk.pop();
            TreeNode currNode = currPair.getKey();
            int parentSum = currPair.getValue();
            int currSum = parentSum+currNode.val;
            
            if(currSum==targetSum && isLeafNode(currNode)){
                containsSum = true;
                break;
            }
            
            if(currNode.right!=null)stk.push(new Pair<TreeNode,Integer>(currNode.right,currSum));
            if(currNode.left!=null)stk.push(new Pair<TreeNode,Integer>(currNode.left,currSum));
        }
        
        return containsSum;
    }
}