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

function getHeightBalanceTupl(root: TreeNode | null): [number,boolean] {
    if(root===null){
        return [0,true];
    }
    
    const [leftHeight,isLeftBalanced] = getHeightBalanceTupl(root.left);
    const [rightHeight,isRightBalanced] = getHeightBalanceTupl(root.right);
    
    const height = 1 + Math.max(leftHeight,rightHeight);
    const heightBalance = leftHeight - rightHeight;
    
    return [height,isLeftBalanced && isRightBalanced && Math.abs(heightBalance)<=1];
    
}


function isBalanced(root: TreeNode | null): boolean {
    return getHeightBalanceTupl(root)[1];
};