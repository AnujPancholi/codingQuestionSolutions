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

function getTiltParams(root: TreeNode | null): [number,number] {
    if(root===null){
        return [0,0];
    }
    
    const leftParams = getTiltParams(root.left);
    const rightParams = getTiltParams(root.right);
    
    return [root.val+leftParams[0]+rightParams[0],Math.abs(leftParams[0]-rightParams[0])+leftParams[1]+rightParams[1]]
}

function findTilt(root: TreeNode | null): number {
    return getTiltParams(root)[1];

};