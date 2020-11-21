/*
    leetcode
    category: "Algorithms"
    problem title: "Invert Binary Tree"
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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root===null){
        return root;
    }
    const temp: TreeNode = root.right;
    root.right=invertTree(root.left);
    root.left=invertTree(temp);
    
    return root;
    
};