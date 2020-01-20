/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Difference Between Node and Ancestor"
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const addDiffs = (root,ancs,maxValObj) => {
    if(root===null){
        return;
    }
    ancs.forEach(anc => {
        let currDiff = Math.abs(anc-root.val);
        if(currDiff>maxValObj.val){
            maxValObj.val=currDiff;
        }
    })
    addDiffs(root.right,[...ancs,root.val],maxValObj);
    addDiffs(root.left,[...ancs,root.val],maxValObj);
    
}

var maxAncestorDiff = function(root) {
    
    let allVals = [];
    let maxValObj ={
        val: Number.MIN_SAFE_INTEGER
    };
    addDiffs(root,[],maxValObj);
    return maxValObj.val;
    
};