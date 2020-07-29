/*
    leetcode
    category: "Algorithms"
    problem title: "Average of Levels In Binary Tree"
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
 * @return {number[]}
 */

const getTreeHeight = (root) => {
    if(root===null){
        return 0;
    }
    
    return 1+Math.max(getTreeHeight(root.left),getTreeHeight(root.right));
}

const populateLevelData = (node, level, levelData) => {
    if(node===null){
        return;
    }
    levelData[level].avg = ((levelData[level].avg*levelData[level].count)+node.val)/(levelData[level].count+1);
    levelData[level].count++;
    
    populateLevelData(node.left,level+1,levelData);
    populateLevelData(node.right,level+1,levelData);
    
}

var averageOfLevels = function(root) {
    const height = getTreeHeight(root);
    
    const levelData = Array.from({length: height},(x,i) => ({
        count: 0,
        avg: 0
    }));
    
    populateLevelData(root,0,levelData);
    
    return levelData.map(data => data.avg);
    
    
};