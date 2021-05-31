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

function getMaxNodeValue(root: TreeNode): number {
    if(root===null){
        return Number.MIN_SAFE_INTEGER;
    }
    
    if(root.right===null){
        return root.val;
    }
    
    return getMaxNodeValue(root.right);
}

function getMinNodeValue(root: TreeNode): number {
    if(root===null){
        return Number.MAX_SAFE_INTEGER;
    }
    
    if(root.left===null){
        return root.val;
    }
    
    return getMinNodeValue(root.left);
}

function getMinimumDifference(root: TreeNode | null): number {
    if(root===null){
        return Number.MAX_SAFE_INTEGER;
    }
    
    const minAbsDiffWithChildNodes = Math.min(Math.abs(root.val - getMaxNodeValue(root.left)),Math.abs(root.val - getMinNodeValue(root.right)));
    
    return Math.min(minAbsDiffWithChildNodes,getMinimumDifference(root.right),getMinimumDifference(root.left));
    
};