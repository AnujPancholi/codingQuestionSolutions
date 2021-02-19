/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Preorder Traversal"
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

function preorder(root: TreeNode | null, order: number[]): void {
    if(root===null){
        return;
    }
    order.push(root.val);;
    preorder(root.left,order);
    preorder(root.right,order);
}

function preorderTraversal(root: TreeNode | null): number[] {
    const order: number[] = [];
    preorder(root,order);
    
    return order;

};