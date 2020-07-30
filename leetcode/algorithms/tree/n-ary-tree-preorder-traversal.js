/*
    leetcode
    category: "Algorithms"
    problem title: "N-ary Tree Preorder Traversal"
*/


/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

const populatePreorder = (root,preorder) => {
    if(root===null){
        return;
    }
    preorder.push(root.val);
    root.children.forEach(child => {
        populatePreorder(child,preorder);
        
    })
    
}


var preorder = function(root) {
    
    const preorder = [];
    
    populatePreorder(root,preorder);
    
    return preorder;
    
    
    
};