/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Inorder Traversal"
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

function inorderTrav(root: TreeNode | null, trav: number[]): void {
    if(root===null){
        return;
    }
    inorderTrav(root.left,trav);
    trav.push(root.val);
    inorderTrav(root.right,trav);
}

function inorderTraversal(root: TreeNode | null): number[] {
    const trav: number[] = [];
    inorderTrav(root,trav);
    return trav;
};