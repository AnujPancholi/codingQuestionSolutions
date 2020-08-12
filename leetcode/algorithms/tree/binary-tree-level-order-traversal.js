/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Tree Level Order Traversal II"
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

const populateList = (node, level, list) => {
    if(node===null){
        return;
    }
    
    populateList(node.left,level-1,list);
    populateList(node.right,level-1,list);
    
    list[level].push(node.val);
}

const getTreeHeight = (root) => {
    
    if(root===null){
        return 0;
    }
    
    return 1+Math.max(getTreeHeight(root.left),getTreeHeight(root.right));
    
}


var levelOrderBottom = function(root) {
    const height = getTreeHeight(root);
    const list = Array.from({length: height},() => ([]));
    
    populateList(root,height-1,list);
    
    return list;
};