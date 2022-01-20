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
        
        if(root==null){
            return new ArrayList();
        }
        
        Stack<TreeNode> stk = new Stack<TreeNode>();
        List<Integer> inorderList = new ArrayList<Integer>();
        
        TreeNode curr = root;
        while(curr!=null || !stk.isEmpty()){
            while(curr!=null){
                stk.push(curr);
                curr=curr.left;
            }
            curr = stk.pop();
            inorderList.add(curr.val);
            curr = curr.right;
        }
        
        return inorderList;
    }
}