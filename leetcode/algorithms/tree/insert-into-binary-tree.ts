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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    
    if(root===null){
        const freshNode = new TreeNode(val);
        root = freshNode;
    } else {
        let walker: TreeNode = root;
        while(root!==null){
            if(val<walker.val){
                if(walker.left===null){
                    const freshNode = new TreeNode(val);
                    walker.left = freshNode;
                    break;
                } else {
                    walker = walker.left;
                }
            } else {
                if(walker.right===null){
                    const freshNode = new TreeNode(val);
                    walker.right = freshNode;
                    break;
                } else {
                    walker = walker.right;
                }
            }
        }
    }
    
    return root;
    
    
};