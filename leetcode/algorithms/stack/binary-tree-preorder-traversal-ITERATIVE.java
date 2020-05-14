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


/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Preorder Traversal"
*/

    //Iterative solution. Not too efficient or elegant, came up with it myself on the fly

class Solution {
    
    private void populatePreorderList(TreeNode node,List<Integer> list){
        if(node==null){
            return;
        }
        Stack<TreeNode> nodeStack = new Stack<TreeNode>();
        HashSet<TreeNode> exploredSet = new HashSet<TreeNode>();
        TreeNode currNode = node;
        boolean isNewNode = true;
        while(currNode!=null || !nodeStack.empty()){
            
            exploredSet.add(currNode);
            
            if(isNewNode){
                list.add(currNode.val);
                nodeStack.push(currNode);
            }
            
            if(currNode.left!=null && !exploredSet.contains(currNode.left)){
                currNode = currNode.left;
                isNewNode=true;
            } else if(currNode.right!=null && !exploredSet.contains(currNode.right)){
                currNode = currNode.right;
                isNewNode=true;
            } else {
                nodeStack.pop();
                isNewNode=false;
                if(!nodeStack.empty()){
                    currNode=nodeStack.peek();
                } else {
                    currNode=null;
                }
            }
        }
        
    }
    
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> preorderList  = new ArrayList<Integer>();
        populatePreorderList(root,preorderList);
        
        return preorderList;
        
    }
}