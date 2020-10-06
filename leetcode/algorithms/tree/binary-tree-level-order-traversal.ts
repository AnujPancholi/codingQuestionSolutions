/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Level Order Traversal"
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


function getTreeHeight(root: TreeNode | null): number {
    if(root===null){
        return 0;
    }
    
    return 1 + Math.max(getTreeHeight(root.left),getTreeHeight(root.right));
}

function populateLevelOrderTraversal(root: TreeNode | null,level: number,traversalArr: number[][]){
    if(root===null){
        return;
    }
    traversalArr[level].push(root.val);
    populateLevelOrderTraversal(root.left,level+1,traversalArr);
    populateLevelOrderTraversal(root.right,level+1,traversalArr);
}


function levelOrder(root: TreeNode | null): number[][] {
    
    const height: number = getTreeHeight(root);
    
    // console.log(height);
    
    const traversalArr: number[][] = Array.from({
        length: height
    },() => {return []});
    
    // console.log(traversalArr);
                                                
    populateLevelOrderTraversal(root,0,traversalArr);
    
    return traversalArr;
    
};