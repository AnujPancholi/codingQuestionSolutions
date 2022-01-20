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
    public List<Integer> preorderTraversal(TreeNode root) {
        
        if(root==null){
            return new ArrayList();
        }
        
        Stack<TreeNode> elemStack = new Stack<TreeNode>();
        List<Integer> intList = new ArrayList<Integer>();
        
        elemStack.push(root);
        
        while(!elemStack.isEmpty()){
            TreeNode nextElem = elemStack.pop();
            if(nextElem.right!=null)elemStack.push(nextElem.right);
            if(nextElem.left!=null)elemStack.push(nextElem.left);
            intList.add(nextElem.val);
        }
        
        return intList;
    }
}