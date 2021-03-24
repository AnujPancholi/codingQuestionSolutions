function inorder(t: Tree<number>,result: number[]): void {
    if(t===null){
        return;
    }
    
    inorder(t.left,result);
    result.push(t.value);
    inorder(t.right,result);
}

function getInorderTraversal(t: Tree<number>): number[] {
    const result: number[] = [];
    inorder(t,result);
    return result;
}

function kthSmallestInBST(t: Tree<number>, k: number): number {
    
    const inorderTraversal: number[] = getInorderTraversal(t);
    return inorderTraversal[k-1]

}
