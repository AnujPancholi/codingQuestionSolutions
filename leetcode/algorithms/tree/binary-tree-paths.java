/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Paths"
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
    private boolean isLeafNode(TreeNode root){
        if(root!=null && root.left==null && root.right==null){
            return true;
        } else {
            return false;
        }
    }
    private void addPaths(TreeNode root,String currentPath,List<String> pathsList){
        if(root==null){
            return;
        }
        if(isLeafNode(root)){
            pathsList.add(currentPath.concat(Integer.toString(root.val)));   
            return;
        }
        
        addPaths(root.left,currentPath.concat(Integer.toString(root.val)+"->"), pathsList);
        addPaths(root.right,currentPath.concat(Integer.toString(root.val)+"->"), pathsList);
        
    }
        
    public List<String> binaryTreePaths(TreeNode root) {
        
        ArrayList<String> paths = new ArrayList<String>();
        if(root==null){
            return paths;
        }
        
        addPaths(root,"",paths);
        return paths;
    }
}