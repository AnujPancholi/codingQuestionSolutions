/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Inorder Traversal"
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
    
    private void addToInorderTraversal(TreeNode node,List<Integer> inorderTravList){
        if(node==null){
            return;
        }
        addToInorderTraversal(node.left,inorderTravList);
        inorderTravList.add(node.val);
        addToInorderTraversal(node.right,inorderTravList);
    }
    
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorderTravList = new ArrayList<Integer>();
        
        addToInorderTraversal(root,inorderTravList);
        
        return inorderTravList;
        
    }
}