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
    public List<Integer> postorderTraversal(TreeNode root) {
        
        List<Integer> travList = new ArrayList<Integer>();
        if(root==null){
            return travList;
        }
        Stack<TreeNode> nodeStack = new Stack<TreeNode>();
        
        nodeStack.push(root);
        
        while(!nodeStack.isEmpty()){
            TreeNode currNode = nodeStack.pop();
            travList.add(0,currNode.val);
            if(currNode.left!=null){
                nodeStack.push(currNode.left);
            }
            if(currNode.right!=null){
                nodeStack.push(currNode.right);
            }
        }
        
        return travList;
        
        
    }
}