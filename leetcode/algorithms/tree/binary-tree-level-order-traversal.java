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
    
    private void populateLevelOrderTrav(TreeNode root, int level, List<List<Integer>> levelOrderTravList) {
         if(root==null){
             return;
         }
        
        levelOrderTravList.get(level).add(root.val);
        populateLevelOrderTrav(root.left,level+1,levelOrderTravList);
        populateLevelOrderTrav(root.right,level+1,levelOrderTravList);
        
    }
    
    private int getHeight(TreeNode root) {
        if(root==null){
            return 0;
        }
        
        return 1 + Math.max(getHeight(root.left),getHeight(root.right));
        
    }
    
    public List<List<Integer>> levelOrder(TreeNode root) {
        
        int height = getHeight(root);
        
        List<List<Integer>> levelOrderTravList = new ArrayList<List<Integer>>();
        
        for(int i=0;i<height;++i){
            levelOrderTravList.add(new ArrayList<Integer>());
        }
        
        populateLevelOrderTrav(root,0,levelOrderTravList);
        
        return levelOrderTravList;
        
        
    }
}