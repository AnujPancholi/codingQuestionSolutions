/*
    codesignal
    category: "interview-practice/Trees"
    problem title: "hasPathWithSum"
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

function hasPathWithGivenSum(t: Tree<number>, s: number): boolean {
    if(!t){
        return false;
    }
    
    if(t.left===null && t.right===null){
        return s===t.value;
    }
    
    return (hasPathWithGivenSum(t.left,s-t.value)) || (hasPathWithGivenSum(t.right,s-t.value))
}
