/*
    leetcode
    category: "Algorithms"
    problem title: "Diameter of Binary Tree"
*/

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

function getTreeHeight(root: TreeNode | null): number {
    if(root===null){
        return 0;
    }
    
    return 1+Math.max(getTreeHeight(root.left),getTreeHeight(root.right));
}



function diameterOfBinaryTree(root: TreeNode | null): number {
    if(root===null){
        return 0;
    }
    
    const diaThroughRoot: number = getTreeHeight(root.left) + getTreeHeight(root.right);
    
    const diaThroughChildren: number = Math.max(diameterOfBinaryTree(root.left),diameterOfBinaryTree(root.right));
    
    return Math.max(diaThroughRoot,diaThroughChildren);
    

};