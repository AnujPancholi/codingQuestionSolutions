/*
    leetcode
    category: "Algorithms"
    difficulty: "easy"
    problem title: "Longest Common Prefix"
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcp = "";
    if(!strs.length){
        return "";
    }
    const minLength = Math.min(...strs.map(str => str.length));
    let killFlag = false;
    for(let i=0;i<minLength;i++){
        let currentChar = strs[0][i];
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!=currentChar){
                killFlag=true;
                break;
            }
        }
        if(killFlag){
            break;
        } else {
            lcp+=currentChar;
        }
    }
    return lcp;
};