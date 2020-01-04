/*
    leetcode
    category: "Algorithms"
    problem title: "Find Largest Value in Each Tree Row"
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
    private int getHeight(TreeNode root){
        if(root==null){
            return 0;
        }
        
        return 1+Math.max(getHeight(root.left),getHeight(root.right));
    }
    
    private void addMaxHeight(TreeNode node,int levelIndex,List<Integer> valList){
        if(node==null){
            return;
        }
        Integer currentMaxAtLevel = (Integer)valList.get(levelIndex);
        
        if(currentMaxAtLevel==null || node.val>currentMaxAtLevel.intValue()){
            valList.set(levelIndex,node.val);
        }
        
        addMaxHeight(node.left,levelIndex+1,valList);
        addMaxHeight(node.right,levelIndex+1,valList);
        
    }
    
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> maxValList = new ArrayList<Integer>();
        
        int height = getHeight(root);
        for(int i=0;i<height;++i){
            maxValList.add(i,Integer.MIN_VALUE);
        }
        
        addMaxHeight(root,0,maxValList);
        
        
        return maxValList;
        
        
    }
}