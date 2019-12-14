/*
	leetcode
	category: "Algorithms"
	problem title: "Valid Parentheses"
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const stackArr = [];
    for(let i=0;i<s.length;i++){
        // let diff = null;
        if(stackArr.length>0){
            if([1,2].indexOf((s.charCodeAt(i)-stackArr[stackArr.length-1].charCodeAt(0)))>-1){
                stackArr.splice(stackArr.length-1);
            } else {
                stackArr.push(s[i]);
            }
        } else {
            stackArr.push(s[i]);
        }
    }
    return stackArr.length===0;
};