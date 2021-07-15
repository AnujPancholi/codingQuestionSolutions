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



function levelOrder(root: TreeNode | null): number[][] {
    
    const queue: Array<{ 
        node: TreeNode;
        level: number;
    }> = [];
    
    if(root!==null){
        queue.push({
            node: root,
            level: 0,
        })
    }
    
    const result: number[][] = [];
    
    while(queue.length>0){
        const curr = queue.shift();
        
        if(curr.node.left){
            queue.push({
                node: curr.node.left,
                level: curr.level+1,
            })
        }
        
        if(curr.node.right){
            queue.push({
                node: curr.node.right,
                level: curr.level+1,
            })
        }
        
        if(curr.level===result.length){
            result.push([curr.node.val]);
        } else {
            result[curr.level].push(curr.node.val);
        }
        
    }
    
    return result;
          
};