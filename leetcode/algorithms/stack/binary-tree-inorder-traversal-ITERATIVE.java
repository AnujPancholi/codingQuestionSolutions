/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Inorder Traversal"
*/

    //Iterative solution. Not too efficient or elegant, came up with it myself on the fly

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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorderList = new ArrayList<Integer>();
        Stack<TreeNode> nodeStack = new Stack<TreeNode>();
        HashSet<TreeNode> visitedSet = new HashSet<TreeNode>();
        
        TreeNode currNode = root;
        while(currNode!=null || !nodeStack.empty()){
            
            
            visitedSet.add(currNode);
            
            if(currNode.left!=null && !visitedSet.contains(currNode.left)){
                nodeStack.push(currNode);
                currNode=currNode.left;
            } else if(currNode.right!=null && !visitedSet.contains(currNode.right)){
                inorderList.add(currNode.val);
                currNode = currNode.right;
            } else {
                inorderList.add(currNode.val);
                currNode = nodeStack.empty() ? null : nodeStack.pop();
            }
            
        }
        
        return inorderList;
    
    }
}