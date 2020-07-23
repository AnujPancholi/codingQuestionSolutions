/*
    leetcode
    category: "Algorithms"
    problem title: "Average of Levels In Binary Tree"
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

class levelStats {
    double sum;
    int count;
    
    public levelStats(){
        sum=0;
        count=0;
    }
}

class Solution {
    private int getTreeHeight(TreeNode root){
        if(root==null){
            return 0;
        }
        
        return 1+Math.max(getTreeHeight(root.left),getTreeHeight(root.right));
    }
    
    private void populateStats(TreeNode node,int level,ArrayList<levelStats> stats){
        if(node==null){
            return;
        }
        levelStats currLevelStat = stats.get(level);
        
        // System.out.println(Integer.toString(node.val)+" "+Integer.toString(level)+" "+Double.toString(currLevelStat.sum)+" "+Integer.toString(currLevelStat.count));
        
        currLevelStat.sum = ((currLevelStat.sum*currLevelStat.count)+node.val)/(currLevelStat.count+1);
        ++currLevelStat.count;
        
        populateStats(node.left,level+1,stats);
        populateStats(node.right,level+1,stats);
    }
    
    
    public List<Double> averageOfLevels(TreeNode root) {
        int treeHeight = getTreeHeight(root);
        
        // System.out.println(treeHeight);
        
        ArrayList<levelStats> stats = new ArrayList<levelStats>();
        
        for(int i=0;i<treeHeight;++i){
            stats.add(new levelStats());
        }
        
        populateStats(root,0,stats);
        
        
        // System.out.println(stats);
        
        
        ArrayList<Double> avgList = new ArrayList<Double>();
        
        for(levelStats stat : stats){
            avgList.add((double)(stat.sum));
        }
        
        return avgList;
        
        // return new ArrayList<Double>(Arrays.asList(new Double[1]));
        
        
        
    }
}