/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Zigzag Level Order Traversal"
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
    private int getTreeHeight(TreeNode node){
        if(node==null){
            return 0;
        }
        
        return 1+Math.max(getTreeHeight(node.left),getTreeHeight(node.right));
    }
    
    private void addLevelInList(TreeNode node,List<List<Integer>> list,int level,int listIndex,boolean isReverse){
        if(node==null){
            return;
        }
        if(level==1){
            list.get(listIndex).add(node.val);
        } else {
            if(isReverse){
                addLevelInList(node.right,list,level-1,listIndex,isReverse);
                addLevelInList(node.left,list,level-1,listIndex,isReverse);
            } else {
                addLevelInList(node.left,list,level-1,listIndex,isReverse);
                addLevelInList(node.right,list,level-1,listIndex,isReverse);
            }
        }
    }
    
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        int height = getTreeHeight(root);
        List<List<Integer>> ansList = new ArrayList<List<Integer>>();
        for(int i=0;i<height;++i){
            ansList.add(new ArrayList<Integer>());
        }
        for(int i=1;i<=height;++i){
            addLevelInList(root,ansList,i,i-1,i%2==0);
        }
        return ansList;
    }
}