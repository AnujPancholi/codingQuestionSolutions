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

function isValidBstSubtree(root: TreeNode | null): [boolean,number,number] {
    if(root===null){
        return [true,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
    }
    
    const leftBSTResult = isValidBstSubtree(root.left);
    const rightBSTResult = isValidBstSubtree(root.right);
    
    const validity = leftBSTResult[0] && rightBSTResult[0] && (root.left===null || root.left.val<root.val) && (root.right===null || root.right.val>root.val);
    
    const minNodeVal = Math.min(rightBSTResult[1],leftBSTResult[1],root.val)
    const maxNodeVal = Math.max(rightBSTResult[2],leftBSTResult[2],root.val)
    
    return [validity && leftBSTResult[2]<root.val && rightBSTResult[1]>root.val,minNodeVal,maxNodeVal]
}

function isValidBST(root: TreeNode | null): boolean {
    
    return isValidBstSubtree(root)[0];

};