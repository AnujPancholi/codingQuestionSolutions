/*
    leetcode
    category: "Algorithms"
    problem title: "Remove All Adjacent Duplicates in String"
*/

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    
    const stackArr = [];
    
    for(let i=0;i<S.length;++i){
        if(stackArr.length===0 || stackArr[stackArr.length-1]!=S[i]){
            stackArr.push(S[i]);
        } else {
            stackArr.pop();
        }
    }
    
    return stackArr.join("");
    
};