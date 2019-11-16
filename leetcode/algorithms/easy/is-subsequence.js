/*
    leetcode
    category: "Algorithms"
    problem title: "Is Subsequence"
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length===0){
        return true;
    }
    let subIndex=-1;
    for(let i=0;i<t.length && subIndex<s.length-1;i++){
        if(t[i]===s[subIndex+1]){
            subIndex++;
        }       
    }
    return subIndex===s.length-1 ? true : false;
    
};