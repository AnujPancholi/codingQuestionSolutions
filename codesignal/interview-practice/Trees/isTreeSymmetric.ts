/*
    codesignal
    category: "interview-practice/Arrays"
    problem title: "isTreeSymmetric"
*/


//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
function areNodesSymmetrical(a: Tree<number>,b: Tree<number>){
    
    if(a===null && b===null){
        return true;
    } else if (a && b && a.value===b.value){
        return areNodesSymmetrical(a.left,b.right) && areNodesSymmetrical(a.right, b.left);
    } else {
        return false;
    }
}

function isTreeSymmetric(t: Tree<number>): boolean {
    return t===null || areNodesSymmetrical(t.left, t.right);
}