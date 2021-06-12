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

function compare(r1: TreeNode | null, r2: TreeNode | null): boolean {
    if(r1===null && r2===null){
        return true;
    }
    
    if(r1===null || r2===null){
        return false;
    }
    
    return r1.val===r2.val && compare(r1.left,r2.right) && compare(r1.right,r2.left); 
}

function isSymmetric(root: TreeNode | null): boolean {
    
    return compare(root,root);
    
};