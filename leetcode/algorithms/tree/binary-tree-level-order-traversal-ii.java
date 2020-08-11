/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Level Order Traversal II"
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
    private int getTreeHeight(TreeNode root){
        if(root==null){
            return 0;
        }
        
        return 1+Math.max(getTreeHeight(root.left),getTreeHeight(root.right));
    }
    
    private void populateListForLevel(TreeNode node, int level, ArrayList<List<Integer>> levelsList){
        if(node==null){
            return;
        }
        
        populateListForLevel(node.left,level-1,levelsList);
        populateListForLevel(node.right,level-1,levelsList);
        
        levelsList.get(level).add(node.val);
        
    }
    
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        int height = getTreeHeight(root);
        
        ArrayList<List<Integer>> levelsList = new ArrayList<List<Integer>>();
        
        for(int i=0;i<height;++i){
            levelsList.add(new ArrayList<Integer>());
        }
        
        populateListForLevel(root,height-1,levelsList);
        
        return levelsList;
        
    }
}