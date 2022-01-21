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

// import javafx.util.Pair;

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        
        if(root==null){
            return new ArrayList<List<Integer>>();
        }
        
        Queue<Pair<TreeNode,Integer>> nodeQueue = new LinkedList<Pair<TreeNode,Integer>>();
        List<List<Integer>> levelOrderList = new ArrayList<List<Integer>>();

        nodeQueue.add(new Pair(root,0));
        
        while(!nodeQueue.isEmpty()){
            Pair<TreeNode,Integer> currPair = nodeQueue.remove();
            
            TreeNode currNode = currPair.getKey();
            Integer level = currPair.getValue();
            
            if(currNode.left!=null)nodeQueue.add(new Pair<TreeNode,Integer>(currNode.left,level+1));
            if(currNode.right!=null)nodeQueue.add(new Pair<TreeNode,Integer>(currNode.right,level+1));
            
             if(levelOrderList.size()<level+1){
                 levelOrderList.add(new ArrayList<Integer>(Arrays.asList(currNode.val)));
             } else {
                 levelOrderList.get(level).add(currNode.val);
             }
            
        }
        
        return levelOrderList;
        
        
        
    }
}