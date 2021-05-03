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

function getLeftMostTreeNode(root: TreeNode | null): TreeNode | null {
    let node: TreeNode | null = root;
    if(node===null){
        return null;
    }
    while(node.left!==null){
        node = node.left;
    }
    return node;
}


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if(root===null){
        return null;
    } else if(root.val>key){
        root.left = deleteNode(root.left,key);
    } else if(root.val<key){
        root.right = deleteNode(root.right,key);
    } else {
        if(root.left===null && root.right===null){
            return null;
        } else if(root.left && root.right===null){
            return root.left;
        } else if(root.right && root.left===null){
            return root.right;
        } else {
            const minTreeNodeOfRightSubtree: TreeNode | null = getLeftMostTreeNode(root.right);
            const freshNode = new TreeNode(minTreeNodeOfRightSubtree.val);
            freshNode.left = root.left;
            freshNode.right = deleteNode(root.right,minTreeNodeOfRightSubtree.val);
            root = freshNode;
        }
    }
    return root;
    
};