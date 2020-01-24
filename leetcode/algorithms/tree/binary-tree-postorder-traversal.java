/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Postorder Traversal"
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
    
    private void addPostOrderTraversalToList(TreeNode node,List<Integer> pOTrav){
        
        if(node==null){
            return;
        }
        addPostOrderTraversalToList(node.left,pOTrav);
        addPostOrderTraversalToList(node.right,pOTrav);
        pOTrav.add(node.val);
    }
    
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> pOTrav = new ArrayList<Integer>();
        
        addPostOrderTraversalToList(root,pOTrav);
        
        return pOTrav;
        
    }
}