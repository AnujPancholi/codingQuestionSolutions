/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function inorderTraversal(root: TreeNode | null): number[] {
    
    const stack: TreeNode[] = [],trav: number[] = [];
    
    let currNode = root;
    
    while(currNode!==null || stack.length!==0){
        while(currNode!==null){
            stack.push(currNode);
            currNode = currNode.left;
        }
        
        currNode = stack.pop();
        trav.push(currNode.val);
        currNode = currNode.right;
        
    }
    
    
    return trav;
};