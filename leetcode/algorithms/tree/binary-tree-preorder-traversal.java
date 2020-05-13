/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Preorder Traversal"
*/


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
    
    private void populatePreorderList(TreeNode node,List<Integer> list){
        if(node==null){
            return;
        }
        
        list.add(node.val);
        populatePreorderList(node.left,list);
        populatePreorderList(node.right,list);
        
    }
    
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> preorderList  = new ArrayList<Integer>();
        populatePreorderList(root,preorderList);
        
        return preorderList;
        
    }
}